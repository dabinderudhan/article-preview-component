const shareBtn = document.querySelector(".section-content--profile-share");
const profile = document.querySelector(".section-content--profile");
const links = document.querySelector(".section-links");
const sharelinkBtn = document.querySelector(".section-links--share svg");
const triangle = document.querySelector(".triangle");

const x = window.matchMedia("(min-width: 1000px)");

shareBtn.addEventListener("click", function () {
  links.classList.toggle("show");
  profile.style.display = "none";

  if (x.matches) {
    triangle.classList.toggle("show-triangle");
    profile.style.display = "flex";
    shareBtn.classList.toggle("share-dark");
  }
});

sharelinkBtn.addEventListener("click", function () {
  links.classList.remove("show");
  profile.style.display = "flex";
});
