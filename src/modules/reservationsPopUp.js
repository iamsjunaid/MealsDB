let reservationsCounter = 0;
const reservations = [];

const addReservation = (name, startDate, endDate) => {
  reservations.push({ name, startDate, endDate });
  reservationsCounter += 1;
  const counterElement = document.getElementById('reservationsCounter');
  counterElement.textContent = reservationsCounter;
};

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

      <label for="start-date">Start Date:</label>
      <input type="date" id="start-date" required>

      <label for="end-date">End Date:</label>
      <input type="date" id="end-date" required>

      <button type="submit" class="reserve">Reserve</button>
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

    const nameInput = reservationForm.querySelector('#reservation-name');
    const startDateInput = reservationForm.querySelector('#start-date');
    const endDateInput = reservationForm.querySelector('#end-date');

    const name = nameInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (name && startDate && endDate) {
      addReservation(name, startDate, endDate);
      document.body.removeChild(modal);
    }
  });
};

const reservationsPopUp = (itemDetails) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const content = document.createElement('div');
  content.classList.add('popup-content');

  content.innerHTML = `
    <h2>${itemDetails.strMeal}</h2>
    <img class="popUp_image" src=${itemDetails.strMealThumb} alt="meal image">
    <p><strong>Description</strong> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione!</p>
    <p><strong>Reservations</strong></p>
    <div class="reservation-list-container">
      <li class="reservation-list"></li>
    </div>  
    Reservation Count: <span id="reservationsCounter">${reservationsCounter}</span><br> <!-- Add counter element -->
    <button class="close-btn">Close</button>
    <button class="new-reservations-btn">Add Reservation</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  const closeButton = content.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  const reservationsBtn = content.querySelector('.new-reservations-btn');
  reservationsBtn.addEventListener('click', () => {
    addNewReservationsPopUp();
  });

  const reservationListContainer = content.querySelector('.reservation-list-container');
  reservationListContainer.style.maxHeight = '200px';
  reservationListContainer.style.overflowY = 'auto';

  const reservationList = content.querySelector('.reservation-list');

  const updateReservationDetails = () => {
    reservationList.innerHTML = '';
    reservations.forEach((reservation) => {
      const reservationItem = document.createElement('li');
      reservationItem.style.display = 'block';
      reservationItem.innerHTML = `
        <span>Name: ${reservation.name}</span><br>
        <span>Start Date: ${reservation.startDate}</span><br>
        <span>End Date: ${reservation.endDate}</span><br>
        <br>
      `;
      reservationList.appendChild(reservationItem);
    });
  };

  updateReservationDetails();
};

export default reservationsPopUp;
