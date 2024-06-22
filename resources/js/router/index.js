import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
/* Guest Component */
const Login = () => import("@/components/Login.vue");
const Register = () => import("@/components/Register.vue");

/* Layouts */
const DahboardLayout = () => import("@/components/layouts/Default.vue");

/* Authenticated Component */
const Dashboard = () => import("@/components/Dashboard.vue");

/* Not Found Component */
const NotFound = () => import("@/components/NotFound.vue");

const AllUsers = () => import("@/components/AllUsers.vue");

const UserDetails = () => import("@/components/UserDetails.vue");

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`,
        },
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`,
        },
    },
    {
        path: "/",
        component: DahboardLayout,
        meta: {
            middleware: "auth",
            title: `Dashboard Layout`,
        },
        children: [
            {
                name: "dashboard",
                path: "/dashboard",
                component: Dashboard,
                meta: {
                    title: `Dashboard`,
                },
            },
            {
                name: "allusers",
                path: "/all-users",
                component: AllUsers,
                meta: {
                    title: `All Users`,
                },
            },
            {
                name: "userDetails",
                path: "user/:id",
                component: UserDetails,
                meta: {
                    title: `User Details`,
                },
            },
        ],
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
        meta: {
            title: "Page Not Found",
        },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" });
        }
        next();
    } else {
        if (store.state.auth.authenticated) {
            next();
        } else {
            next({ name: "login" });
        }
    }
});
export default router;
