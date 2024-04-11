// on button click, close the modal with "side-panel" attribute

const { animate, timeline } = require("motion");

// on button click, open/close the modal with "side-panel" attribute

const filterButton = document.querySelector("#filter-button");
const sidePanel = document.querySelector('#side-panel');
const sideBar = document.querySelector('#sidebar');

const openPanelSequence = [
  [sidePanel, { translateX: "0%", opacity: 1 }, { duration: 0.2, easing: "ease-in-out" }],
  [sideBar, {width: "25rem"}, {at: +0, duration: 0.2, easing: "ease-in-out"}],
  ['.filter_icon', { rotate: 0 }, {at: 0, duration: 0.1, easing: "ease-in-out" }],
]
const closePanelSequence = [
  [sidePanel, { translateX: "-100%", opacity: 0 }, { duration: 0.2, easing: "ease-in-out" }],
  [sideBar, {width: "4rem"}, {at: +0, duration: 0.2, easing: "ease-in-out"}],
  ['.filter_icon', { rotate: 180 }, {at: 0, duration: 0.1, easing: "ease-in-out" }],
]

filterButton.addEventListener("click", () => {
  if (sidePanel.classList.contains("open")) {
    // open the side panel
    timeline(closePanelSequence);
    sidePanel.classList.remove("open");
  } else {
    // close the side panel
    timeline(openPanelSequence);
    sidePanel.classList.add("open")
  };
});
