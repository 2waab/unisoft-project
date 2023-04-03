let menuIconAside = document.querySelector(".menuIcon");
let menuIconHead = document.querySelector(".menuIcon-haed");
let asideSection = document.querySelector("aside");
let header = document.querySelector(".header");
let headerFirst = document.querySelector(".first");
let userInfo = document.querySelector(".content-of-page");
let links = document.querySelectorAll(".links ul li");

menuIconAside.addEventListener("click", () => {
    menuIconAside.classList.add("close");
    asideSection.classList.add("close");
    header.classList.add("close");
    headerFirst.classList.add("close");
    userInfo.classList.add("close");
});

menuIconHead.addEventListener("click", () => {
    menuIconAside.classList.remove("close");
    asideSection.classList.remove("close");
    header.classList.remove("close");
    headerFirst.classList.remove("close");
    userInfo.classList.remove("close");
});

links.forEach((li) => {
    li.addEventListener("click", () => {
        links.forEach((link) => {
            link.classList.remove("active");
            li.classList.add("active");
        });
    });
});
