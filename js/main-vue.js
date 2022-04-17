// ---------- Arrays --------------------------
var totImg, translateZ, scaleX, scaleY, totTop, totRight, zIndex, totRadio,
    previousDeltaZ, previousDeltaScaleX, previousDeltaScaleY, previousDeltaTop, previousDeltaRight,
    lastZIndex, lastTransform, lastTop, lastRight, radioChecked, imageProperty

// ------------- Numbers ---------------------- 
var totalIndex, iter, sliderCounter, counter, iteration, count50, divid, m, num1;

// --------------- Boolean And Else -----------
var isSelect2, isSelect1, isShowShop1, isShowShop2, effect, effect2, sliderInitializer,
    slider, moveSlides, runEffect2, isDisplaySearchBoxRun

var body = document.body
// ----------------------- Functions ------------------------------------------
var AppInitializer = function () {
    translateZ = [100, 100, 100, 100, -400];
    scaleX = [0.5, 0.5, 0.5, 0.5, -2];
    scaleY = [0.5, 0.5, 0.5, 0.5, -2];
    totTop = [-13, -8, -1, 3, 19];
    totRight = [-18, -28, -24, 32, 38];
    zIndex = [1, 2, 3, 4, 5];

    previousDeltaZ = [0, 100, 200, 300, 400];
    previousDeltaScaleX = [1, 1.5, 2, 2.5, 3];
    previousDeltaScaleY = [1, 1.5, 2, 2.5, 3];
    previousDeltaTop = [55, 42, 34, 33, 36];
    previousDeltaRight = [85, 67, 39, 15, 47];

    lastZIndex = ["1", "2", "3", "4", "5"];
    lastTransform = ["scaleX(1) scaleY(1)", "scaleX(1.5) scaleY(1.5)", "scaleX(2) scaleY(2)", "scaleX(2.5) scaleY(2.5)", "scaleX(3) scaleY(3)"];
    lastTop = ["55%", "42%", "34%", "33%", "36%"];
    lastRight = ["85%", "67%", "39%", "15%", "47%"];
    radioChecked = [{
            displayCheck: "false",
            id: 0
        },
        {
            displayCheck: "false",
            id: 1
        },
        {
            displayCheck: "false",
            id: 2
        },
        {
            displayCheck: "false",
            id: 3
        },
        {
            displayCheck: "true",
            id: 4
        }
    ];
    imageProperty = [

        {
            elementZIndex: lastZIndex[0],
            elementTransform: lastTransform[0],
            elementTop: lastTop[0],
            elementRight: lastRight[0],
            src: "images/crop-Chrysanthemum.jpg"
        },
        {
            elementZIndex: lastZIndex[1],
            elementTransform: lastTransform[1],
            elementTop: lastTop[1],
            elementRight: lastRight[1],
            src: "images/crop-desert.jpg"
        },
        {
            elementZIndex: lastZIndex[2],
            elementTransform: lastTransform[2],
            elementTop: lastTop[2],
            elementRight: lastRight[2],
            src: "images/crop-flower.jpg"
        },
        {
            elementZIndex: lastZIndex[3],
            elementTransform: lastTransform[3],
            elementTop: lastTop[3],
            elementRight: lastRight[3],
            src: "images/crop-panguan.jpg"
        },
        {
            elementZIndex: lastZIndex[4],
            elementTransform: lastTransform[4],
            elementTop: lastTop[4],
            elementRight: lastRight[4],
            src: "images/crop-yellowFlower.jpg"
        }
    ]

    totalIndex = 0;
    iter = 34;
    sliderCounter = 1;
    count50 = 1;
    isSelect1 = false;
    isSelect2 = false;
    isDisplaySearchBoxRun = false;
}

var SliderInit = function () {

    if (isSelect2) {
        iter = 10;
        divid = iter;
        m = 1;
    } else {
        iter = 34;
        divid = iter;
        m = 1;
    }

    var imgIndex0 = totalIndex;

    for (let index = 0; index <= 4; index++) {

        lastZIndex[imgIndex0] = `${zIndex[index]}`;
        imageProperty[imgIndex0].elementZIndex = lastZIndex[imgIndex0]

        if (imgIndex0 == 4) {
            imgIndex0 = 0;
        } else {
            imgIndex0 = imgIndex0 + 1;
        }
    }

    counter = 1;

    effect = setInterval(MoveSlides, 50);
}

