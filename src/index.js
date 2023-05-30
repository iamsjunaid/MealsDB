import './index.css';
import getMeals from './modules/getMeals.js';

const mealsSection = document.querySelector('.meals-section');
const parser = new DOMParser();

let mealsList = [];

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
              <p class="like" id="${data.idMeal}><i class="fa-solid fa-heart"></i></p>
            </div>
            <button type="button" class="comment-btn">Comments</button>
            <button type="button" class="reservations-btn">Reservations</button>
          </div>
        </div>`;

    const stringElement = parser.parseFromString(string, 'text/html').body.firstChild;
    mealsSection.append(stringElement);
  });
};

loadInitialData();