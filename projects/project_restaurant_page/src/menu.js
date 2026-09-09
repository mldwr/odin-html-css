export function loadMenu() {
  const content = document.getElementById("content");

  const innerHTML = `
      <section id="menu" class="container">
        <h2>Popular Dishes</h2>

        <div class="grid">
          <article class="card-primary">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3>Margherita Pizza</h3>
              <mark>$14</mark>
            </div>
            <p>Fresh San Marzano tomatoes, mozzarella di bufala, and basil.</p>
          </article>

          <article class="card-primary">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3>Rigatoni Carbonara</h3>
              <mark>$18</mark>
            </div>
            <p>Crispy guanciale, egg yolk, pecorino romano, and black pepper.</p>
          </article>

          <article class="card-primary">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3>Tiramisu</h3>
              <mark>$9</mark>
            </div>
            <p>Traditional espresso-soaked ladyfingers with mascarpone cream.</p>
          </article>
        </div>
      </section>
  `;

  content.innerHTML = innerHTML;
}