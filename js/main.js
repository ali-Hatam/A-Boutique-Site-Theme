// ------------- Objects ---------------------
var img0, img1, img2, img3, img4, radio0, radio1, radio2, radio3, radio4, searchBox,
    headerMenu, cover, searchForm, body, indexBody

// ---------- Arrays --------------------------
var totImg, translateZ, scaleX, scaleY, totTop, totRight, zIndex, totRadio,
    previousDeltaZ, previousDeltaScaleX, previousDeltaScaleY, previousDeltaTop, previousDeltaRight

// ------------- Numbers ---------------------- 
var totalIndex, iter, sliderCounter, counter, iteration, count50, divid, m, num1;

// --------------- Boolean And Else -----------
var isSelect2, isSelect1, isShowShop1, isShowShop2, effect, effect2, sliderInitializer,
    slider, moveSlides, runEffect2, isDisplaySearchBoxRun


AppInitializer();

setTimeout(slider, 4000);

// -------------------------------- Functions -------------------------------

function AppInitializer() {

    img0 = document.getElementsByClassName("slider")[0].children[0];
    img1 = document.getElementsByClassName("slider")[0].children[1];
    img2 = document.getElementsByClassName("slider")[0].children[2];
    img3 = document.getElementsByClassName("slider")[0].children[3];
    img4 = document.getElementsByClassName("slider")[0].children[4];
    totImg = [img0, img1, img2, img3, img4];

    radio0 = document.getElementById("0");
    radio1 = document.getElementById("1");
    radio2 = document.getElementById("2");
    radio3 = document.getElementById("3");
    radio4 = document.getElementById("4");
    totRadio = [radio0, radio1, radio2, radio3, radio4];

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

    searchBox = document.getElementsByClassName("searchBox")[0];
    headerMenu = document.getElementsByClassName("header-menu")[0];
    cover = document.getElementsByClassName("cover")[0];
    searchForm = document.getElementsByClassName("search-form")[0];
    body = document.body;
    indexBody = document.getElementsByClassName("index-body")[0];

    var bodyHeight = body.offsetHeight;
    cover.style.height = `${bodyHeight}px`;

    // Math.max(
    //   body.scrollHeight,
    //   body.offsetHeight
    //   html.clientHeight,
    //   html.scrollHeight,
    //   html.offsetHeight
    // );

    totalIndex = 0;
    iter = 34;
    sliderCounter = 1;
    count50 = 1;
    isSelect1 = false;
    isSelect2 = false;
    isDisplaySearchBoxRun = false;
    isShowShop1 = false;
    isShowShop2 = false;
}

function slider() {
    if (isSelect2) {
        iter = 10;
        divid = iter;
        m = 1;
    } else {
        iter = 34;
        divid = iter;
        m = 1;
    }

    let imgIndex0 = totalIndex;

    for (let index = 0; index <= 4; index++) {
        totImg[imgIndex0].style.zIndex = `${zIndex[index]}`;

        if (imgIndex0 == 4) {
            imgIndex0 = 0;
        } else {
            imgIndex0 = imgIndex0 + 1;
        }
    }

    counter = 1;

    effect = setInterval(moveSlides, 50);
}

function moveSlides() {
    let imgIndex = totalIndex;

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

            totImg[
                imgIndex
            ].style.transform = `scaleX(${currentDeltaScaleX}) scaleY(${currentDeltaScaleY})`;

            totImg[imgIndex].style.top = `${currentDeltaTop}%`;

            totImg[imgIndex].style.right = `${currentDeltaRight}%`;

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
                totalIndex = totalIndex - 1;
            }
        }

        runEffect2();
    }
}

