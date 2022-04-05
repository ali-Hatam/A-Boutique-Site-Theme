// ---------- Arrays --------------------------
var totImg, translateZ, scaleX, scaleY, totTop, totRight, zIndex, totRadio,
    previousDeltaZ, previousDeltaScaleX, previousDeltaScaleY, previousDeltaTop, previousDeltaRight,
    lastZIndex, lastTransform, lastTop, lastRight, radioChecked, imageProperty

// ------------- Numbers ---------------------- 
var totalIndex, iter, sliderCounter, counter, iteration, count50, divid, m, num1;

// --------------- Boolean And Else -----------
var isSelect2, isSelect1, isShowShop1, isShowShop2, effect, effect2, sliderInitializer,
    slider, moveSlides, runEffect2, isDisplaySearchBoxRun

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
    },
    computed: {

    }
})

sliderInstance.SelectSlide = SelectSlide


setTimeout(SliderInit, 4000);

var body = document.body

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
        text: "پوشاک بهاره و تابستانه"
    },
    {
        id: 2,
        url: "./coolShirt.html",
        text: "پوشاک پاییزه و زمستانه"
    },
    {
        id: 3,
        url: "./coolShirt.html",
        text: "جلیقه"
    },
    {
        id: 4,
        url: "./coolShirt.html",
        text: "شلوار"
    },
    {
        id: 5,
        url: "./coolShirt.html",
        text: "کفش"
    },
]

var offs = [{
        id: 1,
        url: "./coolShirt.html",
        text: "تخفیف های پوشاک بهاره و تابستانه"
    },
    {
        id: 2,
        url: "./coolShirt.html",
        text: "تخفیف های پوشاک پاییزه و زمستانه"
    },
    {
        id: 3,
        url: "./coolShirt.html",
        text: "تخفیف های جلیقه"
    },
    {
        id: 4,
        url: "./coolShirt.html",
        text: "تخفیف های شلوار"
    },
    {
        id: 5,
        url: "./coolShirt.html",
        text: "تخفیف های کفش"
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
        searchBoxDisplay: "none",
        searchBoxOpacity: "0",
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
            }
        }
    }

})