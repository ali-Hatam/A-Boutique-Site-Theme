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
var AppInitializer = function() {
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
    radioChecked = [
        { displayCheck: "false", id: 0 },
        { displayCheck: "false", id: 1 },
        { displayCheck: "false", id: 2 },
        { displayCheck: "false", id: 3 },
        { displayCheck: "true", id: 4 }
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

var SliderInit = function() {

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

var MoveSlides = function() {

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

var RunEffect2 = function() {

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

var SelectSlide = function(number) {

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

var MoveSelectSlide = function(num) {

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
        showSlide: function(check) {
            this.SelectSlide()
        }
    }
})

sliderInstance.SelectSlide = SelectSlide


setTimeout(SliderInit, 4000);