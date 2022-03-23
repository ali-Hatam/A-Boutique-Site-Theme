let { num1 } = new Number();
let isSelect2;
let isSelect1;

var isShowShop1 = false;
var isShowShop2 = false;

let isDisplaySearchBoxRun = false;

const searchBox = document.getElementsByClassName("searchBox")[0];
const headerMenu = document.getElementsByClassName("header-menu")[0];
const cover = document.getElementsByClassName("cover")[0];
const searchForm = document.getElementsByClassName("search-form")[0];
var save = document.getElementsByClassName("save");
var accoundShow = document.getElementsByClassName("accound-show");
var insertAddress = document.getElementsByClassName("insertAddress-body")[0];
var changePassword = document.getElementsByClassName("changePassword-body")[0];
var accountBody = document.getElementsByClassName("account-body")[0];
var myAddressBody = document.getElementsByClassName("myAddress-body")[0];

const body = document.body;

var bodyHeight = body.offsetHeight;
cover.style.height = `${bodyHeight}px`;

// Math.max(
//   body.scrollHeight,
//   body.offsetHeight
//   html.clientHeight,
//   html.scrollHeight,
//   html.offsetHeight
// );

// -------------------------------- Functions -------------------------------

displaySearchBox = () => {
    isDisplaySearchBoxRun = true;

    const searchSVG = document.getElementById("searchSVG");
    const exitSVG = document.getElementById("exitSVG");

    if (searchBox.style.display == "" || searchBox.style.display == "none") {
        searchBox.style.display = "block";

        bodyHeight = body.offsetHeight;

        cover.style.height = `${bodyHeight}px`;
        cover.style.zIndex = `100`;
        cover.style.visibility = "visible";
        cover.style.backgroundColor = "rgba(0,0,0,0.4)";

        searchSVG.style.display = "none";
        exitSVG.style.display = "inline-block";
        setTimeout(() => {
            searchBox.style.opacity = "1";
        }, 0);
    } else {
        searchBox.style.opacity = "0";
        searchBox.style.display = "none";

        cover.style.backgroundColor = "transparent";
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

                cover.style.backgroundColor = "transparent";
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

var accountHeight = [353, 0];
showAccount = (num) => {
    var faAngleDown = accoundShow[num].children[0].children[0];
    var faAngleUp = accoundShow[num].children[0].children[1];

    if (accountHeight[num] == 353) {
        accoundInfoBody[num].style.height = "0px";
        accountHeight[num] = 0;

        faAngleDown.style.display = "inline-block";
        faAngleUp.style.display = "none";
    } else if (accountHeight[num] == 0) {
        accoundInfoBody[num].style.height = "353px";
        accountHeight[num] = 353;

        faAngleDown.style.display = "none";
        faAngleUp.style.display = "inline-block";
    }
};

edit = (thisTag, num) => {
    var targetTag = thisTag.parentElement.children[0];

    targetTag.removeAttribute("disabled");
    targetTag.focus();
    var len = targetTag.value.length;
    targetTag.setSelectionRange(len, len);

    if (save[num].style.opacity != 1) {
        save[num].style.opacity = "1";
        save[num].setAttribute("href", "");

        var ev1 = new MouseEvent("mouseover");
        save[num].dispatchEvent(ev1);

        var ev2 = new MouseEvent("mouseout");
        save[num].dispatchEvent(ev2);

        save[num].addEventListener("mouseover", () => {
            save[num].style.backgroundColor = "#f07a4bad";
        });

        save[num].addEventListener("mouseout", () => {
            save[num].style.backgroundColor = "#f07a4b";
        });
    }
};

editCart = (thisTag) => {
    var targetTag1 = thisTag.parentElement.children[1];
    var targetTag2 = thisTag.parentElement.children[2];
    var targetTag3 = thisTag.parentElement.children[3];
    var targetTag4 = thisTag.parentElement.children[4];

    targetTag1.removeAttribute("disabled");
    targetTag2.removeAttribute("disabled");
    targetTag3.removeAttribute("disabled");
    targetTag4.removeAttribute("disabled");

    targetTag1.focus();

    var len = targetTag1.value.length;
    targetTag1.setSelectionRange(len, len);

    if (save[1].style.opacity != 1) {
        save[1].style.opacity = "1";
        save[1].setAttribute("href", "");

        var ev1 = new MouseEvent("mouseover");
        save[1].dispatchEvent(ev1);

        save[1].addEventListener("mouseover", () => {
            save[1].style.backgroundColor = "#f07a4bad";
        });

        var ev2 = new MouseEvent("mouseout");
        save[1].dispatchEvent(ev2);

        save[1].addEventListener("mouseout", () => {
            save[1].style.backgroundColor = "#f07a4b";
        });
    }
};

var bodyScroll;
showInsertAddress = () => {
    var activeInput =
        document.getElementsByClassName("cover-item")[0].children[1];
    var bodyCoor = body.getBoundingClientRect();
    var bodyY = bodyCoor.top;
    body.style.overflowY = "scroll";
    bodyScroll = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `${bodyY}px`;

    var windowHeight = window.innerHeight;

    cover.style.zIndex = `10000`;
    cover.style.height = `${windowHeight}px`;
    cover.style.position = `fixed`;
    cover.style.top = `0px`;

    cover.style.visibility = "visible";
    cover.style.backgroundColor = "rgba(0,0,0,0.6)";

    insertAddress.style.display = "block";

    setTimeout(() => {
        insertAddress.style.visibility = "visible";
        insertAddress.style.opacity = "1";
        insertAddress.style.top = "0px";
        setTimeout(() => {
            activeInput.focus();
        }, 50);
    }, 100);
};

showChangePassword = () => {
    var activeInput =
        document.getElementsByClassName("cover-item")[5].children[1];
    var bodyCoor = body.getBoundingClientRect();
    var bodyY = bodyCoor.top;
    body.style.overflowY = "scroll";
    bodyScroll = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `${bodyY}px`;

    var windowHeight = window.innerHeight;

    cover.style.zIndex = `10000`;
    cover.style.height = `${windowHeight}px`;
    cover.style.position = `fixed`;
    cover.style.top = `0px`;

    cover.style.visibility = "visible";
    cover.style.backgroundColor = "rgba(0,0,0,0.6)";

    changePassword.style.display = "block";

    setTimeout(() => {
        changePassword.style.visibility = "visible";
        changePassword.style.opacity = "1";
        changePassword.style.top = "50px";
        setTimeout(() => {
            activeInput.focus();
        }, 50);
    }, 100);
};

closeInsertAddress = () => {
    body.style.position = "relative";
    body.style.top = `0px`;

    cover.style.visibility = "hidden";
    cover.style.backgroundColor = "transparent";

    insertAddress.style.top = "-60px";
    insertAddress.style.opacity = "0";
    insertAddress.style.visibility = "hidden";

    window.scrollBy(0, bodyScroll);

    setTimeout(() => {
        cover.style.position = `absolute`;
        cover.style.top = `0px`;
        insertAddress.style.display = "none";
    }, 400);
};

closeChangePassword = () => {
    body.style.position = "relative";
    body.style.top = `0px`;

    cover.style.visibility = "hidden";
    cover.style.backgroundColor = "transparent";

    changePassword.style.top = "-60px";
    changePassword.style.opacity = "0";
    changePassword.style.visibility = "hidden";

    window.scrollBy(0, bodyScroll);

    setTimeout(() => {
        cover.style.position = `absolute`;
        cover.style.top = `0px`;
        changePassword.style.display = "none";
    }, 400);
};

var currentbody = 0;
showAccountBody = (num) => {
    if (num == currentbody) return;

    if (num == 0) {
        myAddressBody.style.display = "none";
        myAddressBody.style.opacity = "0";

        accountBody.style.display = "block";

        setTimeout(() => {
            accountBody.style.opacity = "1";
        }, 0);
    }

    if (num == 3) {
        accountBody.style.display = "none";
        accountBody.style.opacity = "0";

        myAddressBody.style.display = "block";

        setTimeout(() => {
            myAddressBody.style.opacity = "1";
        }, 0);
    }

    currentbody = num;
};

var navbarContainer = document.getElementsByClassName("account-navbar")[0];
var bodyContainer = document.getElementsByClassName("body-container")[0];
var accoundInfoBody = document.getElementsByClassName("accound-info-body");

var footerTop = document.querySelector(".footer-top");
var headerSection = document.querySelector(".header-section");
var headerTitle = document.querySelector(".header-title");
var footer = document.querySelector(".footer");

config1 = { threshold: [0.15] };
observer1 = new IntersectionObserver((entries1) => {
    var { items, item0, item1, item2, item3 } = Object;
    let it;

    if (isShowShop1) {
        isShowShop1 = false;
        return;
    }

    entries1.forEach((entry) => {
        if (entry.isIntersecting) {
            // if (entry.boundingClientRect.top < 0) return;

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
                        item0[i0].style.top = "0px";
                        i0++;
                    }
                }, 0);

                setTimeout(() => {
                    let i1 = 0;
                    while (i1 <= it) {
                        item1[i1].style.opacity = "1";
                        item1[i1].style.top = "0px";
                        i1++;
                    }
                }, 250);

                setTimeout(() => {
                    let i2 = 0;
                    while (i2 <= it) {
                        item2[i2].style.opacity = "1";
                        item2[i2].style.top = "0px";
                        i2++;
                    }
                }, 500);

                if (entry.target.className == "footer-top") {
                    setTimeout(() => {
                        let i3 = 0;
                        while (i3 <= it) {
                            item3[i3].style.opacity = "1";
                            item3[i3].style.top = "0px";
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
    var { items, item0, item1, item2 } = Object;
    let it;

    if (isShowShop2) {
        isShowShop2 = false;
        return;
    }

    entries2.forEach((entry) => {
        if (!entry.isIntersecting) {
            if (entry.boundingClientRect.top < 0) return;

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
                    items[k].style.top = `${per}px`;
                    k++;
                }
            }
        }
    });
}, config2);

menuConfig1 = { threshold: [1] };
observer5 = new IntersectionObserver((menuEntries1) => {
    menuEntries1.forEach((entry) => {
        if (!entry.isIntersecting) {
            var rect2 = navbarContainer.getBoundingClientRect();
            var top2 = rect2.top;

            headerSection.style.position = "fixed";
            navbarContainer.style.position = "fixed";

            headerSection.style.top = "0%";
            navbarContainer.style.top = `86px`;
            navbarContainer.style.right = "0px";

            bodyHeight = body.offsetHeight;
            cover.style.height = `${bodyHeight}px`;
        }
    });
}, menuConfig1);

menuConfig2 = { threshold: [0] };
observer6 = new IntersectionObserver((menuEntries2) => {
    menuEntries2.forEach((entry) => {
        if (entry.isIntersecting) {
            headerSection.style.position = "relative";
            navbarContainer.style.position = "relative";

            headerSection.style.top = "0%";
            navbarContainer.style.top = `0px`;
        }
    });
}, menuConfig2);

footerConfig1 = { threshold: [0] };
observer7 = new IntersectionObserver((footer1) => {
    footer1.forEach((entry) => {
        if (entry.isIntersecting) {
            navbarContainer.style.visibility = "hidden";
        }
    });
}, footerConfig1);

footerConfig2 = { threshold: [0] };
observer8 = new IntersectionObserver((footer2) => {
    footer2.forEach((entry) => {
        if (!entry.isIntersecting) {
            navbarContainer.style.visibility = "visible";
        }
    });
}, footerConfig2);

observer1.observe(footerTop);
observer2.observe(footerTop);

// observer5.observe(headerSection);
// observer6.observe(headerTitle);

// observer7.observe(footer);
// observer8.observe(footer);
// =====================================================================================================