function runEffect2() {
    if (isSelect1) {

        clearInterval(effect);
        effect = null;

        moveSelectSlide(num1);

    } else if (isSelect2) {

        if (count50 == iteration) {

            clearInterval(effect);
            effect = null;

            clearTimeout(effect2);
            effect2 = null;

            effect2 = setTimeout(slider, 3200);

            count50 = 1;
            isSelect2 = false;

            if (totalIndex == 0) {
                totRadio[totalIndex].checked = "false";
                totRadio[4].checked = "true";

            } else {
                totRadio[totalIndex].checked = "false";
                totRadio[totalIndex - 1].checked = "true";
            }
        } else {
            // effect2 = setInterval(slider, 0);
            let imgIndex0 = totalIndex;

            for (let index = 0; index <= 4; index++) {
                totImg[imgIndex0].style.zIndex = `${zIndex[index]}`;

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
        effect2 = setTimeout(slider, 3200);

        if (totalIndex == 0) {
            totRadio[totalIndex].checked = "false";
            totRadio[4].checked = "true";
        } else {
            totRadio[totalIndex].checked = "false";
            totRadio[totalIndex - 1].checked = "true";
        }
    }
}

function selectSlide(number) {
    clearTimeout(effect2);
    clearInterval(effect);

    effect2 = null;
    effect = null;

    isSelect2 = false;
    isSelect1 = true;
    iter = iter - (counter - 1);

    if (iter != 0) {
        m = iter / 3;
        iter = 3;
    }

    counter = 1;
    num1 = number;

    effect = setInterval(moveSlides, 50);
}

function moveSelectSlide(num) {
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
                effect2 = setTimeout(slider, 0);
                return;

            } else {
                clearTimeout(effect2);
                effect2 = null;
                isSelect2 = false;
                setTimeout(slider, 4000);
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

displaySearchBox = () => {
    isDisplaySearchBoxRun = true;

    const searchSVG = document.getElementById("searchSVG");
    const exitSVG = document.getElementById("exitSVG");

    if (searchBox.style.display == "" || searchBox.style.display == "none") {
        searchBox.style.display = "block";
        cover.style.visibility = "visible";
        cover.style.opacity = "1";
        searchSVG.style.display = "none";
        exitSVG.style.display = "inline-block";
        setTimeout(() => {
            searchBox.style.opacity = "1";
        }, 0);
    } else {
        searchBox.style.opacity = "0";
        searchBox.style.display = "none";
        cover.style.opacity = "0";
        cover.style.visibility = "hidden";
        searchSVG.style.display = "inline-block";
        exitSVG.style.display = "none";
    }
};

document.addEventListener(
    "click",
    (event) => {
        if (isDisplaySearchBoxRun) {
            isDisplaySearchBoxRun = false;
            return;
        }

        const rect = searchBox.getBoundingClientRect();
        const y = rect.top;
        const my = event.clientY;
        const diff = my - y;

        if (diff < 0 || diff > 160) {
            if (searchBox.style.opacity == "1") {
                searchBox.style.opacity = "0";
                searchBox.style.display = "none";
                cover.style.opacity = "0";
                cover.style.visibility = "hidden";
                searchSVG.style.display = "inline-block";
                exitSVG.style.display = "none";
            } else {
                return;
            }
        } else {
            return;
        }
    },
    false
);

showSubMenu = (thisTag) => {
    const thisItem = thisTag.parentElement;
    const itemChilds = thisItem.children;
    itemChilds[1].style.visibility = "visible";
    itemChilds[2].style.visibility = "visible";

    itemChilds[1].style.opacity = "1";
    itemChilds[1].style.top = "71px";

    itemChilds[2].style.opacity = "1";
    itemChilds[2].style.top = "86px";
};

hiddenSubMenu = (thisTag, event) => {
    const thisItem = thisTag.parentElement;
    const itemChilds = thisItem.children;

    var rect = itemChilds[2].getBoundingClientRect();
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

    itemChilds[1].style.opacity = "0";
    itemChilds[1].style.top = "61px";

    itemChilds[2].style.opacity = "0";
    itemChilds[2].style.top = "76px";

    itemChilds[1].style.visibility = "hidden";
    itemChilds[2].style.visibility = "hidden";
};

function overFigure(num) {
    const viewMore = document.getElementsByClassName("view-more-container")[num];
    const figureTag = document.getElementsByClassName("link1")[num].children[0];

    figureTag.style.backgroundColor = "rgba(33,33,33,0.3)";
    viewMore.style.opacity = "1";
    viewMore.style.top = "47%";
}

outFigure = (num) => {
    const viewMore = document.getElementsByClassName("view-more-container")[num];
    const figureTag = document.getElementsByClassName("link1")[num].children[0];

    figureTag.style.backgroundColor = "#f0f0f000";
    viewMore.style.opacity = "0";
    viewMore.style.top = "48%";
};

showNav = (num) => {
    if (openNavBar[num]) {
        document.getElementsByClassName(`item${num}`)[0].style.height = "36px";
        openNavBar[num] = false;
    } else {
        document.getElementsByClassName(`item${num}`)[0].style.height = "144px";
        openNavBar[num] = true;
    }
};

showShop = (number2, thisTag) => {
    isShowShop1 = true;
    isShowShop2 = true;

    var { flexContainer, prodctSection, shops } = Object;
    var FlexContainerLeft = [];

    var shop = thisTag.parentElement;

    if (shop.className == "shop-list-item l-p-c-shop") {
        shops = document.getElementsByClassName("l-p-c-shop");
        flexContainer = document.getElementsByClassName("l-p-c-container");
        prodctSection = document.getElementsByClassName(
            "last-products-container"
        )[0];
        FlexContainerLeft = lastFlexContainerLeft;
    }

    if (shop.className == "shop-list-item p-p-c-shop") {
        shops = document.getElementsByClassName("p-p-c-shop");
        flexContainer = document.getElementsByClassName("p-p-c-container");
        prodctSection = document.getElementsByClassName(
            "popular-products-container"
        )[0];
        FlexContainerLeft = popularFlexContainerLeft;
    }

    prodctSection.children[0].style.opacity = "1";
    prodctSection.children[1].style.opacity = "1";

    for (let index = 0; index <= shops.length - 1; index++) {
        if (index == number2) {
            shops[index].children[0].style.color = "rgb(240, 122, 75)";
            shops[index].style.boxShadow = " 0px 2px rgb(240, 122, 75) ";
            flexContainer[index].style.display = "inline-flex";

            var movingContainer = flexContainer[index].children;
            var moveLimit = (movingContainer.length - 1) * 100;

            if (FlexContainerLeft[index] == moveLimit) {
                prodctSection.children[0].style.opacity = "0.5";
            }

            if (FlexContainerLeft[index] == 0) {
                prodctSection.children[1].style.opacity = "0.5";
            }

            setTimeout(() => {
                flexContainer[index].style.opacity = "1";
            }, 0);
        } else {
            flexContainer[index].style.display = "none";
            flexContainer[index].style.opacity = "0";
            shops[index].children[0].style.color = "#1d2547";
            shops[index].style.boxShadow = " 0px 2px #1d2547 ";
        }
    }
};

var popularFlexContainerLeft = [0, 0, 0, 0, 0];
var lastFlexContainerLeft = [0, 0, 0, 0, 0];

moveRight = (rightNum) => {
    var { flexContainer, prodctSection } = Object;
    var FlexContainerLeft = [];

    if (rightNum == 1) {
        flexContainer = document.getElementsByClassName("l-p-c-container");
        prodctSection = document.getElementsByClassName(
            "last-products-container"
        )[0];
        FlexContainerLeft = lastFlexContainerLeft;
    }

    if (rightNum == 2) {
        flexContainer = document.getElementsByClassName("p-p-c-container");
        prodctSection = document.getElementsByClassName(
            "popular-products-container"
        )[0];
        FlexContainerLeft = popularFlexContainerLeft;
    }

    for (let index = 0; index <= flexContainer.length - 1; index++) {
        if (
            flexContainer[index].style.display == "" ||
            flexContainer[index].style.display == "inline-flex"
        ) {
            movingContainer = flexContainer[index].children;

            var moveLimit = (movingContainer.length - 1) * 100;

            if (FlexContainerLeft[index] == moveLimit) return;

            FlexContainerLeft[index] += 100;
            flexContainer[index].style.left = `${FlexContainerLeft[index]}%`;

            prodctSection.children[1].style.opacity = "1";

            if (FlexContainerLeft[index] == moveLimit) {
                prodctSection.children[0].style.opacity = "0.5";
            }
        }
    }
};

moveLeft = (leftNum) => {
    var { flexContainer, prodctSection } = Object;
    var FlexContainerLeft = [];

    if (leftNum == 1) {
        flexContainer = document.getElementsByClassName("l-p-c-container");
        prodctSection = document.getElementsByClassName(
            "last-products-container"
        )[0];
        FlexContainerLeft = lastFlexContainerLeft;
    }

    if (leftNum == 2) {
        flexContainer = document.getElementsByClassName("p-p-c-container");
        prodctSection = document.getElementsByClassName(
            "popular-products-container"
        )[0];
        FlexContainerLeft = popularFlexContainerLeft;
    }

    for (let index = 0; index <= flexContainer.length - 1; index++) {
        if (
            flexContainer[index].style.display == "" ||
            flexContainer[index].style.display == "inline-flex"
        ) {
            if (FlexContainerLeft[index] == 0) return;

            FlexContainerLeft[index] -= 100;
            flexContainer[index].style.left = `${FlexContainerLeft[index]}%`;

            prodctSection.children[0].style.opacity = "1";

            if (FlexContainerLeft[index] == 0) {
                prodctSection.children[1].style.opacity = "0.5";
            }
        }
    }
};

var lFlexContainer = document.querySelectorAll(".l-p-c-container");
var pFlexContainer = document.querySelectorAll(".p-p-c-container");
var footerTop = document.querySelector(".footer-top");
var headerSection = document.querySelector(".header-section");
var headerTitle = document.querySelector(".header-title");
var lMainHeader = document.querySelector(".l-p-c-header");
var pMainHeader = document.querySelector(".p-p-c-header");

config1 = { threshold: [0.15] };
observer1 = new IntersectionObserver((entries1) => {
    var items, item0, item1, item2, item3;
    var it;

    if (isShowShop1) {
        isShowShop1 = false;
        return;
    }

    entries1.forEach((entry) => {
        if (entry.isIntersecting) {
            // if (entry.boundingClientRect.top < 0) return;
            if (entry.target.className == "flex-container l-p-c-container") {
                items = document.getElementsByClassName("l-p-c-item")[0];
                item0 = document.getElementsByClassName("item0-l");
                item1 = document.getElementsByClassName("item1-l");
                item2 = document.getElementsByClassName("item2-l");
                it = 9;
            }

            if (entry.target.className == "flex-container p-p-c-container") {
                items = document.getElementsByClassName("p-p-c-item")[0];
                item0 = document.getElementsByClassName("item0-p");
                item1 = document.getElementsByClassName("item1-p");
                item2 = document.getElementsByClassName("item2-p");
                it = 9;
            }

            if (entry.target.className == "footer-top") {
                items = document.getElementsByClassName("footer-item-container")[0];
                item0 = document.getElementsByClassName("item0-footer");
                item1 = document.getElementsByClassName("item1-footer");
                item2 = document.getElementsByClassName("item2-footer");
                item3 = document.getElementsByClassName("item3-footer");
                it = 0;
            }

            if (items.style.opacity == "" || items.style.opacity == "0") {
                setTimeout(() => {
                    let i0 = 0;
                    while (i0 <= it) {
                        item0[i0].style.opacity = "1";
                        item0[i0].style.top = "0%";
                        i0++;
                    }
                }, 0);

                setTimeout(() => {
                    let i1 = 0;
                    while (i1 <= it) {
                        item1[i1].style.opacity = "1";
                        item1[i1].style.top = "0%";
                        i1++;
                    }
                }, 250);

                setTimeout(() => {
                    let i2 = 0;
                    while (i2 <= it) {
                        item2[i2].style.opacity = "1";
                        item2[i2].style.top = "0%";
                        i2++;
                    }
                }, 500);

                if (entry.target.className == "footer-top") {
                    setTimeout(() => {
                        let i3 = 0;
                        while (i3 <= it) {
                            item3[i3].style.opacity = "1";
                            item3[i3].style.top = "0%";
                            i3++;
                        }
                    }, 750);
                }
            }
        }
    });
}, config1);

config2 = { threshold: [0] };
observer2 = new IntersectionObserver((entries2) => {
    var items;
    var it;

    if (isShowShop2) {
        isShowShop2 = false;
        return;
    }

    entries2.forEach((entry) => {
        if (!entry.isIntersecting) {
            if (entry.boundingClientRect.top < 0) return;

            if (entry.target.className == "flex-container l-p-c-container") {
                items = document.getElementsByClassName("l-p-c-item");
                it = 29;
                per = 35;
            }

            if (entry.target.className == "flex-container p-p-c-container") {
                items = document.getElementsByClassName("p-p-c-item");
                it = 29;
                per = 35;
            }

            if (entry.target.className == "footer-top") {
                items = document.getElementsByClassName("footer-item-container");
                it = 3;
                per = 55;
            }

            if (items[0].style.opacity == "0") return;

            if (items[0].style.opacity == "1") {
                let k = 0;
                while (k <= it) {
                    items[k].style.opacity = "0";
                    items[k].style.top = `${per}%`;
                    k++;
                }
            }
        }
    });
}, config2);

headerConfig1 = { threshold: [1] };
observer3 = new IntersectionObserver((headerEntries1) => {
    var headerContainr;

    headerEntries1.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.boundingClientRect.top < 0) return;

            if (entry.target.className == "main-header l-p-c-header") {
                headerContainr = document.getElementsByClassName("header-container")[0];
            }

            if (entry.target.className == "main-header p-p-c-header") {
                headerContainr = document.getElementsByClassName("header-container")[1];
            }

            if (
                headerContainr.style.opacity == "" ||
                headerContainr.style.opacity == "0"
            ) {
                headerContainr.style.opacity = "1";
                headerContainr.style.top = "0%";
            }
        }
    });
}, headerConfig1);

