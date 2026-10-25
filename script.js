document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const arrData = {
      title: '',
      screens: [],
      screenPrice: 0,
      adaptive: '',
      rollback: 10,
      allServicePrices: 0,
      fullPrice: 0,
      servicePercentPrice: 0,
      services: {},
      i: 0,
      isNumber: function (num) {
         return num !== null && num.trim() !== '' && !isNaN(num) && isFinite(num);
      },
      isString: function (str) {
         return str !== null && str.trim() !== '' && !this.isNumber(str);
      },
      showTypeOf: function (variable) {
         console.log(variable, typeof variable);
      },
      getFullPrice: function () {
         this.fullPrice = this.screenPrice + this.allServicePrices;
      },
      getServicePercentPrices: function () {
         this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
      },
      getTitle: function () {
         this.title = this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase();
      },
      getRollbackMessage: function (price) {
         if (price >= 30000) return "Даем скидку в 10%";
         else if (price >= 15000 && price < 30000) return "Даем скидку в 5%";
         else if (price < 15000 && price >= 0) return "Скидка не предусмотрена";
         else return "Что то пошло не так";
      },
      asking: function () {

         do {
            this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
         }
         while (!this.isString(this.title));
         

         for (let i = 0; i < 2; i++) {
            
            let name = '';
            do {
               name = prompt("Какие типы экранов нужно разработать?");
            }
            while (!this.isString(name));

            let price = 0;

            do {
               price = prompt("Сколько будет стоить данная работа?");
            }
            while (!this.isNumber(price))

            this.screens.push({ id: i, name: name, price: +price});
         }

         for (let i = 0; i < 2; i++) {
            let name = '';

            do {
               name = prompt("Какой дополнительный тип услуги нужен?");
            }
            while (!this.isString(name));

            let price;
            do {
               price = prompt("Сколько это будет стоить?");
            } while (!this.isNumber(price));

            this.services[name] = +price;
         }
         
         this.adaptive = confirm("Нужен ли адаптив на сайте?");
      },
      addPrices: function() {
         for (let screen of this.screens) {
            this.screenPrice += +screen.price;
         }

         for (let key in this.services) {
            this.allServicePrices += this.services[key];
         }
      },
      start: function () {
         this.asking();
         this.addPrices();
         this.getFullPrice();
         this.getServicePercentPrices();
         this.getTitle();
         this.logger();
      },
      logger: function () {
         this.showTypeOf(this.title)
         this.showTypeOf(this.screenPrice)
         this.showTypeOf(this.adaptive)

         console.log(this.getRollbackMessage(this.fullPrice))
         console.log(this.screens.length)
         console.log(this.servicePercentPrice)
         console.log(this.screens);

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
