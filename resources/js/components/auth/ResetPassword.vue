<template>
    <div class="container-wrap">
        <div class="top-arrow-title">
            <div class="top-icon-wrap" @click="goBack">
                <i class="bx bx-chevron-left"></i>
            </div>
        </div>
        <p class="page-title">Forgot Password?</p>
        <div class="text-light-100">
            Enter your email address and we'll send you confirmation code to
            reset your password
        </div>

        <div class="form form-wrap">
            <div class="form-group mb-3">
                <label>Phone Number</label>
                <input type="phone" placeholder="Enter Email Address" />
            </div>
            <div class="form-group mb-3">
                <label>Password</label>
                <input type="text" placeholder="+234 (0)7032324232" />
            </div>
            <button class="submitBtn mb-3" @click="verifyModal">
                Continue
            </button>

            <v-dialog v-model="dialog" width="500px" persistent>
                <v-card>
                    <v-card-text>
                        <p class="modal-title mb-2">
                            How do you want to verify your account
                        </p>
                        <div class="text-light-100">
                            Select which contact details should we use to reset
                            your password
                        </div>

                        <div class="verify-options">
                            <router-link to="verify-email">
                                <div class="verify-option">
                                    <span>
                                        <svg
                                            width="45"
                                            height="44"
                                            viewBox="0 0 45 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.25"
                                                width="44"
                                                height="44"
                                                rx="12"
                                                fill="#F5F5FF"
                                            />
                                            <path
                                                d="M32.23 21.41C31.89 15.61 26.62 11.14 20.55 12.14C16.37 12.83 13.02 16.2199 12.37 20.3999C11.99 22.8199 12.4901 25.1099 13.5801 26.9999L12.6901 30.3099C12.4901 31.0599 13.18 31.7399 13.92 31.5299L17.18 30.63C18.66 31.5 20.39 31.9999 22.24 31.9999C27.88 31.9999 32.56 27.03 32.23 21.41ZM27.1301 25.7199C27.0401 25.8999 26.93 26.07 26.79 26.23C26.54 26.5 26.27 26.7 25.97 26.82C25.67 26.95 25.34 27.01 24.99 27.01C24.48 27.01 23.93 26.89 23.36 26.64C22.78 26.39 22.2101 26.0599 21.6401 25.6499C21.0601 25.2299 20.5201 24.7599 20.0001 24.2499C19.4801 23.7299 19.02 23.1799 18.6 22.6099C18.19 22.0399 17.86 21.4699 17.62 20.8999C17.38 20.3299 17.2601 19.78 17.2601 19.26C17.2601 18.92 17.3201 18.59 17.4401 18.29C17.5601 17.98 17.7501 17.7 18.0201 17.45C18.3401 17.13 18.6901 16.98 19.0601 16.98C19.2001 16.98 19.34 17.01 19.47 17.07C19.6 17.13 19.7201 17.22 19.8101 17.35L20.97 18.9899C21.06 19.1199 21.13 19.2299 21.17 19.3399C21.22 19.4499 21.24 19.5499 21.24 19.6499C21.24 19.7699 21.2001 19.89 21.1301 20.01C21.0601 20.13 20.97 20.2499 20.85 20.3699L20.47 20.7699C20.41 20.8299 20.3901 20.8899 20.3901 20.9699C20.3901 21.0099 20.4 21.0499 20.41 21.0899C20.43 21.1299 20.4401 21.16 20.4501 21.1899C20.5401 21.36 20.7 21.5699 20.92 21.8299C21.15 22.0899 21.3901 22.3599 21.6501 22.6199C21.9201 22.8899 22.1801 23.1299 22.4501 23.3599C22.7101 23.5799 22.93 23.73 23.1 23.82C23.13 23.83 23.1601 23.8499 23.1901 23.8599C23.2301 23.8799 23.2701 23.88 23.3201 23.88C23.4101 23.88 23.4701 23.85 23.5301 23.79L23.91 23.41C24.04 23.28 24.1601 23.19 24.2701 23.13C24.3901 23.06 24.5001 23.0199 24.6301 23.0199C24.7301 23.0199 24.8301 23.0399 24.9401 23.0899C25.0501 23.1399 25.17 23.2 25.29 23.29L26.9501 24.4699C27.0801 24.5599 27.17 24.67 27.23 24.79C27.28 24.92 27.3101 25.0399 27.3101 25.1799C27.2501 25.3499 27.2101 25.5399 27.1301 25.7199Z"
                                                fill="#101010"
                                            />
                                        </svg>
                                    </span>

                                    <div class="right-opt">
                                        <span>Send via WhatsApp</span>
                                        <span>+234(0) 8347 2838 28</span>
                                    </div>
                                </div>
                            </router-link>

                            <router-link to="verify-email">
                                <div class="verify-option">
                                    <span>
                                        <svg
                                            width="45"
                                            height="44"
                                            viewBox="0 0 45 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.25"
                                                width="44"
                                                height="44"
                                                rx="12"
                                                fill="#F5F5FF"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M13.7779 17.6949C13.0762 18.1335 12.6499 18.9026 12.6499 19.7301V29.1999C12.6499 30.5254 13.7244 31.5999 15.0499 31.5999H29.4499C30.7754 31.5999 31.8499 30.5254 31.8499 29.1999V19.7301C31.8499 18.9026 31.4236 18.1335 30.7219 17.6949L23.5219 13.1949C22.7437 12.7085 21.7562 12.7085 20.9779 13.1949L13.7779 17.6949ZM16.9155 20.6015C16.3641 20.2339 15.6191 20.3829 15.2514 20.9344C14.8838 21.4858 15.0328 22.2308 15.5843 22.5985L21.5843 26.5985C21.9873 26.8672 22.5125 26.8672 22.9155 26.5985L28.9155 22.5985C29.467 22.2308 29.616 21.4858 29.2484 20.9344C28.8807 20.3829 28.1357 20.2339 27.5843 20.6015L22.2499 24.1578L16.9155 20.6015Z"
                                                fill="#101010"
                                            />
                                        </svg>
                                    </span>

                                    <div class="right-opt">
                                        <span>Send via Email</span>
                                        <span>Albertstevano@gmail.com</span>
                                    </div>
                                </div>
                            </router-link>

                            <button class="submitBtn">Continue</button>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        tab: null,
    }),
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        verifyModal() {
            this.dialog = true;
        },
    },
};
</script>
