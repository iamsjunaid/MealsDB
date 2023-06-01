const addNewReservationsPopUp = () => {
  const modal = document.createElement('div');
  modal.classList.add('new-modal');

  const content = document.createElement('div');
  content.classList.add('new-popup-content');
  content.innerHTML = `
        <h2>Add New Reservation</h2>
        <form id="new-reservation-form">
          <label for="reservation-name">Name:</label>
          <input type="text" id="reservation-name" required>
  
          <label for="reservation-date">Date:</label>
          <input type="date" id="reservation-date" required>
  
          <label for="reservation-time">Time:</label>
          <input type="time" id="reservation-time" required>
  
          <label for="reservation-guests">Number of Guests:</label>
          <input type="number" id="reservation-guests" required>
  
          <button type="submit">Reserve</button>
          <button type="button" class="reservation-close-btn">Close</button>
        </form>
      `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  const closeButton = document.querySelector('.reservation-close-btn');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  const reservationForm = content.querySelector('#new-reservation-form');
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    document.body.removeChild(modal);
  });
};

export default addNewReservationsPopUp;
