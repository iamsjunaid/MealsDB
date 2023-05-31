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
        <li>Name: John Doe</li>
        <li>Date: <span id="reservationDate">Friday, June 3, 2023</span></li>
        <li>Time: <span id="reservationTime">7:00 PM</span></li>
        <li>Number of Guests: <span id="reservationGuests">4</span></li>
      <button class="close-btn">Close</button>
    `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  const updateReservationDetails = () => {
    const reservationDate = document.getElementById('reservationDate');
    const reservationTime = document.getElementById('reservationTime');
    const reservationGuests = document.getElementById('reservationGuests');

    // Get current date and time
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    reservationDate.textContent = currentDate.toDateString();
    reservationTime.textContent = currentTime;
    reservationGuests.textContent = Math.floor(Math.random() * 10) + 1;
  };

  const closeButton = content.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  const reservationsBtn = document.querySelectorAll('.reservations-btn');
  reservationsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      updateReservationDetails();
    });
  });
};

export default reservationsPopUp;
