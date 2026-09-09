// index.js
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadBook } from "./book.js";
import { loadAbout } from "./about.js";
import "./style.css";

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  loadHome();
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  loadMenu();
});

const bookBtn = document.getElementById("book-btn");
bookBtn.addEventListener("click", () => {
  loadBook();
});

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
  loadAbout();
});


const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});


//loadHome();