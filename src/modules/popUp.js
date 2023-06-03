import { getComments, postComments } from './comments.js';

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
      <form>
    <input class="nameinputfield" type="text" id="username" name="user_name" placeholder="Your name" required minlength="1" maxlength="30" /></br>
    <textarea class="messageinputfield" id="msg" name="user_message" placeholder="Your comment" required minlength="1" maxlength="500"></textarea></br>
    <button type="button"  class="closepopup">Close</button>
    <button class="submit" type="button">Submit</button>
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
  const usersComment = document.querySelector('.messageinputfield');

  form.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usersName.value;
    const usercomment = usersComment.value;
    postComments(id, username, usercomment)
      .then((res) => {
        if (res === 'Created') {
          getComments(id)
            .then((res) => {
              const p1 = document.querySelector('.commentParag');
              const counter = document.querySelector('.counter');
              counter.innerHTML = `${res.length || ''}`;
              let html = '';
              res.forEach((item) => {
                html += `${item.creation_date} ${item.username} ${item.comment}<br>`;
              });
              p1.innerHTML = html;
            })
            .catch((err) => err);
        }
      })
      .catch((err) => err);
    usersName.value = '';
    usersComment.value = '';
  });

  getComments(id)
    .then((res) => {
      const p1 = document.querySelector('.commentParag');
      const counter = document.querySelector('.counter');
      counter.innerHTML = `${res.length || ''}`;
      let html = '';
      res.forEach((item) => {
        html += `${item.creation_date} ${item.username} ${item.comment}<br>`;
      });
      p1.innerHTML = html;
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
