import './index.css';
import getMeals from './modules/getMeals.js';
import openPopup from './modules/popUp.js';
import { getLikes } from './modules/getLikes.js';

const mealsSection = document.querySelector('.meals-section');
const parser = new DOMParser();

let mealsList = [];
const likesArray = getLikes();

const loadInitialData = async () => {
  mealsList = await getMeals();
  // loadMeals(mealsList);
  mealsList.meals.forEach((data) => {
    const string = `
        <div class="meal-container">
          <img src="${data.strMealThumb}" alt="meal" class="meal-img">
          
          <div class="meal-details">
            <div class="meal-desc">
              <p class="title">${data.strMeal}</p>  
              <p class="like" id="${data.idMeal}"><i class="fa-solid fa-heart"></i></p>
            </div>
            <button type="button" class="comment-btn">Comments</button>
            <button type="button" class="reservations-btn">Reservations</button>
          </div>
        </div>`;
    const stringElement = parser.parseFromString(string, 'text/html').body
      .firstChild;
    mealsSection.append(stringElement);

    // Get the comment button element
    const commentBtn = stringElement.querySelector('.comment-btn');

    // Add event listener to the comment button
    commentBtn.addEventListener('click', () => {
      openPopup(data);
    });
  });
};
loadInitialData();

mealsList.forEach((meal) => {
  const tempLikesArray = likesArray.filter((like) => like.item_id === meal.idMeal);
  if (tempLikesArray.length === 0) {
    likesArray.push({
      likes: 0,
      item_id: meal.mealId,
    });
  }
});