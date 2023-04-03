let menuIcon = document.querySelector(".menuIcon");
let asideSection = document.querySelector("aside");
let header = document.querySelector(".header");
let headerFirst = document.querySelector(".first");
let userInfo = document.querySelector(".content-of-page");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    asideSection.classList.toggle("open");
    header.classList.toggle("open");
    headerFirst.classList.toggle("open");
    userInfo.classList.toggle("open");
});
