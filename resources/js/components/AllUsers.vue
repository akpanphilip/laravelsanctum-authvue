<template>
    <v-container>
        <v-card class="pa-6">
            <v-row class="justify-center">
                <v-col cols="6">
                    <div class="p-4 table table-responsive" v-if="users.length">
                        <v-table class="table table-hover">
                            <caption>
                                ALL USERS
                            </caption>
                            <thead>
                                <tr>
                                    <td>S/N</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>
                                        <v-btn
                                            :to="{
                                                name: 'userDetails',
                                                params: { id: user.id },
                                            }"
                                            color="primary"
                                            outlined
                                        >
                                            View
                                        </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-form ref="form" class="p-4">
                        <div class="text-center mb-2">
                            <h3 class="auth-header">Get Onboarded!</h3>
                            <div class="auth-subheader">
                                Join other passionate learners explore new
                                things
                            </div>
                        </div>
                        <!-- General error message -->
                        <v-alert v-if="generalError" type="error" dismissible>
                            {{ generalError }}
                        </v-alert>
                        <v-text-field
                            variant="outlined"
                            v-model="form.name"
                            label="Name*"
                            :error-messages="errors.name"
                            required
                        ></v-text-field>
                        <v-text-field
                            variant="outlined"
                            v-model="form.email"
                            label="Email*"
                            :error-messages="errors.email"
                            required
                        ></v-text-field>
                        <v-text-field
                            variant="outlined"
                            v-model="form.password"
                            label="Password"
                            :error-messages="errors.password"
                        ></v-text-field>
                        <v-row dense>
                            <v-col cols="12" md="12" sm="12">
                                <v-btn
                                    @click="register"
                                    rounded="lg"
                                    size="x-large"
                                    class="bg-primary"
                                    block
                                >
                                    {{ processing ? "Please wait" : "Submit" }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
    name: "Dashboard",
    data() {
        return {
            users: [],
            errors: {},
            form: {},
            processing: false,
            generalError: "",
        };
    },
    created() {
        this.fetchAllUsers();
    },
    methods: {
        async fetchAllUsers() {
            axios
                .get("/api/users")
                .then((response) => {
                    this.users = response.data;
                    console.log(this.users);
                })
                .catch((errors) => {
                    console.log(errors);
                });
        },
        async register() {
            this.processing = true;
            this.clearErrors();
            try {
                const { data } = await axios
                    .post("/api/user/create", this.form)
                    .then((response) => {
                        this.validationErrors = {};
                        this.fetchAllUsers();
                        this.form = {};
                        toast("Success", {
                            autoClose: 1000,
                            position: toast.POSITION.TOP_RIGHT,
                            type: "success",
                        });
                        console.log(data);
                    });
            } catch (error) {
                const { data } = error.response;
                if (data.errors) {
                    this.setErrors(data.errors);
                } else {
                    this.generalError = data.message || "An error occurred.";
                }
            } finally {
                this.processing = false;
            }
        },
        clearErrors() {
            this.errors = {};
            this.generalError = "";
        },
        setErrors(errors) {
            Object.keys(errors).forEach((field) => {
                this.errors[field] = errors[field];
            });
        },
    },
};
</script>
