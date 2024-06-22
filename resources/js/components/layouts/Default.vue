<template>
    <v-card>
        <v-row>
            <v-col cols="9">
                <router-view></router-view>
            </v-col>
            <v-col cols="3">
                <v-layout>
                    <v-navigation-drawer location="right" permanent>
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

                        <v-list density="compact" nav>
                            <v-list-item
                                :class="{
                                    'v-list-item--active':
                                        isActive('dashboard'),
                                }"
                                prepend-icon="mdi-home-city"
                            >
                                <router-link :to="{ name: 'dashboard' }">
                                    Dashboard
                                </router-link>
                            </v-list-item>
                            <v-list-item
                                prepend-icon="mdi-account"
                                title="My Account"
                                value="account"
                            ></v-list-item>
                            <v-list-item
                                prepend-icon="mdi-account-group-outline"
                                title="Users"
                                value="users"
                            ></v-list-item>
                            <v-list-item
                                :class="{
                                    'v-list-item--active': isActive('allusers'),
                                }"
                                prepend-icon="mdi-account-group-outline"
                            >
                                <router-link :to="{ name: 'allusers' }">
                                    All Users
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
                    <v-main style="height: 250px"></v-main>
                </v-layout>
            </v-col>
        </v-row>
    </v-card>
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
.v-list-item--active a{
    color: white !important;

}
.router-link-active {
     
}
</style>
