import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
/* Guest Component */
const Login = () => import("@/components/Login.vue");
const Register = () => import("@/components/Register.vue");

/* Layouts */
// const DahboardLayout = () => import("@/components/layouts/Default.vue");
const AdminLayout = () => import("@/components/layouts/AdminLayout.vue");
const StudentLayout = () => import("@/components/layouts/StudentLayout.vue");

/* Authenticated Components */
// const Dashboard = () => import("@/components/Dashboard.vue");

// admin
const AdminIndex = () => import("@/components/admin/AdminIndex.vue");
const Users = () => import("@/components/admin/Users.vue");
const UserDetails = () => import("@/components/admin/UserDetails.vue");
const Partners = () => import("@/components/admin/Partners.vue");

// student
const StudentIndex = () => import("@/components/student/StudentIndex.vue");
const StudentProfileSetting = () =>
    import("@/components/student/StudentProfileSetting.vue");

/* Not Found Component */
const NotFound = () => import("@/components/NotFound.vue");

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
        path: "/admin",
        component: AdminLayout,
        meta: {
            middleware: "auth",
            title: `Admin Layout`,
        },
        children: [
            {
                name: "adminIndex",
                path: "dashboard",
                component: AdminIndex,
                meta: {
                    title: `Admin  Homepage`,
                },
            },
            {
                name: "users",
                path: "users",
                component: Users,
                meta: {
                    title: `Users`,
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
            {
                name: "partners",
                path: "partners",
                component: Partners,
                meta: {
                    title: `Partners`,
                },
            },
        ],
    },
    {
        path: "/student",
        component: StudentLayout,
        meta: {
            middleware: "auth",
            title: `Student Layout`,
        },
        children: [
            {
                name: "studentIndex",
                path: "dashboard",
                component: StudentIndex,
                meta: {
                    title: `Student Dashboard`,
                },
            },
            {
                name: "studentProfileSetting",
                path: "settings",
                component: StudentProfileSetting,
                meta: {
                    title: `Student Profile Setting`,
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
            if (store.state.auth.userType === "admin") {
                next({ name: "adminIndex" });
            } else if (store.state.auth.userType === "student") {
                next({ name: "studentIndex" });
            } else {
                next({ name: "dashboard" });
            }
        } else {
            next();
        }
    } else {
        if (store.state.auth.authenticated) {
            if (store.state.auth.userType === "admin") {
                if (to.path.startsWith("/admin")) {
                    next();
                } else {
                    next({ name: "adminIndex" });
                }
            } else if (store.state.auth.userType === "student") {
                if (to.path.startsWith("/student")) {
                    next();
                } else {
                    next({ name: "studentIndex" });
                }
            } else {
                next();
            }
        } else {
            next({ name: "login" });
        }
    }
});

export default router;
