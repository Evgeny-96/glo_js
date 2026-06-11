document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   let title;
   let screens;
   let screenPrice;   
   let adaptive;
   let rollback = 10;
   let allServicePrices;
   let fullPrice;
   let servicePercentPrice;

   const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
   };

   const asking = function () {
      title = prompt("Как называется ваш проект?", "Калькулятор верстки");
      screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");
      
      do {
         screenPrice = prompt("Сколько будет стоить данная работа?");
      } while (!isNumber(screenPrice));

      screenPrice = +screenPrice;
      
      adaptive = confirm("Нужен ли адаптив на сайте?");
   };

   const getAllServicePrices = function() {
      let sum = 0;

      for (let i = 0; i < 2; i++) {
         let price;
         do {
            price = prompt("Сколько это будет стоить?");
         } while (!isNumber(price));
         sum += +price;
      }
      
      return sum;
   };

   const showTypeOf = function (variable) {
      console.log(variable, typeof variable);
   };

   const getFullPrice = function () {
      return screenPrice + allServicePrices;
   };

   const getServicePercentPrices = function () {
      return fullPrice - (fullPrice * (rollback / 100));
   };

   const getTitle = function () {
      return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
   };

   const getRollbackMessage = function (price) {
      if (price >= 30000) return "Даем скидку в 10%";
      else if (price >= 15000 && price < 30000) return "Даем скидку в 5%";
      else if (price < 15000 && price >= 0) return "Скидка не предусмотрена";
      else return "Что то пошло не так";
   };

   asking();
   allServicePrices = getAllServicePrices();
   fullPrice = getFullPrice();
   servicePercentPrice = getServicePercentPrices();
   title = getTitle();

   showTypeOf(title);
   showTypeOf(screenPrice);
   showTypeOf(adaptive);

   console.log(getRollbackMessage(fullPrice));
   console.log(screens.length);
   console.log(servicePercentPrice);

   console.log("Стоимость верстки экранов " + screenPrice + " юани и Стоимость разработки сайта " + fullPrice + " юани");
});