var MoveSlides = function () {

    var imgIndex = totalIndex;

    if (counter <= iter) {
        for (let index = 0; index <= 4; index++) {

            currentDeltaScaleX =
                previousDeltaScaleX[imgIndex] + (scaleX[index] / divid) * m;

            currentDeltaScaleY =
                previousDeltaScaleY[imgIndex] + (scaleY[index] / divid) * m;

            currentDeltaTop =
                previousDeltaTop[imgIndex] + (totTop[index] / divid) * m;

            currentDeltaRight =
                previousDeltaRight[imgIndex] + (totRight[index] / divid) * m;

            lastTransform[imgIndex] = `scaleX(${currentDeltaScaleX}) scaleY(${currentDeltaScaleY})`;

            lastTop[imgIndex] = `${currentDeltaTop}%`;

            lastRight[imgIndex] = `${currentDeltaRight}%`;

            imageProperty[imgIndex].elementTransform = lastTransform[imgIndex]
            imageProperty[imgIndex].elementTop = lastTop[imgIndex]
            imageProperty[imgIndex].elementRight = lastRight[imgIndex]

            previousDeltaScaleX[imgIndex] = currentDeltaScaleX;
            previousDeltaScaleY[imgIndex] = currentDeltaScaleY;
            previousDeltaTop[imgIndex] = currentDeltaTop;
            previousDeltaRight[imgIndex] = currentDeltaRight;

            if (imgIndex == 4) {
                imgIndex = 0;
            } else {
                imgIndex = imgIndex + 1;
            }
        }

        counter++;

    } else {
        if (iter != 0) {
            if (totalIndex == 0) {
                totalIndex = 4;
            } else {
                totalIndex -= 1
            }
        }

        RunEffect2();
    }
}

var RunEffect2 = function () {

    if (isSelect1) {

        clearInterval(effect);
        effect = null;

        MoveSelectSlide(num1);

    } else if (isSelect2) {

        if (count50 == iteration) {

            clearInterval(effect);
            effect = null;

            clearTimeout(effect2);
            effect2 = null;

            effect2 = setTimeout(SliderInit, 3200);

            count50 = 1;
            isSelect2 = false;

            if (totalIndex == 0) {
                radioChecked[totalIndex].displayCheck = "false";
                radioChecked[4].displayCheck = "true";

            } else {
                radioChecked[totalIndex].displayCheck = "false";
                radioChecked[totalIndex - 1].displayCheck = "true";
            }
        } else {
            // effect2 = setInterval(slider, 0);
            let imgIndex0 = totalIndex;

            for (let index = 0; index <= 4; index++) {
                lastZIndex[imgIndex0] = `${zIndex[index]}`;
                imageProperty[imgIndex0].elementZIndex = lastZIndex[imgIndex0]

                if (imgIndex0 == 4) {
                    imgIndex0 = 0;
                } else {
                    imgIndex0 = imgIndex0 + 1;
                }
            }
            counter = 1;
            count50++;
        }
    } else {
        clearInterval(effect);
        effect = null;
        clearTimeout(effect2);
        effect2 = null;

        if (totalIndex == 0) {
            radioChecked[totalIndex].displayCheck = "false";
            radioChecked[4].displayCheck = "true";
        } else {
            radioChecked[totalIndex].displayCheck = "false";
            radioChecked[totalIndex - 1].displayCheck = "true";
        }

        effect2 = setTimeout(SliderInit, 3200);
    }
}

var SelectSlide = function (number) {

    clearTimeout(effect2);
    clearInterval(effect);

    effect2 = null;
    effect = null;

    radioChecked.forEach(radio => {
        radio.displayCheck = "false"
    });

    radioChecked[number].displayCheck = "true"

    isSelect2 = false;
    isSelect1 = true;
    iter = iter - (counter - 1);

    if (iter != 0) {
        m = iter / 3;
        iter = 3;
    }

    counter = 1;
    num1 = number;

    effect = setInterval(MoveSlides, 50);
}

var MoveSelectSlide = function (num) {

    let localCounter = 0;
    let imageNum = totalIndex;
    isSelect2 = true;
    isSelect1 = false;

    while (true) {
        if (imageNum == num) {
            iteration = 4 - localCounter;

            if (iteration !== 0) {
                clearTimeout(effect2);
                effect2 = null;
                effect2 = setTimeout(SliderInit, 0);
                return;

            } else {
                clearTimeout(effect2);
                effect2 = null;
                isSelect2 = false;
                setTimeout(SliderInit, 4000);
                return;
            }
        }
        if (imageNum == 4) {
            imageNum = 0;

        } else {
            imageNum++;
        }
        localCounter++;
    }
}

