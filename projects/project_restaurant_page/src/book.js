export function loadBook() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <dialog id="modal-lg" class="modal-lg">
        <article>
          <button class="modal-close" aria-label="Close"
            onclick="document.getElementById('modal-lg').close()">&times;</button>
          <h3>Reserve a Table</h3>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your name">

            <label for="guests">Number of Guests</label>
            <input type="number" id="guests" value="2">

            <!-- <button type="submit">Book Table</button> -->
            <button onclick="document.getElementById('my-modal').showModal()">Book Table</button>

          </form>
        </article>
      </dialog>


      <dialog id="my-modal">
        <article>
          <button class="modal-close" aria-label="Close"
            onclick="document.getElementById('my-modal').close()">&times;</button>
          <h3>Confirm Reservation</h3>
          <p>Your reservation is confirmed.</p>
          <footer>
            <button class="btn btn-primary"
              onclick="document.getElementById('my-modal').close(); document.getElementById('modal-lg').close()">Close</button>
          </footer>
        </article>
      </dialog>
  `;
}