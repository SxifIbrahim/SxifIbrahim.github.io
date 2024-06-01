// Set onclick event for the 'next' button
document.getElementById('next').onclick = function() {
  // Select all elements with class 'item'
  let lists = document.querySelectorAll('.item');
  // Append the first item to the end of the 'slide' element
  document.getElementById('slide').appendChild(lists[0]);
}

// Set onclick event for the 'prev' button
document.getElementById('prev').onclick = function() {
  // Select all elements with class 'item'
  let lists = document.querySelectorAll('.item');
  // Prepend the last item to the beginning of the 'slide' element
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Select the navigation header
let nav = document.querySelector('header');

// Add scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the vertical scroll position
  let value = window.scrollY;
  // Move the navigation header based on the scroll position
  nav.style.top = value * 0.5 + 'px';
})

// Select all 'div' elements inside 'li' elements within the timeline
const elH = document.querySelectorAll(".timeline li > div");

// Add load event listener to the window
window.addEventListener("load", init);

// Function to initialize the timeline heights
function init() {
  // Set equal heights for the selected elements
  setEqualHeights(elH);
}

// Function to set equal heights for elements
function setEqualHeights(el) {
  let counter = 0;
  // Loop through each element to find the maximum height
  for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;
      if (counter < singleHeight) {
          counter = singleHeight;
      }
  }
  // Set each element's height to the maximum height found
  for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
  }
}