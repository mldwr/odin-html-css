export function loadAbout() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <section id="about" class="container">
      <h2>Our Story</h2>
      <p>Luigi's Trattoria has been serving authentic Italian cuisine for over 20 years.</p>
      <p>Founded by Luigi Bianchi in 1998, our restaurant has been a staple in the community for generations.</p>
    </section>

    <section id="contact" class="container">
      <h2>Contact</h2>
      <p>Phone: (555) 019-2834</p>
      <p>Address: 123 Main St, Anytown, USA</p>
      <p>Open Tuesday–Sunday from 17:00.</p>
    </section>
  `;
}