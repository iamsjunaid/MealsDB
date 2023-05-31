import { getComments } from './getComments.js';

const openPopup = (data) => {
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
      <p class="closepopup">X</div>

      <div class="image-container">
          <img class="popUp_image" src=${image} alt="">
      </div>

      <div class="popUp_title_container">
          <p class="popUp_title">${title}</p>
      </div>

      <div class="comments-container">
          <h3 class="user-comments">Users comments (<span class="counter"></span>)</h3>
          <p class="commentParag"></p>
      </div>
            `;

  const popup = document.querySelector('.popup');
  popup.className = 'popup';
  popup.appendChild(overlay);
  popup.appendChild(popupInnerContainer);
  popup.appendChild(popupContent);
  getComments(id)
    .then((res) => {
      const p1 = document.querySelector('.commentParag');
      const counter = document.querySelector('.counter');
      counter.innerHTML = `${res.length || ''}`;
      res.map(
        (item) => (p1.innerHTML = `${item.creation_date} ${item.username} ${item.comment}<br>`), // eslint-disable-line no-return-assign,
      );
    })
    .catch((err) => err);

  const closepopup = document.querySelector('.closepopup');
  closepopup.addEventListener('click', () => {
    popup.removeChild(overlay);
    popup.removeChild(popupInnerContainer);
    popup.removeChild(popupContent);
  });
};
export default openPopup;
