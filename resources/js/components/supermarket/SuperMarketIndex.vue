<template>
    <div class="container-wrap">
        <div class="top-row-location">
            <div class="location-wrap">
                <span>Location</span>

                <div class="d-flex align-items-center">
                    <span>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.1569 17.1569C17.2202 18.0935 15.2616 20.0521 13.9138 21.3999C13.1327 22.181 11.8677 22.1814 11.0866 21.4003C9.76234 20.076 7.84159 18.1553 6.84315 17.1569C3.71895 14.0327 3.71895 8.96734 6.84315 5.84315C9.96734 2.71895 15.0327 2.71895 18.1569 5.84315C21.281 8.96734 21.281 14.0327 18.1569 17.1569Z"
                                stroke="#BB1428"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15.5 11.5C15.5 13.1569 14.1569 14.5 12.5 14.5C10.8431 14.5 9.5 13.1569 9.5 11.5C9.5 9.84315 10.8431 8.5 12.5 8.5C14.1569 8.5 15.5 9.84315 15.5 11.5Z"
                                stroke="#BB1428"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <select class="form-select input-border-0">
                        <option value="">Abuja</option>
                    </select>
                </div>
            </div>

            <span class="notification">
                <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#1C2221"
                    />
                    <path
                        d="M18.5001 19.3333H21.8334L20.8968 18.3967C20.6428 18.1427 20.5001 17.7982 20.5001 17.439V15.3333C20.5001 13.5917 19.387 12.1101 17.8334 11.5609V11.3333C17.8334 10.597 17.2365 10 16.5001 10C15.7637 10 15.1667 10.597 15.1667 11.3333V11.5609C13.6132 12.1101 12.5001 13.5917 12.5001 15.3333V17.439C12.5001 17.7982 12.3574 18.1427 12.1034 18.3967L11.1667 19.3333H14.5001M18.5001 19.3333V20C18.5001 21.1046 17.6047 22 16.5001 22C15.3955 22 14.5001 21.1046 14.5001 20V19.3333M18.5001 19.3333H14.5001"
                        stroke="#1C2221"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </span>
        </div>

        <div class="search-input-wrap">
            <span class="search-icon">
                <!-- <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.5001 20L16.4501 15.95M16.4501 15.95C17.1002 15.3 17.6158 14.5282 17.9676 13.6789C18.3194 12.8296 18.5005 11.9193 18.5005 11C18.5005 10.0807 18.3194 9.17041 17.9676 8.32109C17.6158 7.47176 17.1002 6.70005 16.4501 6.05001C15.8001 5.39996 15.0284 4.88432 14.179 4.53252C13.3297 4.18072 12.4194 3.99965 11.5001 3.99965C10.5808 3.99965 9.67051 4.18072 8.82119 4.53252C7.97187 4.88432 7.20016 5.39996 6.55011 6.05001C5.23729 7.36283 4.49976 9.1434 4.49976 11C4.49976 12.8566 5.23729 14.6372 6.55011 15.95C7.86293 17.2628 9.6435 18.0004 11.5001 18.0004C13.3567 18.0004 15.1373 17.2628 16.4501 15.95Z"
                        stroke="#828282"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg> -->
                <i class="bi bi-search"></i>
            </span>
            <input
                type="text"
                class="search-input"
                placeholder="Shop in shoprite"
            />
        </div>

        <div class="banner mt-4">
            <div
                id="carouselExampleIndicators"
                class="carousel slide carousel-fade"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="bannerImg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img :src="bannerImg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img :src="bannerImg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="selector-more">
            <span>Quick Grabs</span>
            <span>See All</span>
        </div>

        <div class="categories">
            <div class="category">
                <div class="category-icon">
                    <img :src="goatImg" alt="..." />
                </div>
                <span class="category-name">Goat</span>
            </div>
            <div class="category">
                <div class="category-icon">
                    <img :src="goatImg" alt="..." />
                </div>
                <span class="category-name">Goat</span>
            </div>
            <div class="category">
                <div class="category-icon">
                    <img :src="goatImg" alt="..." />
                </div>
                <span class="category-name">Goat</span>
            </div>
            <div class="category">
                <div class="category-icon">
                    <img :src="goatImg" alt="..." />
                </div>
                <span class="category-name">Goat</span>
            </div>
        </div>

        <div class="selector-more">
            <span>Latest Products</span>
            <span>See All</span>
        </div>

        <v-tabs v-model="tab" class="p-0">
            <v-tab value="one">All</v-tab>
            <v-tab value="two">Newest</v-tab>
            <v-tab value="three">Popular</v-tab>
            <v-tab value="four">Frequent</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one" class="p-0">
                <div class="row-items">
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg2" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg2" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
                <div class="row-items">
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
                <div class="row-items">
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="four">
                <div class="row-items">
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                    <div class="row-item">
                        <img :src="meatImg" class="item-img" alt="" />
                        <span class="item-name">Cow Meat</span>
                        <span class="item-price">NGN140.00</span>
                    </div>
                </div>
            </v-tabs-window-item>
        </v-tabs-window>

        <div class="bottomNav">
            <router-link class="active-bottomnav">
                <div class="wrap-icon-nav">
                    <i class="bi bi-house-fill nav-icon"></i>
                </div>
                <span class="nav-text">Home</span>
            </router-link>
            <router-link>
                <i class="bi bi-cart4 nav-icon"></i>
                <span class="nav-text">Cart</span>
            </router-link>
            <router-link>
                <div class="wrap-icon-nav">
                    <i class="bi bi-search nav-icon"></i>
                </div>
                <span class="nav-text">Search</span>
            </router-link>
            <router-link>
                <i class="bi bi-chat-square-dots nav-icon"></i>
                <span class="nav-text">Notification</span>
            </router-link>
            <router-link>
                <i class="bi bi-person-fill nav-icon"></i>
                <span class="nav-text">Account</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerImg: "/assets/img/banner1.png",
            goatImg: "/assets/img/goat.png",
            meatImg: "/assets/img/meat.png",
            meatImg2: "/assets/img/meat2.png",
            tab: null,
        };
    },
};
</script>
