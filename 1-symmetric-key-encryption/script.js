const openDrawerButton = document.getElementById("all-lessons-btn");
const closeDrawerButton = document.getElementById("drawer-close-btn");
const drawer = document.getElementById("all-lessons-drawer");

// Open drawer
openDrawerButton.addEventListener("click", () => {
  drawer.classList.add("open");
});

// Close drawer
const closeDrawer = () => {
  drawer.classList.remove("open");
};

closeDrawerButton.addEventListener("click", closeDrawer);

// Close drawer when clicking outside
document.addEventListener("click", (event) => {
  if (!drawer.contains(event.target) && event.target !== openDrawerButton) {
    closeDrawer();
  }
});
