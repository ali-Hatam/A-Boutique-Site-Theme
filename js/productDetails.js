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

var magnifyNum = 0;
var colorNum = 0;
var sizeNum;
var isSizeSet = false;
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

moveMagnify = (num, thisTag) => {
  const movingMagnify = document.getElementsByClassName("moving-magnify")[0];
  const productStatesList = document.getElementsByClassName(
    "product-states-list"
  )[0];
  var previousImage = productStatesList.children[magnifyNum].children[0];
  var left = [0, 450, 900, 1350];

  previousImage.style.border = "solid 2px transparent";

  if (num == magnifyNum) return;

  if (num < magnifyNum) {
    var diff = magnifyNum - num;
    var dist = diff * 450;
    movingMagnify.style.left = `${left[magnifyNum] - dist}px`;
  }

  if (num > magnifyNum) {
    var diff = num - magnifyNum;
    var dist = diff * 450;
    movingMagnify.style.left = `${left[magnifyNum] + dist}px`;
  }
  magnifyNum = num;
  thisTag.style.border = "solid 2px #212121";
};

onFigure = (num, thisTag) => {
  const productStatesList = document.getElementsByClassName(
    "product-states-list"
  )[0];
  var currentFigure = productStatesList.children[magnifyNum].children[0];
  if (thisTag === currentFigure) return;
  thisTag.style.border = "solid 2px #a5a5a5";
};

outFigure = (num, thisTag) => {
  const productStatesList = document.getElementsByClassName(
    "product-states-list"
  )[0];
  var currentFigure = productStatesList.children[magnifyNum].children[0];
  if (thisTag === currentFigure) return;
  thisTag.style.border = "solid 2px transparent";
};

onColor = (thisTag) => {
  thisTag.style.border = "solid 2px #212121";
};

outColor = (thisTag, num) => {
  if (num == colorNum) return;
  thisTag.style.border = "solid 1px #dadada";
};

clickColor = (thisTag, num) => {
  var previousColor = thisTag.parentElement.children[colorNum];
  var color = thisTag.parentElement.parentElement.children[1];

  previousColor.style.border = "solid 1px #dadada";
  thisTag.style.border = "solid 2px #212121";

  if (num == 0) color.innerHTML = "مشکی";
  if (num == 1) color.innerHTML = "زرد";
  if (num == 2) color.innerHTML = "آبی";
  if (num == 3) color.innerHTML = "قرمز";

  colorNum = num;
};

onSize = (thisTag) => {
  thisTag.style.backgroundColor = "#696969";
  thisTag.style.color = "#ffffff";
};

outSize = (thisTag, num) => {
  if (num == sizeNum) return;
  thisTag.style.backgroundColor = "#ffffff";
  thisTag.style.color = "#3f3f3f";
};

clickSize = (thisTag, num) => {
  isSizeSet = true;

  if (sizeNum != undefined) {
    var previousSize = thisTag.parentElement.children[sizeNum];
    previousSize.style.backgroundColor = "#ffffff";
    previousSize.style.color = "#3f3f3f";
  }

  thisTag.style.backgroundColor = "#696969";
  thisTag.style.color = "#ffffff";

  sizeNum = num;
};

goToCart = (thisTag) => {
  if (!isSizeSet) {
    alert("لطفا سایز مورد نظر خود را انتخاب کنید.");
  } else {
    thisTag.setAttribute("href", "");
  }
};
var footerTop = document.querySelector(".footer-top");

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

observer1.observe(footerTop);
observer2.observe(footerTop);
