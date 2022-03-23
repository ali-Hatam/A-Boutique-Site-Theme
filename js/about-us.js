let { num1 } = new Number();
let isSelect2;
let isSelect1;
let isShowShop1;
let isShowShop2;

let isDisplaySearchBoxRun = false;

const searchBox = document.getElementsByClassName("searchBox")[0];
const headerMenu = document.getElementsByClassName("header-menu")[0];
const cover = document.getElementsByClassName("cover")[0];
const searchForm = document.getElementsByClassName("search-form")[0];
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

var footerTop = document.querySelector(".footer-top");
var headerSection = document.querySelector(".header-section");
var headerTitle = document.querySelector(".header-title");
// var lMainHeader = document.querySelector(".l-p-c-header");
// var pMainHeader = document.querySelector(".p-p-c-header");

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
  let it;

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

// headerConfig1 = { threshold: [1] };
// observer3 = new IntersectionObserver((headerEntries1) => {
//   var headerContainr;

//   headerEntries1.forEach((entry) => {
//     if (entry.isIntersecting) {
//       if (entry.boundingClientRect.top < 0) return;

//       if (entry.target.className == "main-header l-p-c-header") {
//         headerContainr = document.getElementsByClassName("header-container")[0];
//       }

//       if (entry.target.className == "main-header p-p-c-header") {
//         headerContainr = document.getElementsByClassName("header-container")[1];
//       }

//       if (
//         headerContainr.style.opacity == "" ||
//         headerContainr.style.opacity == "0"
//       ) {
//         headerContainr.style.opacity = "1";
//         headerContainr.style.top = "0%";
//       }
//     }
//   });
// }, headerConfig1);

// headerConfig2 = { threshold: [0] };
// observer4 = new IntersectionObserver((headerEntries2) => {
//   var headerContainr;

//   headerEntries2.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       if (entry.boundingClientRect.top < 0) return;

//       if (entry.target.className == "main-header l-p-c-header") {
//         headerContainr = document.getElementsByClassName("header-container")[0];
//       }

//       if (entry.target.className == "main-header p-p-c-header") {
//         headerContainr = document.getElementsByClassName("header-container")[1];
//       }

//       if (headerContainr.style.opacity == "1") {
//         headerContainr.style.opacity = "0";
//         headerContainr.style.top = "30%";
//       }
//     }
//   });
// }, headerConfig2);
var slide = document.getElementsByClassName("slide")[0];
var mainText = document.getElementsByClassName("main-text")[0];

menuConfig1 = { threshold: [1] };
observer5 = new IntersectionObserver((menuEntries1) => {
  menuEntries1.forEach((entry) => {
    if (!entry.isIntersecting) {
      headerSection.style.position = "fixed";
      headerSection.style.top = "0%";
      slide.style.top = "86px";
      mainText.style.top = `${-120 + 86}px`;

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
      headerSection.style.top = "0%";
      slide.style.top = "0px";
      mainText.style.top = `-120px`;
    }
  });
}, menuConfig2);

// observer3.observe(lMainHeader);
// observer4.observe(lMainHeader);

// observer3.observe(pMainHeader);
// observer4.observe(pMainHeader);

observer1.observe(footerTop);
observer2.observe(footerTop);

observer5.observe(headerSection);
observer6.observe(headerTitle);
