// index.js
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadBook } from "./book.js";
import { loadAbout } from "./about.js";
import "./style.css";

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  setActiveTab(homeBtn);
  loadHome();
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  setActiveTab(menuBtn);
  loadMenu();
});

const bookBtn = document.getElementById("book-btn");
bookBtn.addEventListener("click", () => {
  setActiveTab(bookBtn);
  loadBook();
});

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
  setActiveTab(aboutBtn);
  loadAbout();
});


const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

function setActiveTab(button) {
  // Remove 'active' class from all nav buttons
  const buttons = document.querySelectorAll(".navbar-menu button");
  buttons.forEach((btn) => btn.classList.remove("btn-primary"));
  // Add 'active' class to the clicked button
  button.classList.add("btn-primary");
}

function onPageLoad() {
  setActiveTab(homeBtn);
  loadHome();
}

onPageLoad();