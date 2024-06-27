<!-- resources/js/components/UserDetails.vue -->
<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title>User Details</v-card-title>
                    <v-card-text>
                        <div v-if="user">
                            <p><strong>Name:</strong> {{ user.name }}</p>
                            <p><strong>Email:</strong> {{ user.email }}</p>
                        </div>
                        <div v-else>
                            <p>Loading...</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        };
    },
    created() {
        this.fetchUser();
    },
    methods: {
        async fetchUser() {
            const userId = this.$route.params.id;
            try {
                const response = await axios.get(`/api/user/${userId}`);
                this.user = response.data;
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        },
    },
};
</script>


<!-- https://www.npmjs.com/package/vue3-toastify -->