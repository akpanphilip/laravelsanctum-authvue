import { createWebHistory, createRouter } from "vue-router";
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

// New Path
const Index = () => import("@/components/Index.vue");
const LocationSelector = () => import("@/components/LocationSelector.vue");

// Auth
const Register = () => import("@/components/auth/Register.vue");
const Login = () => import("@/components/auth/Login.vue");
const ForgotPassword = () => import("@/components/auth/ForgotPassword.vue");
const ResetPassword = () => import("@/components/auth/ResetPassword.vue");
// const VerifyEmail = () => import("@/components/auth/VerifyEmail.vue");

// Supermarket
const SuperMarketLayout = () =>
    import("@/components/layouts/SuperMarketLayout.vue");

const SuperMarketIndex = () =>
    import("@/components/supermarket/SuperMarketIndex.vue");
const Search = () => import("@/components/supermarket/Search.vue");
const Cart = () => import("@/components/supermarket/Cart.vue");
const Notification = () => import("@/components/supermarket/Notification.vue");
const Account = () => import("@/components/supermarket/Account.vue");

// Single Item
const VerifyEmail = () => import("@/components/auth/VerifyEmail.vue");


const routes = [
    // {
    //     name: "login",
    //     path: "/login",
    //     component: Login,
    //     meta: {
    //         middleware: "guest",
    //         title: `Login`,
    //     },
    // },
    // {
    //     name: "register",
    //     path: "/register",
    //     component: Register,
    //     meta: {
    //         middleware: "guest",
    //         title: `Register`,
    //     },
    // },
    // {
    //     path: "/admin",
    //     component: AdminLayout,
    //     meta: {
    //         middleware: "auth",
    //         title: `Admin Layout`,
    //     },
    //     children: [
    //         {
    //             name: "adminIndex",
    //             path: "dashboard",
    //             component: AdminIndex,
    //             meta: {
    //                 title: `Admin  Homepage`,
    //             },
    //         },
    //         {
    //             name: "users",
    //             path: "users",
    //             component: Users,
    //             meta: {
    //                 title: `Users`,
    //             },
    //         },
    //         {
    //             name: "userDetails",
    //             path: "user/:id",
    //             component: UserDetails,
    //             meta: {
    //                 title: `User Details`,
    //             },
    //         },
    //         {
    //             name: "partners",
    //             path: "partners",
    //             component: Partners,
    //             meta: {
    //                 title: `Partners`,
    //             },
    //         },
    //     ],
    // },
    // {
    //     path: "/student",
    //     component: StudentLayout,
    //     meta: {
    //         middleware: "auth",
    //         title: `Student Layout`,
    //     },
    //     children: [
    //         {
    //             name: "studentIndex",
    //             path: "dashboard",
    //             component: StudentIndex,
    //             meta: {
    //                 title: `Student Dashboard`,
    //             },
    //         },
    //         {
    //             name: "studentProfileSetting",
    //             path: "settings",
    //             component: StudentProfileSetting,
    //             meta: {
    //                 title: `Student Profile Setting`,
    //             },
    //         },
    //     ],
    // },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
        meta: {
            title: "Page Not Found",
        },
    },
    {
        path: "/",
        component: Index,
        meta: {
            title: "Barn",
        },
    },
    {
        path: "/location-selector",
        component: LocationSelector,
        meta: {
            title: "Barn | Location Selector",
        },
    },

    // Auth
    {
        path: "/register",
        component: Register,
        meta: {
            title: "Barn | Sign Up",
        },
    },
    {
        path: "/login",
        component: Login,
        meta: {
            title: "Barn | Login",
        },
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
        meta: {
            title: "Barn | Forgot Password",
        },
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        meta: {
            title: "Barn | Reset Password",
        },
    },
    {
        path: "/verify-email",
        component: VerifyEmail,
        meta: {
            title: "Barn | Verify Email",
        },
    },

    // supermarket
    {
        path: "/supermarket-elude",
        component: SuperMarketLayout,
        meta: {
            // middleware: "auth",
            title: `SuperMarket`,
        },
        children: [
            {
                name: "superMarket",
                path: "/supermarket",
                component: SuperMarketIndex,
                meta: {
                    title: "Barn | Supermarket",
                },
            },
            {
                name: "cart",
                path: "/cart",
                component: Cart,
                meta: {
                    title: "Barn | Cart",
                },
            },
            {
                name: "search",
                path: "/search",
                component: Search,
                meta: {
                    title: "Barn | Search Items",
                },
            },
            {
                name: "notification",
                path: "/notification",
                component: Notification,
                meta: {
                    title: "Barn | Notification",
                },
            },
            {
                name: "account",
                path: "/account",
                component: Account,
                meta: {
                    title: "Barn | Account",
                },
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title;
//     if (to.meta.middleware == "guest") {
//         if (store.state.auth.authenticated) {
//             if (store.state.auth.userType === "admin") {
//                 next({ name: "adminIndex" });
//             } else if (store.state.auth.userType === "student") {
//                 next({ name: "studentIndex" });
//             } else {
//                 next({ name: "dashboard" });
//             }
//         } else {
//             next();
//         }
//     } else {
//         if (store.state.auth.authenticated) {
//             if (store.state.auth.userType === "admin") {
//                 if (to.path.startsWith("/admin")) {
//                     next();
//                 } else {
//                     next({ name: "adminIndex" });
//                 }
//             } else if (store.state.auth.userType === "student") {
//                 if (to.path.startsWith("/student")) {
//                     next();
//                 } else {
//                     next({ name: "studentIndex" });
//                 }
//             } else {
//                 next();
//             }
//         } else {
//             next({ name: "login" });
//         }
//     }
// });

export default router;
