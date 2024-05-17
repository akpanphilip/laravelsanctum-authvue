<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">
                            You are logged in as <b>{{ user.name }}</b>
                        </p>
                        <div v-if="users.length">
                            <h4>All Users:</h4>
                            <ul>
                                <li v-for="user in users" :key="user.id">
                                    {{ user.name }} - {{ user.email }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            user: this.$store.state.auth.user,
            users: [],
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
    },
};
</script>
