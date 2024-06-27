<template>
    <v-responsive class="border rounded">
        <v-app>
            <v-navigation-drawer>
                <template v-slot:prepend>
                    <v-list-item
                        lines="two"
                        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    >
                        {{ user.name }} <br />
                        <small>{{ user.email }}</small>
                    </v-list-item>
                </template>

                <v-divider></v-divider>
                <v-list>
                    <v-list-item
                        :class="{
                            'v-list-item--active': isActive('studentIndex'),
                        }"
                        prepend-icon="mdi-home-city"
                    >
                        <router-link :to="{ name: 'studentIndex' }">
                            Dashboard
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        :class="{
                            'v-list-item--active': isActive(
                                'studentProfileSetting'
                            ),
                        }"
                        prepend-icon="mdi-account"
                    >
                        <router-link :to="{ name: 'studentProfileSetting' }">
                            Settings
                        </router-link>
                    </v-list-item>
                    <v-list-item
                        @click="logout"
                        prepend-icon="mdi-logout"
                        title="Logout"
                        value="logout"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar></v-app-bar>

            <v-main>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-main>
            <v-bottom-navigation class="d-none d-sm-flex d-md-none" grow>
                <v-btn value="recent">
                    <v-icon>mdi-history</v-icon>

                    <span>Recent</span>
                </v-btn>

                <v-btn value="favorites">
                    <v-icon>mdi-heart</v-icon>

                    <span>Favorites</span>
                </v-btn>

                <v-btn value="nearby">
                    <v-icon>mdi-map-marker</v-icon>

                    <span>Nearby</span>
                </v-btn>
            </v-bottom-navigation>
        </v-app>
    </v-responsive>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "default-layout",
    data() {
        return {
            user: this.$store.state.auth.user,
        };
    },
    methods: {
        ...mapActions({
            signOut: "auth/logout",
        }),
        isActive(routeName) {
            return this.$route.name === routeName;
        },
        async logout() {
            await axios.post("/logout").then(({ data }) => {
                this.signOut();
                this.$router.push({ name: "login" });
            });
        },
    },
};
</script>

<style>
.v-list-item--active {
    background-color: #1976d2;
    color: white !important;
}
.v-list-item--active a {
    color: white !important;
}
.router-link-active {
}
</style>
