const coll = document.querySelectorAll(".collapsible");

coll.forEach((item) => {
  item.addEventListener("click", function () {
    // Toggle the 'content-expanded' class
    this.classList.toggle("content--expanded");

    // Get the <img> element inside the clicked .collapsible
    const iconImg = this.querySelector('.collapsible-icon');

    // Toggle the src attribute based on the 'content--expanded' class
    if (this.classList.contains("content--expanded")) {
      // Display minus icon
      iconImg.src = "./assets/images/icon-minus.svg";
    } else {
      // Display plus icon
      iconImg.src = "./assets/images/icon-plus.svg";
    }
  });
});

