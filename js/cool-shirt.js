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

function overFigure(num) {
  var viewMore = document.getElementsByClassName("view-more-container")[num];
  var figureTag = document.getElementsByClassName("link1")[num].children[0];

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

hoverRadio = (thisTag) => {
  span1 = thisTag.children[0];
  span2 = span1.children[0];

  if (span2.style.opacity == "1") return;

  span2.style.opacity = "0.3";
};

unhoverRadio = (thisTag) => {
  span1 = thisTag.children[0];
  span2 = span1.children[0];

  if (span2.style.opacity == "1") return;

  span2.style.opacity = "0";
};

activeRadio = (thisTag, num) => {
  parent = thisTag.parentElement;
  childs = parent.children;
  for (let index = 1; index <= childs.length - 1; index++) {
    if (index == num) {
      childs[index].children[0].children[0].style.opacity = "1";
    } else {
      childs[index].children[0].children[0].style.opacity = "0";
    }
  }
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

  var subshops = document.getElementsByClassName("sub-shop-list-item");
  var productsContainer = document.getElementsByClassName("products-container");

  for (let index = 0; index <= subshops.length - 1; index++) {
    if (index == number2) {
      subshops[index].children[0].style.color = "rgb(240, 122, 75)";
      subshops[index].style.boxShadow = "0px 3px rgb(240 122 75)";
      productsContainer[index].style.display = "inline-flex";

      setTimeout(() => {
        productsContainer[index].style.opacity = "1";
      }, 0);
    } else {
      productsContainer[index].style.display = "none";
      productsContainer[index].style.opacity = "0";
      subshops[index].children[0].style.color = "#fff";
      subshops[index].style.boxShadow = "0px 3px #1d2547";
    }
  }
};

var navbarContainer = document.getElementsByClassName("navbar-container")[0];
var subShopContainer = document.getElementsByClassName("sub-shop-container")[0];
var bodyAndFooter = document.getElementsByClassName("body-and-footer")[0];
var bodyContainer = document.getElementsByClassName("body-container")[0];

var footerTop = document.querySelector(".footer-top");
var headerSection = document.querySelector(".header-section");
var headerTitle = document.querySelector(".header-title");
var subProductsContainer = document.querySelectorAll(".sub-products-container");
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
      if (entry.target.className == "sub-products-container row-1") {
        items = entry.target.children[0];
        item0 = document.getElementsByClassName("item0-row1");
        item1 = document.getElementsByClassName("item1-row1");
        item2 = document.getElementsByClassName("item2-row1");
        it = 3;
      }

      if (entry.target.className == "sub-products-container row-2") {
        items = entry.target.children[0];
        item0 = document.getElementsByClassName("item0-row2");
        item1 = document.getElementsByClassName("item1-row2");
        item2 = document.getElementsByClassName("item2-row2");
        it = 3;
      }

      if (entry.target.className == "sub-products-container row-3") {
        items = entry.target.children[0];
        item0 = document.getElementsByClassName("item0-row3");
        item1 = document.getElementsByClassName("item1-row3");
        item2 = document.getElementsByClassName("item2-row3");
        it = 3;
      }

      if (entry.target.className == "sub-products-container row-4") {
        items = entry.target.children[0];
        item0 = document.getElementsByClassName("item0-row4");
        item1 = document.getElementsByClassName("item1-row4");
        item2 = document.getElementsByClassName("item2-row4");
        it = 3;
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

      if (entry.target.className == "sub-products-container row-1") {
        items = document.getElementsByClassName("row1");
        it = 11;
        per = 200;
      }

      if (entry.target.className == "sub-products-container row-2") {
        items = document.getElementsByClassName("row2");
        it = 11;
        per = 200;
      }

      if (entry.target.className == "sub-products-container row-3") {
        items = document.getElementsByClassName("row3");
        it = 11;
        per = 200;
      }

      if (entry.target.className == "sub-products-container row-4") {
        items = document.getElementsByClassName("row4");
        it = 8;
        per = 200;
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
      subShopContainer.style.position = "fixed";
      navbarContainer.style.position = "fixed";
      bodyAndFooter.style.position = "relative";

      bodyAndFooter.style.top = `164px`;
      headerSection.style.top = "0%";
      subShopContainer.style.top = `86px`;
      navbarContainer.style.top = `164px`;
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
      subShopContainer.style.position = "relative";

      bodyAndFooter.style.top = "0px";
      headerSection.style.top = "0%";
      subShopContainer.style.top = `0px`;
      navbarContainer.style.top = `0px`;
    }
  });
}, menuConfig2);

footerConfig1 = { threshold: [0] };
observer7 = new IntersectionObserver((footer1) => {
  footer1.forEach((entry) => {
    if (entry.isIntersecting) {
      navbarContainer.style.visibility = "hidden";
      subShopContainer.style.visibility = "hidden";
    }
  });
}, footerConfig1);

footerConfig2 = { threshold: [0] };
observer8 = new IntersectionObserver((footer2) => {
  footer2.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbarContainer.style.visibility = "visible";
      subShopContainer.style.visibility = "visible";
    }
  });
}, footerConfig2);

subProductsContainer.forEach((container) => {
  observer1.observe(container);
  observer2.observe(container);
});

observer1.observe(footerTop);
observer2.observe(footerTop);

observer5.observe(headerSection);
observer6.observe(headerTitle);

observer7.observe(footer);
observer8.observe(footer);
// =====================================================================================================

// var lMainHeader = document.querySelector(".l-p-c-header");
// var pMainHeader = document.querySelector(".p-p-c-header");

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

// observer3.observe(lMainHeader);
// observer4.observe(lMainHeader);

// observer3.observe(pMainHeader);
// observer4.observe(pMainHeader);
