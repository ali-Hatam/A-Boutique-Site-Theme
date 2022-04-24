var body = document.body

var coverPart = new Vue({
    el: ".cover",
    data: {
        coverBackColor: "transparent",
        coverVisibility: "hidden",
        coverOpacity: "0",
        coverHeight: "0px",
        coverOverflow: "visible",
    }
})

var menuItems = [{
        id: 1,
        itemUrl: "./index.html",
        sub: false,
        text: "خانه",
        store: "",
    },
    {
        id: 2,
        itemUrl: "",
        sub: true,
        text: "فروشگاه ها",
        store: "main",
    },
    {
        id: 3,
        itemUrl: "",
        sub: true,
        text: "تخفیف ها",
        store: "off",
    },
    {
        id: 4,
        itemUrl: "./aboutUs.html",
        sub: false,
        text: "تماس با ما",
        store: "",
    },
    {
        id: 5,
        itemUrl: "./aboutUs.html",
        sub: false,
        text: "درباره ما",
        store: "",
    },
]

var stores = [{
        id: 1,
        url: "./coolShirt.html",
        text: "پوشاک بهاره و تابستانه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 2,
        url: "./coolShirt.html",
        text: "پوشاک پاییزه و زمستانه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 3,
        url: "./coolShirt.html",
        text: "جلیقه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 4,
        url: "./coolShirt.html",
        text: "شلوار",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 5,
        url: "./coolShirt.html",
        text: "کفش",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
]

var offs = [{
        id: 1,
        url: "./coolShirt.html",
        text: "تخفیف های پوشاک بهاره و تابستانه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 2,
        url: "./coolShirt.html",
        text: "تخفیف های پوشاک پاییزه و زمستانه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 3,
        url: "./coolShirt.html",
        text: "تخفیف های جلیقه",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 4,
        url: "./coolShirt.html",
        text: "تخفیف های شلوار",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
    {
        id: 5,
        url: "./coolShirt.html",
        text: "تخفیف های کفش",
        products: [{
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }, {
            picture: "images/caption.jpg",
            url: "#",
            productName: "نام محصول",
            productPrice: "قیمت محصول"
        }]
    },
]

var menuIcons = [{
        id: 1,
        url: null,
    },
    {
        id: 2,
        url: "#",
    },
    {
        id: 3,
        url: "#",
    }
]

var headerPart = new Vue({
    el: ".header-section",

    data: {
        menuItems,
        stores,
        offs,
        menuIcons,
        body,
        cartProductNumber: 0,
        searchIconDisplay: "inline-block",
        exitIconDisplay: "none",
        isDisplaySearchBoxRun: false,
        isSearchBoxDisplay: false,
        searchBoxDisplay: "none",
        searchBoxOpacity: "0",
        compIconHeight: "46px",
        iconBorderRadi: "5px 5px 5px 5px",
        compMenuHeight: 0,
        preCompMenuHeight: 255,
        compMenuPadding: "0px",
        showCompMenu: false,
        bodyScroll: 0,
        showSubCom: {
            subCompMenu_2: false,
            subCompMenu_3: false
        },
        observer_1: new Object(),
        option1: {
            threshold: [1]
        },
        option2: {
            threshold: [0]
        },
    },

    created() {

        this.observer_1 = new IntersectionObserver((entry) => {

            if (entry[0].isIntersecting) return

            entry[0].target.style.position = "fixed"
            entry[0].target.style.top = "0"

            subShopContainer.$refs["subShopContainer"].style.position = "fixed"
            subShopContainer.$refs["subShopContainer"].style.top = "86px"

            bodyContainer.$refs["bodyContainer"].parentElement.style.top = "162px"

            bodyContainer.$refs["navbarContainer"].style.position = "fixed"
            bodyContainer.$refs["navbarContainer"].style.top = "162px"
            bodyContainer.$refs["navbarContainer"].style.right = "0px"

        }, this.option1)


        this.observer_2 = new IntersectionObserver((entry) => {

            if (!entry[0].isIntersecting) return

            this.$refs["headerMenu"].style.position = "relative"

            subShopContainer.$refs["subShopContainer"].style.position = "relative"
            subShopContainer.$refs["subShopContainer"].style.top = "0px"

            bodyContainer.$refs["bodyContainer"].parentElement.style.top = "0px"

            bodyContainer.$refs["navbarContainer"].style.position = "relative"
            bodyContainer.$refs["navbarContainer"].style.top = "0px"

        }, this.option2)
    },

    mounted() {

        document.addEventListener(
            "click",
            (event) => {
                if (this.isDisplaySearchBoxRun) {
                    this.isDisplaySearchBoxRun = false;
                    return;
                }

                if (!this.isSearchBoxDisplay) return

                var rect = this.$refs["searchBox"].getBoundingClientRect();
                var y = rect.top;
                var my = event.clientY;
                var diff = my - y;

                if (diff < 0 || diff > 160) {

                    this.searchBoxOpacity = "0"
                    this.searchBoxDisplay = "none"

                    this.body.style.position = "relative"
                    this.body.style.top = "0"

                    coverPart.$refs["cover"].style.overflowY = "visible"
                    coverPart.$refs["cover"].style.position = "absolute"
                    coverPart.$refs["cover"].style.top = "0"
                    coverPart.$refs["cover"].style.height = "0px"

                    coverPart.coverVisibility = "hidden"
                    coverPart.coverOpacity = "0"
                    coverPart.coverBackColor = "transparent"

                    window.scrollBy(0, this.bodyScroll)

                    this.searchIconDisplay = "inline-block"
                    this.exitIconDisplay = "none"

                    this.isSearchBoxDisplay = false

                } else {
                    return;
                }
            },
            false
        );

        this.observer_1.observe(this.$refs["headerMenu"])
        this.observer_2.observe(this.$refs["headerTitle"])
    },

    computed: {
        showSubMenu: function () {
            return itemId => {
                var element_1 = this.$refs[`pointer_${itemId}`][0]
                var element_2 = this.$refs[`store_${itemId}`][0]

                // console.log(element_1)
                element_1.style.visibility = "visible"
                element_2.style.visibility = "visible"

                element_1.style.opacity = "1"
                element_2.style.opacity = "1"

                element_1.style.top = "71px"
                element_2.style.top = "86px"
            }
        },

        hiddenSubMenu: function () {
            return (event, itemId) => {
                var element_1 = this.$refs[`pointer_${itemId}`][0]
                var element_2 = this.$refs[`store_${itemId}`][0]

                var rect = element_2.getBoundingClientRect();

                var y = rect.top;
                var x = rect.left;
                var h = rect.height;
                var w = rect.width;
                var my = event.clientY;
                var mx = event.clientX;
                var diffY = my - y;
                var diffX = mx - x;
                var condition1 = diffX >= 0 && diffX <= w;
                var condition2 = diffY >= 0 && diffY < h;

                if (condition1 && condition2) return;

                element_1.style.visibility = "hidden"
                element_2.style.visibility = "hidden"

                element_1.style.opacity = "0"
                element_2.style.opacity = "0"

                element_1.style.top = "61px"
                element_2.style.top = "76px"
            }
        },

        displaySearchBox: function () {

            return () => {
                this.isDisplaySearchBoxRun = true;
                this.isSearchBoxDisplay = true;

                this.searchBoxDisplay = "block"

                this.bodyScroll = window.scrollY

                this.body.style.top = `${this.body.getBoundingClientRect().top}px`
                this.body.style.position = "fixed"
                this.body.style.overflowY = "scroll"

                coverPart.$refs["cover"].style.height = `${window.innerHeight}px`
                coverPart.$refs["cover"].style.position = "fixed"
                coverPart.$refs["cover"].style.top = "0"
                coverPart.$refs["cover"].style.overflowY = "hidden"
                coverPart.coverVisibility = "visible"
                coverPart.coverOpacity = "1"
                coverPart.coverBackColor = "rgba(0,0,0,0.5)"

                this.searchIconDisplay = "none"
                this.exitIconDisplay = "inline-block"

                setTimeout(() => {
                    this.searchBoxOpacity = "1"
                }, 0);
            }
        },

        hiddenSearchBox: function () {

            return () => {
                this.searchBoxOpacity = "0"
                this.searchBoxDisplay = "none"

                this.body.style.position = "relative"
                this.body.style.top = "0"

                coverPart.$refs["cover"].style.overflowY = "visible"
                coverPart.$refs["cover"].style.position = "absolute"
                coverPart.$refs["cover"].style.top = "0"
                coverPart.$refs["cover"].style.height = "0px"

                coverPart.coverVisibility = "hidden"
                coverPart.coverOpacity = "0"
                coverPart.coverBackColor = "transparent"

                window.scrollBy(0, this.bodyScroll)

                this.searchIconDisplay = "inline-block"
                this.exitIconDisplay = "none"

                this.isSearchBoxDisplay = false;
            }
        },

        CompMenu: function () {

            return () => {
                // if (this.SubCompMenuRun) {
                //     this.SubCompMenuRun = false
                //     return
                // }
                if (this.showCompMenu) {
                    this.compMenuHeight = 0
                    this.compMenuPadding = "0px"
                    this.compIconHeight = "46px"
                    this.iconBorderRadi = "5px 5px 5px 5px"
                    this.showCompMenu = false
                } else {
                    this.compMenuHeight = this.preCompMenuHeight
                    this.compMenuPadding = "20px"
                    this.compIconHeight = "61px"
                    this.iconBorderRadi = "5px 5px 0px 0px"
                    this.showCompMenu = true
                }
            }
        },

        SubCompMenu: function () {
            return compItemId => {
                // this.SubCompMenuRun = true

                if (!this.showSubCom[`subCompMenu_${compItemId}`]) {
                    this.$refs[`plus_${compItemId}`][0].style.display = "none"
                    this.$refs[`dash_${compItemId}`][0].style.display = "inline-block"
                    this.$refs[`subCompMenu_${compItemId}`][0].style.height = "180px"
                    this.compMenuHeight = this.compMenuHeight + 180
                    this.preCompMenuHeight = this.compMenuHeight
                    this.showSubCom[`subCompMenu_${compItemId}`] = true
                } else {
                    this.$refs[`plus_${compItemId}`][0].style.display = "inline-block"
                    this.$refs[`dash_${compItemId}`][0].style.display = "none"
                    this.$refs[`subCompMenu_${compItemId}`][0].style.height = "0px"
                    this.compMenuHeight = this.compMenuHeight - 180
                    this.preCompMenuHeight = this.compMenuHeight
                    this.showSubCom[`subCompMenu_${compItemId}`] = false

                }
            }
        }
    }

})


var springAndSummerClothes = [{
    id: 0,
    category: "پیراهن",
    url: null,
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 8,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 9,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 10,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 11,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, {
    id: 1,
    category: "تیشرت",
    url: null,
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, {
    id: 2,
    category: "پلوشرت",
    url: null,
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 8,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 9,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, ]

var fallAndWinterClothes = [{
    id: 0,
    category: "پلیور",
    url: "#",
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 8,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 9,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 10,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 11,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, {
    id: 1,
    category: "سویشرت و هودی",
    url: "#",
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, {
    id: 2,
    category: "کاپشن و پالتو",
    url: "#",
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 8,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 9,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, {
    id: 3,
    category: "تیشرت آستین بلند",
    url: "#",
    products: [{
        id: 0,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 1,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 2,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 3,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 4,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 5,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 6,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 7,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 8,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 9,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, {
        id: 10,
        picture: "images/caption.jpg",
        url: "#",
        productName: "نام محصول",
        productPrice: "قیمت محصول"
    }, ]
}, ]

var vests = []
var pants = []
var shoots = []

categories = [{
    id: 0,
    name: "جدیدترین",
    url: null,
}, {
    id: 1,
    name: "ارزان ترین",
    url: null,
}, {
    id: 2,
    name: "پرفروش ترین",
    url: null,
}, ]

var subShopContainer = new Vue({
    el: ".sub-shop-container",
    data: {
        springAndSummerClothes,
        fallAndWinterClothes,
        prevStoreId: 0,
    },
    computed: {
        showShop: function () {
            return (subShopId) => {
                bodyContainer.$refs[`proCont_${this.prevStoreId}`][0].style.display = "none";
                bodyContainer.$refs[`proCont_${this.prevStoreId}`][0].style.opacity = "0";
                this.$refs[`subShop_${this.prevStoreId}`][0].children[0].style.color = "#fff";
                this.$refs[`subShop_${this.prevStoreId}`][0].style.boxShadow = "0px 3px #1d2547";

                this.$refs[`subShop_${subShopId}`][0].children[0].style.color = "rgb(240, 122, 75)";
                this.$refs[`subShop_${subShopId}`][0].style.boxShadow = "0px 3px rgb(240 122 75)";
                bodyContainer.$refs[`proCont_${subShopId}`][0].style.display = "inline-flex";
                setTimeout(() => {
                    bodyContainer.$refs[`proCont_${subShopId}`][0].style.opacity = "1";
                }, 0);

                this.prevStoreId = subShopId
            }
        },
    }
})

var bodyContainer = new Vue({
    el: ".body-container",
    data: {
        stores,
        categories,
        springAndSummerClothes,
        fallAndWinterClothes,
        respNum: 3,
        prevCateg: 0,

    },
    computed: {

        overFigure: function () {
            return (subStoreId, productId) => {
                this.$refs[`figure_${subStoreId}_${productId}`][0].style.backgroundColor = "rgba(33,33,33,0.3)"
                this.$refs[`viewMore_${subStoreId}_${productId}`][0].style.opacity = "1"
                this.$refs[`viewMore_${subStoreId}_${productId}`][0].style.top = "47%"
            }
        },
        outFigure: function () {
            return (subStoreId, productId) => {
                this.$refs[`figure_${subStoreId}_${productId}`][0].style.backgroundColor = "#f0f0f000"
                this.$refs[`viewMore_${subStoreId}_${productId}`][0].style.opacity = "0"
                this.$refs[`viewMore_${subStoreId}_${productId}`][0].style.top = "48%"
            }
        },
        hoverRadio: function () {
            return (catId) => {
                if (catId == this.prevCateg) return

                this.$refs[`category_${catId}`][0].children[0].children[0].style.opacity = "0.4"
            }
        },
        unhoverRadio: function () {
            return (catId) => {
                if (catId == this.prevCateg) return

                this.$refs[`category_${catId}`][0].children[0].children[0].style.opacity = "0"
            }
        },
        activeRadio: function () {
            return (catId) => {
                this.$refs[`category_${this.prevCateg}`][0].children[0].children[0].style.opacity = "0"

                this.$refs[`category_${catId}`][0].children[0].children[0].style.opacity = "1"

                this.prevCateg = catId
            }
        }
    }
})

var footerTop = [{
    id: 0,
    h1: "تحویل کالا در محل",
    h2: "تحویل کالا در سریع ترین زمان",
}, {
    id: 1,
    h1: "پرداخت امن",
    h2: "پرداخت امن و آسان با استفاده از شبکه های بانکی",
}, {
    id: 2,
    h1: "پشتیبانی آنلاین",
    h2: "پشتیبانی آنلاین 24 ساعته",
}, {
    id: 3,
    h1: "تضمین ضمانت محصول",
    h2: "تحویل و یا تعویض محصول خریداری شده در 24 ساعت پس از خرید",
}]

var footerBottom = [{
    id: 0,
    title: "راهنمای خرید",
    items: [{
        id: 0,
        url: "#",
        h2: "راهنمای ارسال"
    }, {
        id: 1,
        url: "#",
        h2: "راهنمای پرداخت"
    }]
}, {
    id: 1,
    title: "خدمات مشتریان",
    items: [{
        id: 0,
        url: "#",
        h2: "پشتیبانی : 071-33200000"
    }, {
        id: 1,
        url: "#",
        h2: "سوالات متداول"
    }, {
        id: 2,
        url: "#",
        h2: "حریم خصوصی کاربران"
    }]
}, {
    id: 2,
    title: "درباره بوتیک من",
    items: [{
        id: 0,
        url: "./aboutUs.html",
        h2: "درباره ما"
    }, {
        id: 1,
        url: "#",
        h2: "ارتباط با ما"
    }]
}, {
    id: 3,
    title: "ثبت ایمیل در خبرنامه",
    items: [{
        id: 0,
        url: "#",
        h2: "راهنمای ارسال"
    }, {
        id: 1,
        url: null,
        h2: "از جدیدترین محصولات و تخفیف ها باخبر شوید"
    }]
}]

var footer = new Vue({
    el: ".footer",
    data: {
        footerTop,
        footerBottom,
        observer_1: new Object,
        observer_2: new Object,
        option1: {
            threshold: [0, 0.06]
        },
        option2: {
            threshold: [0]
        },

    },

    created() {

        this.observer_1 = new IntersectionObserver((entry) => {

            if (entry.length == 1) {
                if (!entry[0].isIntersecting) return

                if (entry[0].target.children[0].style.opacity == "1") return

                entry[0].target.children[0].style.opacity = "1"
                entry[0].target.children[0].style.top = "0"

            } else if (entry.length == 2) {

                if (!entry[0].isIntersecting) return

                var firstTarget = entry[0].target.children[0]
                var secondTarget = entry[1].target.children[0]

                if (firstTarget.style.opacity == "1" || secondTarget.style.opacity == "1") return

                setTimeout(() => {
                    firstTarget.style.opacity = "1"
                    firstTarget.style.top = "0"
                }, 0)

                setTimeout(() => {
                    secondTarget.style.opacity = "1"
                    secondTarget.style.top = "0"
                }, 250)

            } else if (entry.length == 4) {

                if (!entry[0].isIntersecting) return

                if (entry[0].target.children[0].style.opacity == "1") return

                setTimeout(() => {
                    entry[0].target.children[0].style.opacity = "1"
                    entry[0].target.children[0].style.top = "0"
                }, 0)

                setTimeout(() => {
                    entry[1].target.children[0].style.opacity = "1"
                    entry[1].target.children[0].style.top = "0"
                }, 250)

                setTimeout(() => {
                    entry[2].target.children[0].style.opacity = "1"
                    entry[2].target.children[0].style.top = "0"
                }, 500)

                setTimeout(() => {
                    entry[3].target.children[0].style.opacity = "1"
                    entry[3].target.children[0].style.top = "0"
                }, 750)

            } else {
                // console.log("entry5")
            }

        }, this.option1)


        this.observer_2 = new IntersectionObserver((entry) => {
            if (entry.length == 1) {
                if (entry[0].isIntersecting) return
                if (entry[0].boundingClientRect.top < 0) return
                if (entry[0].target.children[0].style.opacity == "0") return

                entry[0].target.children[0].style.opacity = "0"
                entry[0].target.children[0].style.top = "55%"

            } else if (entry.length == 2) {
                var firstTarget = entry[0].target.children[0]
                var secondTarget = entry[1].target.children[0]

                if (entry[0].isIntersecting) return
                if (entry[0].boundingClientRect.top < 0) return
                if (firstTarget.style.opacity == "0") return

                firstTarget.style.opacity = "0"
                firstTarget.style.top = "55%"

                secondTarget.style.opacity = "0"
                secondTarget.style.top = "55%"


            } else if (entry.length == 4) {

                if (entry[0].isIntersecting) return
                if (entry[0].boundingClientRect.top < 0) return
                if (entry[0].target.children[0].style.opacity == "0") return

                entry[0].target.children[0].style.opacity = "0"
                entry[0].target.children[0].style.top = "55%"

                entry[1].target.children[0].style.opacity = "0"
                entry[1].target.children[0].style.top = "55%"

                entry[2].target.children[0].style.opacity = "0"
                entry[2].target.children[0].style.top = "55%"

                entry[3].target.children[0].style.opacity = "0"
                entry[3].target.children[0].style.top = "55%"

            } else {
                console.log("entry5")
            }

        }, this.option2)

        this.observer_3 = new IntersectionObserver((entry) => {

            if (!entry[0].isIntersecting) {
                bodyContainer.$refs["navbarContainer"].style.visibility = "visible"
                subShopContainer.$refs["subShopContainer"].style.visibility = "visible"

            } else {
                bodyContainer.$refs["navbarContainer"].style.visibility = "hidden"
                subShopContainer.$refs["subShopContainer"].style.visibility = "hidden"
            }

        }, this.option2)
    },

    mounted() {

        for (let index = 0; index < footerTop.length; index++) {
            this.observer_1.observe(this.$refs[`footerTop_${index}`][0])
            this.observer_2.observe(this.$refs[`footerTop_${index}`][0])
        }
        this.observer_3.observe(this.$refs["footer"])
    },

})