document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".nav-menu");
  if (!navMenu) return;

  const navBackground = navMenu.querySelector(".nav-background");
  const navList = navMenu.querySelector("ul");
  const navItems = navMenu.querySelectorAll("li");

  let activeItem = navMenu.querySelector("li.active");

  function updateNav(targetItem) {
    if (!targetItem || !navBackground) return;

    const targetWidth = targetItem.offsetLeft + targetItem.offsetWidth;
    navBackground.style.width = `${targetWidth}px`;

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      if (item.offsetLeft + item.offsetWidth / 2 < targetWidth) {
        link.classList.add("text-white");
      } else {
        link.classList.remove("text-white");
      }
    });
  }

  updateNav(activeItem);

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      updateNav(item);
    });
  });

  navList.addEventListener("mouseleave", () => {
    updateNav(activeItem);
  });

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const link = item.querySelector("a");
      if (
        link &&
        (link.getAttribute("href") === "#" || !link.getAttribute("href"))
      ) {
        e.preventDefault();
        if (activeItem) {
          activeItem.classList.remove("active");
        }
        item.classList.add("active");
        activeItem = item;
        updateNav(activeItem);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("nav-open");
      hamburger.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox" });
  }
});
