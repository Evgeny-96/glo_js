document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const title = 'lesson02',
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

});