const openPopup = (data) => {
  const title = data.strMeal;
  const image = data.strMealThumb;

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
      <div class="counter2"></div>
          <h3 class="user-comments">Users comments</h3>
      </div>
            `;

  const popup = document.querySelector('.popup');
  popup.className = 'popup';
  popup.appendChild(overlay);
  popup.appendChild(popupInnerContainer);
  popup.appendChild(popupContent);

  const mainContainer = document.querySelector('main');
  mainContainer.appendChild(popup);

  const closepopup = document.querySelector('.closepopup');
  closepopup.addEventListener('click', () => {
    mainContainer.removeChild(popup);
  });
};
export default openPopup;
