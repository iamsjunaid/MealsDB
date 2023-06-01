// index.js
import './index.css';
import getMeals from './modules/getMeals.js';
import openPopup from './modules/popUp.js';
import reservationsPopUp from './modules/reservationsPopUp.js';
import addNewReservationsPopUp from './modules/addReservation.js';

const mealsSection = document.querySelector('.meals-section');
const parser = new DOMParser();

let mealsList = [];

const loadInitialData = async () => {
  mealsList = await getMeals();
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
          <button type="button" class="new-reservations-btn">Add new reservation</button>
        </div>
      </div>`;
    const stringElement = parser.parseFromString(string, 'text/html').body
      .firstChild;
    mealsSection.append(stringElement);

    const newReservationsBtn = stringElement.querySelector('.new-reservations-btn');
    newReservationsBtn.addEventListener('click', () => {
      addNewReservationsPopUp(data);
    });

    const reservationsBtn = stringElement.querySelector('.reservations-btn');
    reservationsBtn.addEventListener('click', () => {
      reservationsPopUp(data);
    });

    // Get the comment button element
    const commentBtn = stringElement.querySelector('.comment-btn');
    // Add event listener to the comment button
    commentBtn.addEventListener('click', () => {
      openPopup(data);
    });
  });
};

loadInitialData();
