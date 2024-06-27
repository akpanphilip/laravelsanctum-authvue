<template>
    <v-container>
        <v-card>
            <div class="card-header">
                <h3>Partners</h3>

                <p class="mb-0">
                    You are logged in as <b>{{ user.name }}</b>
                </p>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Partners",
    data() {
        return {
            user: this.$store.state.auth.user,
        };
    },
};
</script>
