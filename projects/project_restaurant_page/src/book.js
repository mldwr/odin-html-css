export function loadBook() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <section class="container" style="max-width: 600px; padding: 2rem 1rem;">
      <h2>Reserve a Table</h2>
      <form id="booking-form">
        <label for="name">Name</label>
        <input type="text" id="name" value="George" placeholder="Your name" required>
        <label for="guests">Number of Guests</label>
        <input type="number" id="guests" value="2" min="1" max="10" required>
        <button type="submit" class="btn-primary">Confirm Booking</button>
      </form>
    </section>


    <!-- Success Modal -->
    <dialog id="confirm-modal">
      <article>
        <h3>Reservation Confirmed!</h3>
        <p>Thank you! We look forward to seeing you.</p>
        <footer>
          <button id="close-modal-btn" class="btn-secondary">Close</button>
          <button id="modal-ok-btn" class="btn-primary">Great!</button>
        </footer>
      </article>
    </dialog>
  `;

  setupBookingEvents();
}

function setupBookingEvents() {
  const form = document.getElementById("booking-form");
  const modal = document.getElementById("confirm-modal");
  const modalOkBtn = document.getElementById("modal-ok-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");

  function openModal() { modal.showModal(); }
  function closeModal() { modal.close(); }

  // 1. Open modal when form is submitted successfully
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    openModal();
  });

  // 2. Close modal when clicking the "Great!" button
  modalOkBtn.addEventListener("click", closeModal);

  // 3. Close modal when clicking the close icon (X)
  closeModalBtn.addEventListener("click", closeModal);
}