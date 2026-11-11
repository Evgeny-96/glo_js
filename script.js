document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   const book = document.querySelectorAll(".book");
   const adv = document.querySelector('.adv');
   // 1.
   book[1].after(book[0]);
   book[4].after(book[3]);
   book[5].after(book[2]);

   // 2.
   const body = document.querySelector('body');
   body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

   // 3.
   book[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';

   // 4.
   adv.remove();

   // 5.
   const li_0 = book[0].querySelectorAll('li');
   li_0[3].after(li_0[6]);
   li_0[6].after(li_0[8]);
   li_0[9].after(li_0[2]);

   const li_5 = book[5].querySelectorAll('li');
   li_5[3].before(li_5[9]);
   li_5[4].after(li_5[2]);
   li_5[8].before(li_5[5]);

   // 6.
   const li_2 = book[2].querySelectorAll('li');
   let li = document.createElement('li');
   li.innerHTML = "Глава 8: За пределами ES6";
   li_2[8].after(li);
});