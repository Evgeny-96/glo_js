document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const title = document.getElementsByTagName('h1')[0];
   const btnCalculate = document.getElementsByClassName('handler_btn')[0];
   const btnReset = document.getElementsByClassName('handler_btn')[1];
   const screenBtn = document.querySelector('.screen-btn');
   const otherItemsPercent = document.querySelectorAll('.other-items.percent');
   const otherItemsNumber  = document.querySelectorAll('.other-items.number');
   const inputRollback = document.querySelector('.rollback input[type=range]');
   const spanRollback = document.querySelector('.rollback span.range-value');
   const totalInputTotal = document.getElementsByClassName('total-input')[0];
   const totalInputCount = document.getElementsByClassName('total-input')[1];
   const totalInputCountOther = document.getElementsByClassName('total-input')[2];
   const totalInputFullCount = document.getElementsByClassName('total-input')[3];
   const totalInputCountRollback = document.getElementsByClassName('total-input')[4];
   let screen = document.querySelectorAll('.screen');

   console.log('screen: ', screen);
   console.log('totalInputTotal: ', totalInputTotal);
   console.log('totalInputCount: ', totalInputCount);
   console.log('totalInputCountOther: ', totalInputCountOther);
   console.log('totalInputFullCount: ', totalInputFullCount);
   console.log('totalInputCountRollback: ', totalInputCountRollback);
   console.log('spanRollback: ', spanRollback);
   console.log('inputRollback: ', inputRollback);
   console.log('otherItemsNumber: ', otherItemsNumber);
   console.log('otherItemsPercent: ', otherItemsPercent);
   console.log('screenBtn: ', screenBtn);
   console.log('btnCalculate: ', btnCalculate);
   console.log('btnReset: ', btnReset);
   console.log('title: ', title);
});