AppInitializer();

var sliderInstance = new Vue({
    el: ".slider",
    data: {
        imageProperty,
        radioChecked,
        body,
    },
    computed: {

    }
})

sliderInstance.SelectSlide = SelectSlide


setTimeout(SliderInit, 4000);


var coverPart = new Vue({
    el: ".cover",
    data: {
        coverBackColor: "transparent",
        coverVisibility: "hidden",
        coverOpacity: "0",
        coverHeight: "0px",
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
        url: "#",
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
        showSubCom: {
            subCompMenu_2: false,
            subCompMenu_3: false
        }
        // SubCompMenuRun: false,
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

                    coverPart.coverVisibility = "hidden"
                    coverPart.coverOpacity = "0"
                    coverPart.coverBackColor = "transparent"
                    coverPart.coverHeight = `0px`

                    this.searchIconDisplay = "inline-block"
                    this.exitIconDisplay = "none"

                    this.isSearchBoxDisplay = false

                } else {
                    return;
                }
            },
            false
        );

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

                coverPart.coverVisibility = "visible"
                coverPart.coverOpacity = "1"
                coverPart.coverBackColor = "rgba(0,0,0,0.5)"
                var bodyHeight = this.body.offsetHeight
                coverPart.coverHeight = `${bodyHeight}px`

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

                coverPart.coverVisibility = "hidden"
                coverPart.coverOpacity = "0"
                coverPart.coverBackColor = "transparent"
                coverPart.coverHeight = `0px`

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

