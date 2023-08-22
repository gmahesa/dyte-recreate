// Get all the clickable elements
const OpenNav = document.querySelectorAll(".click-nav");

// Add a click event listener to each clickable element
OpenNav.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (window.innerWidth <= 640) {
      // Get the target element from the data-target attribute
      const targetSelector = event.currentTarget.getAttribute("data-target");
      const targetElement = document.querySelector(targetSelector);

      // Toggle the hidden class on the target element
      targetElement.classList.toggle("hidden");
    }
  });
});

// Get all the clickable elements
const OpenDropdown = document.querySelectorAll(".click-dropdown");

// Add a click event listener to each clickable element
OpenDropdown.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (window.innerWidth <= 640) {
      // Get the target element from the data-target attribute
      const targetSelector = event.currentTarget.getAttribute("data-target");
      const targetElement = document.querySelector(targetSelector);

      // Close any other open dropdowns
      OpenDropdown.forEach((otherElement) => {
        if (otherElement !== element) {
          const otherTargetSelector = otherElement.getAttribute("data-target");
          const otherTargetElement = document.querySelector(otherTargetSelector);
          otherTargetElement.classList.add("hidden");
        }
      });

      // Toggle the hidden class on the target element
      targetElement.classList.toggle("hidden");
    }
  });
});
