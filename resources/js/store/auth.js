// import axios from "axios";
// import router from "@/router";

// export default {
//     namespaced: true,
//     state: {
//         authenticated: false,
//         user: {},
//         userType: "",
//     },
//     getters: {
//         authenticated(state) {
//             return state.authenticated;
//         },
//         user(state) {
//             return state.user;
//         },
//         userType(state) {
//             return state.userType;
//         },
//     },
//     mutations: {
//         SET_AUTHENTICATED(state, value) {
//             state.authenticated = value;
//         },
//         SET_USER(state, value) {
//             state.user = value;
//             state.userType = value.userType;
//         },
//         SET_USER_TYPE(state, value) {
//             state.userType = value;
//         },
//     },
//     actions: {
//         login({ commit }) {
//             return axios
//                 .get("/api/user")
//                 .then(({ data }) => {
//                     commit("SET_USER", data);
//                     commit("SET_AUTHENTICATED", true);

//                     if (data.userType === "admin") {
//                         router.push({ name: "adminIndex" });
//                     } else if (data.userType === "student") {
//                         router.push({ name: "studentIndex" });
//                     } else {
//                         router.push({ name: "dashboard" });
//                     }
//                 })
//                 .catch(({ response: { data } }) => {
//                     commit("SET_USER", {});
//                     commit("SET_AUTHENTICATED", false);
//                 });
//         },
//         logout({ commit }) {
//             commit("SET_USER", {});
//             commit("SET_AUTHENTICATED", false);
//             commit("SET_USER_TYPE", "");
//             router.push({ name: "login" });
//         },
//     },
// };
