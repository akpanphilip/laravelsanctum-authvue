<template>
    <v-container>
        <v-row class="justify-center" dense>
            <v-col cols="6">
                <v-form ref="form">
                    <div class="text-center mb-2">
                        <h3 class="auth-header">Get Onboarded!</h3>
                        <div class="auth-subheader">
                            Join other passionate learners explore new things
                        </div>
                    </div>
                    <!-- General error message -->
                    <v-alert v-if="generalError" type="error" dismissible>
                        {{ generalError }}
                    </v-alert>
                    <v-text-field
                        variant="outlined"
                        v-model="form.name"
                        label="Name"
                        :error-messages="errors.name"
                        required
                    ></v-text-field>
                    <v-text-field
                        variant="outlined"
                        v-model="form.email"
                        label="Email"
                        :error-messages="errors.email"
                        required
                    ></v-text-field>
                    <v-select
                        label="User Type"
                        v-model="form.userType"
                        :items="['admin', 'student']"
                        variant="outlined"
                        :error-messages="errors.userType"
                        required
                    ></v-select>
                    <v-text-field
                        v-model="form.password"
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                        :error-messages="errors.password"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.password_confirmation"
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        placeholder="Confirm Password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                        :error-messages="errors.password_confirmation"
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
                                {{ processing ? "Please wait" : "Register" }}
                            </v-btn>
                        </v-col>
                    </v-row>
                    <div class="text-center mt-2">
                        <p>
                            <span>Already have an account?</span> &nbsp;
                            <router-link :to="{ name: 'login' }"
                                >Log in
                            </router-link>
                        </p>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "register",
    data() {
        return {
            errors: {},
            form: {},
            processing: false,
            generalError: "",
            visible: false,
        };
    },
    methods: {
        ...mapActions({
            signIn: "auth/login",
        }),
        async register() {
            this.processing = true;
            this.clearErrors();
            try {
                await axios.get("/sanctum/csrf-cookie");
                const { data } = await axios
                    .post("/register", this.form)
                    .then((response) => {
                        this.validationErrors = {};
                        this.signIn();
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
            this.errors = {
                email: [],
                password: [],
            };
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