var lastProduct = new Vue({
    el: ".last-products-container",
    data: {
        stores,
        previousStoreId: 1,
        storesLeft: [0, 0, 0, 0, 0],
        storesLeftLimit: [0, 0, 0, 0, 0],
        flexConDisplay: ["inline-flex", "none", "none", "none", "none"],
        chevRightOpac: "1",
        chevLeftOpac: "0.5",
        moveConPart: 2,
        prevMoveConPart: 2,
        headerOpacity: "0",
        headerTop: "30%",
        productOpacity_1: "0",
        productOpacity_2: "0",
        productOpacity_3: "0",
        productTop_1: "200px",
        productTop_2: "200px",
        productTop_3: "200px",
        isHeaderShow: false,
        isProductShow: false,
        observer_1: new Object(),
        observer_2: new Object(),
        observer_3: new Object(),
        observer_4: new Object(),
        option1: {
            threshold: [0.1]
        },
        option2: {
            threshold: [0]
        }
    },

    created() {
        if (window.innerWidth >= 960) {
            this.moveConPart = 3
            this.storesLeftLimit = [200, 200, 200, 200, 200]

        } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
            this.moveConPart = 2
            this.storesLeftLimit = [300, 300, 300, 300, 300]

        } else {
            this.moveConPart = 1
            this.storesLeftLimit = [600, 600, 600, 600, 600]
        }

        this.prevMoveConPart = this.moveConPart

        visualViewport.addEventListener("resize", () => {
            if (window.innerWidth >= 960) {
                this.moveConPart = 3
            } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
                this.moveConPart = 2
            } else {
                this.moveConPart = 1
            }
        })

        this.observer_1 = new IntersectionObserver((entry) => {

            if (entry.length > 1) return
            if (!entry[0].isIntersecting) return
            if (this.isProductShow) return

            setTimeout(() => {
                this.productOpacity_1 = "1"
                this.productTop_1 = "0"
            }, 0)

            setTimeout(() => {
                this.productOpacity_2 = "1"
                this.productTop_2 = "0"
            }, 250)

            setTimeout(() => {
                this.productOpacity_3 = "1"
                this.productTop_3 = "0"
            }, 500)

            this.isProductShow = true

        }, this.option1)


        this.observer_2 = new IntersectionObserver((entry) => {

            if (entry.length > 1) return
            if (entry[0].isIntersecting) return
            if (entry[0].boundingClientRect.top < 0) return
            if (!this.isProductShow) return

            this.productOpacity_1 = "0"
            this.productTop_1 = "200px"

            this.productOpacity_2 = "0"
            this.productTop_2 = "200px"

            this.productOpacity_3 = "0"
            this.productTop_3 = "200px"

            this.isProductShow = false

        }, this.option2)

        this.observer_3 = new IntersectionObserver((entry) => {

            if (!entry[0].isIntersecting) return
            if (this.isHeaderShow) return

            this.headerOpacity = "1"
            this.headerTop = "0"

            this.isHeaderShow = true
        }, this.option1)

        this.observer_4 = new IntersectionObserver((entry) => {

            if (entry[0].isIntersecting) return
            if (!this.isHeaderShow) return
            if (entry[0].boundingClientRect.top < 0) return

            this.headerOpacity = "0"
            this.headerTop = "30%"

            this.isHeaderShow = false
        }, this.option2)

    },

    updated() {

        for (let index = 0; index < 5; index++) {

            this.storesLeftLimit[index] = (this.$refs[`flexCont_${index+1}`][0].children.length - 1) * 100

            var productInd = (this.storesLeft[index] / 100 + 1) * this.prevMoveConPart - (this.prevMoveConPart - 1)
            this.storesLeft[index] = productInd % this.moveConPart == 0 ? ((productInd / this.moveConPart) - 1) * 100 : Math.floor(productInd / this.moveConPart) * 100
            this.$refs[`flexCont_${index+1}`][0].style.left = `${this.storesLeft[index]}%`
        }

        this.prevMoveConPart = this.moveConPart
    },

    mounted() {

        for (let index = 0; index < 5; index++) {
            this.observer_1.observe(this.$refs[`flexCont_${index+1}`][0])
            this.observer_2.observe(this.$refs[`flexCont_${index+1}`][0])
        }

        this.observer_3.observe(this.$refs["mainHeader"])
        this.observer_4.observe(this.$refs["mainHeader"])
    },

    computed: {
        overFigure: function () {
            return (shopId, productIndex) => {
                this.$refs[`figure_${shopId}_${productIndex}`][0].style.backgroundColor = "rgba(33,33,33,0.3)";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.opacity = "1";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.top = "47%";
            }
        },
        outFigure: function () {
            return (shopId, productIndex) => {
                this.$refs[`figure_${shopId}_${productIndex}`][0].style.backgroundColor = "#f0f0f000";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.opacity = "0";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.top = "48%";
            }
        },
        showShop: function () {
            return (shopId) => {
                if (shopId == this.previousStoreId) return

                Vue.set(lastProduct.flexConDisplay, this.previousStoreId - 1, "none")
                this.$refs[`flexCont_${this.previousStoreId}`][0].style.opacity = "0"
                this.$refs[`shopName_${this.previousStoreId}`][0].style.color = "#1d2547"
                this.$refs[`shopBox_${this.previousStoreId}`][0].style.boxShadow = " 0px 2px #1d2547 "

                Vue.set(lastProduct.flexConDisplay, shopId - 1, "inline-flex")
                this.$refs[`shopName_${shopId}`][0].style.color = "rgb(240, 122, 75)"
                this.$refs[`shopBox_${shopId}`][0].style.boxShadow = " 0px 2px rgb(240, 122, 75) "

                setTimeout(() => {

                    this.$refs[`flexCont_${shopId}`][0].style.opacity = "1"
                }, 0)


                if (this.storesLeft[shopId - 1] == this.storesLeftLimit[shopId - 1]) {

                    this.chevRightOpac = "0.5"
                    this.chevLeftOpac = "1"

                } else if (this.storesLeft[shopId - 1] == 0) {

                    this.chevRightOpac = "1"
                    this.chevLeftOpac = "0.5"

                } else {

                    this.chevRightOpac = "1"
                    this.chevLeftOpac = "1"
                }

                this.previousStoreId = shopId
            }
        },
        moveRight: function () {
            return () => {

                for (let index = 0; index <= this.stores.length - 1; index++) {
                    if (this.flexConDisplay[index] == "inline-flex") {

                        if (this.storesLeft[index] == this.storesLeftLimit[index]) return

                        this.storesLeft[index] += 100
                        this.$refs[`flexCont_${index+1}`][0].style.left = `${this.storesLeft[index]}%`

                        if (this.storesLeft[index] == this.storesLeftLimit[index]) {

                            this.chevRightOpac = "0.5"
                            this.chevLeftOpac = "1"

                        } else {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "1"
                        }

                    }

                }
            }
        },
        moveLeft: function () {
            return () => {

                for (let index = 0; index <= this.stores.length - 1; index++) {
                    if (this.flexConDisplay[index] == "inline-flex") {

                        if (this.storesLeft[index] == 0) return

                        this.storesLeft[index] -= 100
                        this.$refs[`flexCont_${index+1}`][0].style.left = `${this.storesLeft[index]}%`

                        if (this.storesLeft[index] == 0) {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "0.5"

                        } else {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "1"
                        }

                    }
                }
            }
        },
        productOpacity: function () {
            return (ind) => {
                if (ind == 1) {
                    return this.productOpacity_1
                } else if (ind == 2) {
                    return this.productOpacity_2
                } else {
                    return this.productOpacity_3
                }
            }
        },
        productTop: function () {
            return (ind) => {
                if (ind == 1) {
                    return this.productTop_1
                } else if (ind == 2) {
                    return this.productTop_2
                } else {
                    return this.productTop_3
                }
            }
        }
    }
})