headerConfig2 = { threshold: [0] };
observer4 = new IntersectionObserver((headerEntries2) => {
    var headerContainr;

    headerEntries2.forEach((entry) => {
        if (!entry.isIntersecting) {
            if (entry.boundingClientRect.top < 0) return;

            if (entry.target.className == "main-header l-p-c-header") {
                headerContainr = document.getElementsByClassName("header-container")[0];
            }

            if (entry.target.className == "main-header p-p-c-header") {
                headerContainr = document.getElementsByClassName("header-container")[1];
            }

            if (headerContainr.style.opacity == "1") {
                headerContainr.style.opacity = "0";
                headerContainr.style.top = "30%";
            }
        }
    });
}, headerConfig2);

menuConfig1 = { threshold: [1] };
observer5 = new IntersectionObserver((menuEntries1) => {
    menuEntries1.forEach((entry) => {
        if (!entry.isIntersecting) {
            headerSection.style.position = "fixed";
            headerSection.style.top = "0%";
            bodyHeight = body.offsetHeight;
            cover.style.height = `${bodyHeight}px`;
            indexBody.style.top = "86px";
        }
    });
}, menuConfig1);

menuConfig2 = { threshold: [0] };
observer6 = new IntersectionObserver((menuEntries2) => {
    menuEntries2.forEach((entry) => {
        if (entry.isIntersecting) {
            headerSection.style.position = "relative";
            headerSection.style.top = "0%";
            indexBody.style.top = "0px";
        }
    });
}, menuConfig2);

lFlexContainer.forEach((container) => {
    observer1.observe(container);
    observer2.observe(container);
});

pFlexContainer.forEach((container) => {
    observer1.observe(container);
    observer2.observe(container);
});

observer3.observe(lMainHeader);
observer4.observe(lMainHeader);

observer3.observe(pMainHeader);
observer4.observe(pMainHeader);

observer1.observe(footerTop);
observer2.observe(footerTop);

observer5.observe(headerSection);
observer6.observe(headerTitle);