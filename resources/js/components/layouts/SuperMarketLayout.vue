<template>
    <div>
        <router-view></router-view>

        <div class="bottomNav">
            <router-link
                :to="{ name: 'superMarket' }"
                :class="{
                    'active-bottomnav': isActive('superMarket'),
                }"
            >
                <div class="wrap-icon-nav">
                    <i class="bi bi-house-fill nav-icon"></i>
                </div>
                <span class="nav-text">Home</span>
            </router-link>
            <router-link
                :to="{ name: 'cart' }"
                :class="{
                    'active-bottomnav': isActive('cart'),
                }"
            >
                <div class="wrap-icon-nav">
                    <i class="bi bi-cart4 nav-icon"></i>
                </div>
                <span class="nav-text">Cart</span>
            </router-link>
            <router-link
                :to="{ name: 'search' }"
                :class="{
                    'active-bottomnav': isActive('search'),
                }"
            >
                <div class="wrap-icon-nav">
                    <i class="bi bi-search nav-icon"></i>
                </div>
                <span class="nav-text">Search</span>
            </router-link>
            <router-link
                :to="{ name: 'notification' }"
                :class="{
                    'active-bottomnav': isActive('notification'),
                }"
            >
                <div class="wrap-icon-nav">
                    <i class="bi bi-chat-square-dots nav-icon"></i>
                </div>
                <span class="nav-text">Notification</span>
            </router-link>
            <router-link
                :to="{ name: 'account' }"
                :class="{
                    'active-bottomnav': isActive('account'),
                }"
            >
                <div class="wrap-icon-nav">
                    <i class="bi bi-person-fill nav-icon"></i>
                </div>
                <span class="nav-text">Account</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        isActive(routeName) {
            return this.$route.name === routeName;
        },
    },
};
</script>
