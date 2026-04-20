document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   let title = 'lesson02',
      screens = 'Простые, Сложные, Интерактивные',
      screenPrice = 45654,
      rollback = 85,
      fullPrice = 9895,
      adaptive = true;

   title = prompt("Как называется ваш проект?");
   screens = prompt("Какие типы экранов нужно разработать?");
   screenPrice = +prompt("Сколько будет стоить данная работа?", "1200");
   adaptive = confirm("Нужен ли адаптив на сайте?", "true/false");

   const service1 = prompt("Какой дополнительный тип услуги нужен?"),
      servicePrice1 = +prompt("Сколько это будет стоить?"),
      service2 = prompt("Какой дополнительный тип услуги нужен?"),
      servicePrice2 = +prompt("Сколько это будет стоить?");
   
   fullPrice = screenPrice + servicePrice1 + servicePrice2;

   // Тип: Function Expression
   const getAllServicePrices = function(service1, service2) {
      return service1 + service2;
   };

   // Тип: Function Declaration
   function getFullPrice(screenPrice, allServicePrices) {
      return screenPrice + allServicePrices;
   };

   function getTitle(text) {
      if (!text) return '';
      const cleanTitle = text.trim();
      return cleanTitle[0].toUpperCase() + cleanTitle.slice(1).toLowerCase();
   };

   function getServicePercentPrices() {
      return fullPrice - rollback;
   };

   function showTypeOf(elem) {
      console.log(elem, typeof elem);
   };

   function getRollbackMessage(fullPrice) {
      if (fullPrice >= 30000) console.log("Даем скидку в 10%");
      else if (fullPrice >= 15000 && fullPrice < 30000) console.log("Даем скидку в 5%");
      else if (fullPrice < 15000 && fullPrice >= 0) console.log("Скидка не предусмотрена");
      else console.log("Что то пошло не так");
   };

   const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

   fullPrice = getFullPrice(screenPrice, allServicePrices);

   const servicePercentPrice = getServicePercentPrices();
   
   console.log('fullPrice: ', fullPrice);

   
   console.log('servicePercentPrice: ', servicePercentPrice);

   showTypeOf(title);
   showTypeOf(fullPrice);
   showTypeOf(adaptive);
   getRollbackMessage(fullPrice);
   console.log('Название проекта после форматирования', getTitle(title));
   console.log('Итоговая стоимость за вычетом отката:', servicePercentPrice);
});