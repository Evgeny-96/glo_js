document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const arrData = {
      title: '',
      screens: '',
      screenPrice: '',
      adaptive: '',
      rollback: 10,
      allServicePrices: 0,
      fullPrice: 0,
      servicePercentPrice: 0,
      i: 0,
      isNumber: function (num) {
         return !isNaN(parseFloat(num)) && isFinite(num);
      },
      getAllServicePrices: function() {
         let sum = 0;

         for (let i = 0; i < 2; i++) {
            let price;
            do {
                  price = prompt("Сколько это будет стоить?");
            } while (!this.isNumber(price));
            sum += +price;
         }
         
         return sum;
      },
      showTypeOf: function (variable) {
         console.log(variable, typeof variable);
      },
      getFullPrice: function () {
         return this.screenPrice + this.allServicePrices;
      },
      getServicePercentPrices: function () {
         return this.fullPrice - (this.fullPrice * (this.rollback / 100));
      },
      getTitle: function () {
         return this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase();
      },
      getRollbackMessage: function (price) {
         if (price >= 30000) return "Даем скидку в 10%";
         else if (price >= 15000 && price < 30000) return "Даем скидку в 5%";
         else if (price < 15000 && price >= 0) return "Скидка не предусмотрена";
         else return "Что то пошло не так";
      },
      asking: function () {
         this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
         this.screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");
         
         do {
            this.screenPrice = prompt("Сколько будет стоить данная работа?");
         }
         while (!this.isNumber(this.screenPrice))

         this.screenPrice = +this.screenPrice;
         
         this.adaptive = confirm("Нужен ли адаптив на сайте?");
      },
      start: function () {
         this.asking()
         this.allServicePrices = this.getAllServicePrices();
         this.fullPrice = this.getFullPrice();
         this.servicePercentPrice = this.getServicePercentPrices();
         this.title = this.getTitle();
         this.logger();
      },
      logger: function () {
         this.showTypeOf(this.title)
         this.showTypeOf(this.screenPrice)
         this.showTypeOf(this.adaptive)

         console.log(this.getRollbackMessage(this.fullPrice))
         console.log(this.screens.length)
         console.log(this.servicePercentPrice)

         console.log("Стоимость верстки экранов " + this.screenPrice + " рублей и Стоимость разработки сайта " + this.servicePercentPrice + " рублей")
         
         for (let key in this) {
            if (typeof this[key] !== 'function') {
               console.log(this[key]);
            }
         }         
      }
   }

   arrData.start();
});
