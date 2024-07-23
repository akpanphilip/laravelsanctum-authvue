<template>
    <div class="container-wrap">
        <div class="top-arrow-title">
            <div class="top-icon-wrap" @click="goBack">
                <i class="bx bx-chevron-left"></i>
            </div>
            <span>OTP</span>
            <span></span>
        </div>
        <p class="page-title">Email verification</p>
        <div class="text-light-100">
            Enter the verification code we send you on:
            <b>adebarn******@gmail.com</b>
        </div>
        <div class="form form-wrap">
            <div class="verification-codes">
                <input type="number" max="1" />
                <input type="number" max="1" />
                <input type="number" max="1" />
                <input type="number" max="1" />
                <input type="number" max="1" />
                <input type="number" max="1" />
            </div>
            <p class="base-text">
                Didn’t receive code? <router-link to="">Resend</router-link>
            </p>
            <p class="base-text">
                <span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 6.66667V10L12.5 12.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                            stroke="#878787"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
                09.00
            </p>
            <button class="submitBtn mt-4">Continue</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>
