document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   let title = 'lesson02',
      screens = 'Простые, Сложные, Интерактивные',
      screenPrice = 45654,
      rollback = 85,
      fullPrice = 9895,
      adaptive = true;


   console.log('title: ', typeof title);
   console.log('fullPrice: ', typeof fullPrice);
   console.log('adaptive: ', typeof adaptive);
   console.log('screens: ', screens.length);
   console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
   console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
   console.log('screens (нижний регистр, массив): ', screens.toLowerCase().split(", "));
   console.log('процент отката: ', fullPrice * (rollback / 100) + ' %');

   title = prompt("Как называется ваш проект?");
   screens = prompt("Какие типы экранов нужно разработать?");
   screenPrice = +prompt("Сколько будет стоить данная работа?", "1200");
   adaptive = confirm("Нужен ли адаптив на сайте?", "true/false");

   const service1 = prompt("Какой дополнительный тип услуги нужен?"),
      servicePrice1 = +prompt("Сколько это будет стоить?"),
      service2 = prompt("Какой дополнительный тип услуги нужен?"),
      servicePrice2 = +prompt("Сколько это будет стоить?");

   fullPrice = screenPrice + servicePrice1 + servicePrice2;
   
   console.log('fullPrice: ', fullPrice);

   const servicePercentPrice = Math.ceil(fullPrice - rollback);
   console.log('servicePercentPrice: ', servicePercentPrice);

   if (fullPrice >= 30000) console.log("Даем скидку в 10%");
   else if (fullPrice >= 15000 && fullPrice < 30000) console.log("Даем скидку в 5%");
   else if (fullPrice < 15000 && fullPrice >= 0) console.log("Скидка не предусмотрена");
   else console.log("Что то пошло не так");
});