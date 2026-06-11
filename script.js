document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const isNumber = function (numb) {
      return !isNaN(parseFloat(numb)) && isFinite(numb);
   }

   const gameBot = function () {
      const rundomNumber = Math.floor(Math.random() * 100) + 1;

      function numRecursion () {
         let numUser = prompt('Угадай число от 1 до 100');

         if (numUser === null) {
         alert('Игра окончена');
         return;
         }

         if (!isNumber(numUser)) {
            alert('Введи число!');
            return numRecursion();
         }
         
         numUser = +numUser;
         
         if (numUser > rundomNumber) {
            alert('Загаданное число меньше');
            return numRecursion();
         } else if (numUser < rundomNumber) {
            alert('Загаданное число больше');
            return numRecursion();
         } else if (numUser === rundomNumber) {
            alert('Поздравляю, Вы угадали!!!');
            return '';
         }

      }

      return numRecursion;
   }

   const gamebotHero = gameBot();
   gamebotHero();
 
});
