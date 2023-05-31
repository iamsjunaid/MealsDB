const reservationsPopUp = (itemDetails) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const content = document.createElement('div');
  content.classList.add('popup-content');
  content.innerHTML = `
      <h2>${itemDetails.strMeal}</h2>
      <img class="popUp_image" src=${itemDetails.strMealThumb} alt="meal image">
      <p><strong>Description</strong> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione!</p>
      <p><strong>User Comments</strong> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione!</p>
      <button class="close-btn">Close</button>
    `;

  modal.appendChild(content);
  document.body.appendChild(modal);
  const closeBtn = content.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
};

export default reservationsPopUp;
