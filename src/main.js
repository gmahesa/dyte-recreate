// Get all the clickable elements
const clickableElements = document.querySelectorAll(".nav-links");

// Add a click event listener to each clickable element
clickableElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    // Get the target element from the data-target attribute
    const targetSelector = event.currentTarget.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);

    // Toggle the hidden class on the target element
    targetElement.classList.toggle("hidden");
  });
});
