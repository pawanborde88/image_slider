const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const tablist = document.querySelector(".scrollable-tabs-container ul");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftarrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const leftArrowcontainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);

const rightArrowcontainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeallactiveclass = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeallactiveclass();
    tab.classList.add("active");
  });
});

rightArrow.addEventListener("click", () => {
  tablist.scrollLeft += 200;
  manageIcons();
});
leftarrow.addEventListener("click", () => {
  tablist.scrollLeft -= 200;
  manageIcons();
});

const manageIcons = () => {
  if (tablist.scrollLeft >= 20) {
    leftArrowcontainer.classList.add("active");
  } else {
    leftArrowcontainer.classList.remove("active");
  }
  let maxscrollvalue = tablist.scrollWidth - tablist.clientWidth - 20;
  console.log("scroll Width", tablist.scrollWidth);
  console.log("client Width", tablist.clientWidth);

  if (tablist.scrollLeft >= maxscrollvalue) {
    rightArrowcontainer.classList.remove("active");
  } else {
    rightArrowcontainer.classList.add("active");
  }
};
tablist.addEventListener("scroll", manageIcons);

let dragging = false;

const drag=(e)=>{
if(!dragging)
return
tablist.classList.add("dragging");
tablist.scrollLeft-=e.movementX

}
tablist.addEventListener("mousedown", () => {
  dragging = true;
});
tablist.addEventListener("mousedup", () => {
  dragging = false;
  tablist.classList.remove("dragging");
});
tablist.addEventListener("mousemove",drag)