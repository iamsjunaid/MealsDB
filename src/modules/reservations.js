import { getReservations, postReservation } from './getReservations.js';

const openReservationPopup = (data) => {
  const title = data.strMeal;
  const image = data.strMealThumb;
  const id = data.idMeal;

  const popupContent = document.createElement('div');
  popupContent.className = 'popupContent';
  const overlay = document.createElement('div');
  const popupInnerContainer = document.createElement('div');
  popupInnerContainer.className = 'popupInnerContainer';
  overlay.className = 'popup-overlay';

  popupContent.innerHTML = `
      

      <div class="image-container">
          <img class="popUp_image" src=${image} alt="">
      </div>

      <div class="popUp_title_container">
          <p class="popUp_title">${title}</p>
      </div>

      <div class="comments-container">
          <h3 class="user-comments">Users Reservations (<span class="counter"></span>)</h3>
          <p class="commentParag"></p>
      </div>
      <form>
    <div class="input-fields">
    <input class="nameinputfield" type="text" id="username" placeholder="Your name" required minlength="1" maxlength="30" /></br>
    <input type="date" class="start-date" required>
    <input type="date" class="date-end" required>
    </div>
    <div class="popup-btn-container">
    <button type="button"  class="closepopup">Close</button>
    <button class="submit" type="button">Submit</button>
    </div>
    <span class="notifier"></span>
      </form>
            `;

  const popup = document.querySelector('.popup');
  popup.className = 'popup';
  popup.appendChild(overlay);
  popup.appendChild(popupInnerContainer);
  popup.appendChild(popupContent);
  const form = document.querySelector('.submit');
  const usersName = document.querySelector('.nameinputfield');
  const startDate = document.querySelector('.start-date');
  const dateEnd = document.querySelector('.date-end');

  form.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = usersName.value;
    const startdate = startDate.value;
    const dateend = dateEnd.value;
    try {
      await postReservation(id, username, startdate, dateend);

      // Display the new reservation immediately
      const res = await getReservations(id);

      const p1 = document.querySelector('.commentParag');
      const counter = document.querySelector('.counter');
      counter.innerHTML = `${res.length || ''}`;

      const list = JSON.parse(res);

      const reservationsContainer = document.createElement('div');
      reservationsContainer.className = 'reservations-container';
      list.forEach((element) => {
        reservationsContainer.innerHTML = `<ul class="ul-reservations-container"><li>${element.username}</li><li>${element.date_start}</li><li>${element.date_end}</li></ul>`;
      });
      p1.appendChild(reservationsContainer);

      usersName.value = '';
      startDate.value = '';
      dateEnd.value = '';
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
    }
  });
  const closepopup = document.querySelector('.closepopup');
  closepopup.addEventListener('click', () => {
    popup.removeChild(overlay);
    popup.removeChild(popupInnerContainer);
    popup.removeChild(popupContent);
  });
};
export default openReservationPopup;