var popularProducts = new Vue({
    el: ".popular-products-container",
    data: {
        offs,
        previousOffId: 1,
        offLeft: [0, 0, 0, 0, 0],
        offsLeftLimit: [0, 0, 0, 0, 0],
        offConDisplay: ["inline-flex", "none", "none", "none", "none"],
        chevRightOpac: "1",
        chevLeftOpac: "0.5",
        moveConPart: 3,
        prevMoveConPart: 3,
        headerOpacity: "0",
        headerTop: "30%",
        productOpacity_1: "0",
        productOpacity_2: "0",
        productOpacity_3: "0",
        productTop_1: "200px",
        productTop_2: "200px",
        productTop_3: "200px",
        isHeaderShow: false,
        isProductShow: false,
        observer_1: new Object(),
        observer_2: new Object(),
        observer_3: new Object(),
        observer_4: new Object(),
        option1: {
            threshold: [0.1]
        },
        option2: {
            threshold: [0]
        }

    },

    created() {
        if (window.innerWidth >= 960) {
            this.moveConPart = 3
            this.offsLeftLimit = [200, 200, 200, 200, 200]

        } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
            this.moveConPart = 2
            this.offsLeftLimit = [300, 300, 300, 300, 300]

        } else {
            this.moveConPart = 1
            this.offsLeftLimit = [600, 600, 600, 600, 600]

        }

        this.prevMoveConPart = this.moveConPart

        visualViewport.addEventListener("resize", () => {
            if (window.innerWidth >= 960) {
                this.moveConPart = 3
            } else if (window.innerWidth >= 630 && window.innerWidth < 960) {
                this.moveConPart = 2
            } else {
                this.moveConPart = 1
            }
        })

        this.observer_1 = new IntersectionObserver((entry) => {

            if (entry.length > 1) return
            if (!entry[0].isIntersecting) return
            if (this.isProductShow) return

            setTimeout(() => {
                this.productOpacity_1 = "1"
                this.productTop_1 = "0"
            }, 0)

            setTimeout(() => {
                this.productOpacity_2 = "1"
                this.productTop_2 = "0"
            }, 250)

            setTimeout(() => {
                this.productOpacity_3 = "1"
                this.productTop_3 = "0"
            }, 500)

            this.isProductShow = true

        }, this.option1)


        this.observer_2 = new IntersectionObserver((entry) => {

            if (entry.length > 1) return
            if (entry[0].isIntersecting) return
            if (entry[0].boundingClientRect.top < 0) return
            if (!this.isProductShow) return

            this.productOpacity_1 = "0"
            this.productTop_1 = "200px"

            this.productOpacity_2 = "0"
            this.productTop_2 = "200px"

            this.productOpacity_3 = "0"
            this.productTop_3 = "200px"

            this.isProductShow = false

        }, this.option2)


        this.observer_3 = new IntersectionObserver((entry) => {

            if (!entry[0].isIntersecting) return
            if (this.isHeaderShow) return

            this.headerOpacity = "1"
            this.headerTop = "0"

            this.isHeaderShow = true
        }, this.option1)


        this.observer_4 = new IntersectionObserver((entry) => {

            if (entry[0].isIntersecting) return
            if (!this.isHeaderShow) return
            if (entry[0].boundingClientRect.top < 0) return

            this.headerOpacity = "0"
            this.headerTop = "30%"

            this.isHeaderShow = false
        }, this.option2)

    },

    updated() {

        for (let index = 0; index < 5; index++) {

            this.offsLeftLimit[index] = (this.$refs[`flexCont_${index+1}`][0].children.length - 1) * 100

            var productInd = (this.offLeft[index] / 100 + 1) * this.prevMoveConPart - (this.prevMoveConPart - 1)
            this.offLeft[index] = productInd % this.moveConPart == 0 ? ((productInd / this.moveConPart) - 1) * 100 : Math.floor(productInd / this.moveConPart) * 100
            this.$refs[`flexCont_${index+1}`][0].style.left = `${this.offLeft[index]}%`
        }

        this.prevMoveConPart = this.moveConPart
    },

    mounted() {

        for (let index = 0; index < 5; index++) {
            this.observer_1.observe(this.$refs[`flexCont_${index+1}`][0])
            this.observer_2.observe(this.$refs[`flexCont_${index+1}`][0])
        }

        this.observer_3.observe(this.$refs["mainHeader"])
        this.observer_4.observe(this.$refs["mainHeader"])

    },

    computed: {
        overFigure: function () {
            return (shopId, productIndex) => {
                this.$refs[`figure_${shopId}_${productIndex}`][0].style.backgroundColor = "rgba(33,33,33,0.3)";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.opacity = "1";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.top = "47%";
            }
        },
        outFigure: function () {
            return (shopId, productIndex) => {
                this.$refs[`figure_${shopId}_${productIndex}`][0].style.backgroundColor = "#f0f0f000";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.opacity = "0";
                this.$refs[`viewMore_${shopId}_${productIndex}`][0].style.top = "48%";
            }
        },
        showShop: function () {
            return (shopId) => {
                if (shopId == this.previousOffId) return

                Vue.set(popularProducts.offConDisplay, this.previousOffId - 1, "none")
                this.$refs[`flexCont_${this.previousOffId}`][0].style.opacity = "0"
                this.$refs[`shopName_${this.previousOffId}`][0].style.color = "#1d2547"
                this.$refs[`shopBox_${this.previousOffId}`][0].style.boxShadow = " 0px 2px #1d2547 "

                Vue.set(popularProducts.offConDisplay, shopId - 1, "inline-flex")
                this.$refs[`shopName_${shopId}`][0].style.color = "rgb(240, 122, 75)"
                this.$refs[`shopBox_${shopId}`][0].style.boxShadow = " 0px 2px rgb(240, 122, 75) "

                setTimeout(() => {

                    this.$refs[`flexCont_${shopId}`][0].style.opacity = "1"
                }, 0)


                if (this.offLeft[shopId - 1] == this.offsLeftLimit[shopId - 1]) {

                    this.chevRightOpac = "0.5"
                    this.chevLeftOpac = "1"

                } else if (this.offLeft[shopId - 1] == 0) {

                    this.chevRightOpac = "1"
                    this.chevLeftOpac = "0.5"

                } else {

                    this.chevRightOpac = "1"
                    this.chevLeftOpac = "1"
                }

                this.previousOffId = shopId
            }
        },
        moveRight: function () {
            return () => {

                for (let index = 0; index <= this.offs.length - 1; index++) {
                    if (this.offConDisplay[index] == "inline-flex") {

                        if (this.offLeft[index] == this.offsLeftLimit[index]) return

                        this.offLeft[index] += 100
                        this.$refs[`flexCont_${index+1}`][0].style.left = `${this.offLeft[index]}%`

                        if (this.offLeft[index] == this.offsLeftLimit[index]) {

                            this.chevRightOpac = "0.5"
                            this.chevLeftOpac = "1"

                        } else {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "1"
                        }

                    }

                }
            }
        },
        moveLeft: function () {
            return () => {

                for (let index = 0; index <= this.offs.length - 1; index++) {
                    if (this.offConDisplay[index] == "inline-flex") {

                        if (this.offLeft[index] == 0) return

                        this.offLeft[index] -= 100
                        this.$refs[`flexCont_${index+1}`][0].style.left = `${this.offLeft[index]}%`

                        if (this.offLeft[index] == 0) {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "0.5"

                        } else {

                            this.chevRightOpac = "1"
                            this.chevLeftOpac = "1"
                        }

                    }
                }
            }
        },
        productOpacity: function () {
            return (ind) => {
                if (ind == 1) {
                    return this.productOpacity_1
                } else if (ind == 2) {
                    return this.productOpacity_2
                } else {
                    return this.productOpacity_3
                }
            }
        },
        productTop: function () {
            return (ind) => {
                if (ind == 1) {
                    return this.productTop_1
                } else if (ind == 2) {
                    return this.productTop_2
                } else {
                    return this.productTop_3
                }
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
    }
})