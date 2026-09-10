import { loadBook } from "./book.js";

export function loadHome() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const header = document.createElement("header");
  header.className = "container";
  header.style.textAlign = "center";
  header.style.padding = "4rem 1rem 2rem";

  const h1 = document.createElement("h1");
  h1.textContent = "Luigi's Trattoria";
  
  const p = document.createElement("p");
  p.className = "lead";
  p.textContent = "Authentic Italian Dining in the Heart of the City";

  const button = document.createElement("button");
  button.className = "btn-primary";
  button.textContent = "Reserve Your Table";
  button.onclick = loadBook;

  header.appendChild(h1);
  header.appendChild(p);
  header.appendChild(button);
  
  content.appendChild(header);

  console.log('loadHome ', content);
}
