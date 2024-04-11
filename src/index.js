// on button click, close the modal with "menu-panel" attribute

const { timeline } = require("motion");

// on button click, open/close the modal with "menu-panel" attribute

const openButton = document.querySelector("[panel=open]");
const closeButtons = [document.querySelector("[panel=close]"), document.querySelector("[background=close]")];
const displayPanel = document.querySelector('[display-panel]');
const menuPanel = document.querySelector('[menu-panel]');
const openSequence = [
  [menuPanel, { translateX: "101%" }, { at: 0, duration: 0 }],
  [displayPanel, {display: "block" }, {at: 0, duration: 0}],
  [displayPanel, {opacity: 0 }, { at: 0, duration: 0 }],
  [displayPanel, {opacity: 1 }, { at: 0.1, duration: 0.1, easing: "ease-out" }],
  [menuPanel, { translateX: "0%" }, { at: 0.1, duration: 0.1, easing: "ease-out" }],
]
const closeSequence = [
  [menuPanel, { translateX: "101%" }, { duration: 0.1, easing: "ease-out" }],
  [displayPanel, {opacity: 0 }, { at: 0, duration: 0.1, easing: "ease-out" }],
  [displayPanel, {display: "none" }, { }],
]

openButton.addEventListener("click", () => {
  if (menuPanel.classList.contains("open")) {
    // open the menu panel
    timeline(closeSequence);
    menuPanel.classList.remove("open");
  } else {
    // close the menu panel
    timeline(openSequence);
    menuPanel.classList.add("open")
  };
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", () => {
    if (menuPanel.classList.contains("open")) {
      // open the menu panel
      timeline(closeSequence);
      menuPanel.classList.remove("open");
    } else {
      // close the menu panel
      timeline(openSequence);
      menuPanel.classList.add("open")
    };
  });
});
