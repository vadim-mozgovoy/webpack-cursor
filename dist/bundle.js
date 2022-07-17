/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_style_hw10_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/style-hw10.css */ \"./src/styles/style-hw10.css\");\n/* harmony import */ var _src_img_dj_playing_music_at_sound_mixer_in_night_club_53876_18678_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg */ \"./src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg\");\n/* harmony import */ var _src_modules_hw_10_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/hw-10.js */ \"./src/modules/hw-10.js\");\n/* harmony import */ var _src_modules_hw_10_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_modules_hw_10_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_modules_hw_9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/hw-9.js */ \"./src/modules/hw-9.js\");\n/* harmony import */ var _src_modules_hw_9_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_modules_hw_9_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_hw_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hw-3 */ \"./src/modules/hw-3.js\");\n/* harmony import */ var _modules_hw_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hw-1 */ \"./src/modules/hw-1.js\");\n\n\n\n\n\n\n\nconsole.log(\"HW 3: \".concat((0,_modules_hw_3__WEBPACK_IMPORTED_MODULE_4__.getRandomNumber)(10, 100)));\nvar div = document.querySelector('#hw-01');\nvar p = document.createElement('p');\nvar span = document.createElement('span');\nvar info = \"apple = \".concat(_modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.apple, \", orange = \").concat(_modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.orange, \", lemon = \").concat(_modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.lemon);\nvar maxPrice = \"\\u0421\\u0443\\u043C\\u0430 \\u0432\\u0441i\\u0445 \\u0444\\u0440\\u0443\\u043A\\u0442i\\u0432 = \".concat((0,_modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.sumProducts)(_modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.apple, _modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.orange, _modules_hw_1__WEBPACK_IMPORTED_MODULE_5__.lemon), \" \\u0433\\u0440\\u043D. \");\np.append(info);\nspan.append(maxPrice);\ndiv.append(p);\ndiv.append(span);\n\n//# sourceURL=webpack://cursor-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/hw-1.js":
/*!*****************************!*\
  !*** ./src/modules/hw-1.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apple\": () => (/* binding */ apple),\n/* harmony export */   \"lemon\": () => (/* binding */ lemon),\n/* harmony export */   \"orange\": () => (/* binding */ orange),\n/* harmony export */   \"sumProducts\": () => (/* binding */ sumProducts)\n/* harmony export */ });\nvar apple = 15.678;\nvar orange = 123.965;\nvar lemon = 90.2345;\nvar max = Math.max(apple, orange, lemon);\nvar min = Math.min(apple, orange, lemon);\nfunction sumProducts(apple, orange, lemon) {\n  return apple + orange + lemon;\n}\nvar sumProductsFloor = Math.floor(apple) + Math.floor(orange) + Math.floor(lemon);\nvar sumProductsRound = Math.round(sumProducts / 100) * 100;\nvar checkPairNumber = Math.floor(sumProducts) % 2 === 0 ? \"true\" : \"false\";\nvar rest = 500 - sumProducts;\nvar average = sumProducts / 3;\nvar averageSumToFix = +average.toFixed(2);\n\nfunction getRandomArbitrary(min, max) {\n  return Math.trunc(Math.random() * (max - min) + min);\n}\n\nvar discount = getRandomArbitrary(0, 100);\nvar order = +(sumProducts - sumProducts * discount / 100).toFixed(2);\nvar profit = +(order / 2 - order * discount / 100).toFixed(2);\ndocument.write(\"apple = \".concat(apple, \"<br>\"), \"orange = \".concat(orange, \"<br>\"), \"lemon = \".concat(lemon, \"<br>\"));\ndocument.write(\"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435: \".concat(max, \" <br>\"));\ndocument.write(\"\\u041C\\u0438\\u043D\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435: \".concat(min, \" <br>\"));\ndocument.write(\"\\u0421\\u0443\\u043C\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432: \".concat(sumProducts, \" <br>\"));\ndocument.write(\"\\u0421\\u0443\\u043C\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432 \\u0441 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u043D\\u044B\\u043C \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435\\u043C \\u043A\\u0430\\u0436\\u0434\\u043E\\u0433\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0430 \\u0432 \\u043C\\u0435\\u043D\\u044C\\u0448\\u0443\\u044E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u0443: \".concat(sumProductsFloor, \" <br>\"));\ndocument.write(\"\\u0421\\u0443\\u043C\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u043D\\u0430\\u044F \\u0434\\u043E \\u0441\\u043E\\u0442\\u0435\\u043D : \".concat(sumProductsRound, \" <br>\"));\ndocument.write(\"\\u042F\\u0432\\u043B\\u044F\\u0435\\u0442\\u0441\\u044F \\u043B\\u0438 \\u0441\\u0443\\u043C\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u043D\\u0430\\u044F \\u0432 \\u043C\\u0435\\u043D\\u044C\\u0448\\u0443\\u044E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u0443 \\u043F\\u0430\\u0440\\u043D\\u044B\\u043C \\u0438\\u043B\\u0438 \\u043D\\u0435\\u043F\\u0430\\u0440\\u043D\\u044B\\u043C \\u0447\\u0438\\u0441\\u043B\\u043E\\u043C : \".concat(checkPairNumber, \" <br>\"));\ndocument.write(\"\\u041E\\u0441\\u0442\\u0430\\u0442\\u043E\\u043A \\u0441 500 \\u0433\\u0440\\u043D \\u0431\\u0435\\u0437 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u0438\\u0439: 500 - \".concat(sumProducts, \" = \").concat(rest, \"\\u0433\\u0440\\u043D <br>\"));\ndocument.write(\"\\u0421\\u0440\\u0435\\u0434\\u043D\\u0435\\u0435 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0446\\u0435\\u043D \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u043E\\u0435 \\u0434\\u043E 2 \\u0437\\u043D\\u0430\\u043A\\u043E\\u0432 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0437\\u0430\\u043F\\u044F\\u0442\\u043E\\u0439:  \".concat(averageSumToFix, \"\\u0433\\u0440\\u043D <br>\"));\ndocument.write(\"\\u0421\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u0430\\u044F \\u0441\\u043A\\u0438\\u0434\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440:  \".concat(discount, \" % <br>\"));\ndocument.write(\"\\u0421\\u0443\\u043C\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0430 \\u0441 \\u0443\\u0447\\u0435\\u0442\\u043E\\u043C \\u0441\\u043A\\u0438\\u0434\\u043A\\u0438 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u043E\\u0435 \\u0434\\u043E 2 \\u0437\\u043D\\u0430\\u043A\\u043E\\u0432 \\u043F\\u043E\\u0441\\u043B\\u0435 \\u0437\\u0430\\u043F\\u044F\\u0442\\u043E\\u0439:  \".concat(order, \"\\u0433\\u0440\\u043D <br>\"));\ndocument.write(\"\\u0427\\u0438\\u0441\\u0442\\u0430\\u044F \\u043F\\u0440\\u0438\\u0431\\u044B\\u043B\\u044C \\u0441 \\u0443\\u0447\\u0435\\u0442\\u043E\\u043C \\u0441\\u043A\\u0438\\u0434\\u043A\\u0438: \".concat(profit, \" \\u0433\\u0440\\u043D <br>\")); // 2 способ где каждое число массива сначала округляется а потом результаты суммируются\n// const arr = [15.678, 123.965, 90.2345 ]\n// getProductsFlooredSum = (arr, callback)=>arr.reduce((sum,current)=>sum + callback(current),0)\n// console.log(getProductsFlooredSum(arr,Math.floor))\n\n//# sourceURL=webpack://cursor-webpack/./src/modules/hw-1.js?");

/***/ }),

/***/ "./src/modules/hw-10.js":
/*!******************************!*\
  !*** ./src/modules/hw-10.js ***!
  \******************************/
/***/ (() => {

eval("var buttons = document.querySelectorAll('.sound');\n\nfunction playNote(e) {\n  var sound = document.querySelector(\"audio[data-key=\\\"\".concat(e, \"\\\"]\"));\n  if (!sound) return;\n  sound.play();\n}\n\nfunction currentButton(e) {\n  var clickedBtn = document.getElementById(e);\n  if (clickedBtn == null) return;\n  clickedBtn.classList.add(\"active\");\n}\n\nbuttons.forEach(function (key) {\n  return key.addEventListener(\"transitionend\", removeTransition);\n});\n\nfunction removeTransition(e) {\n  if (e.propertyName !== \"transform\") return;\n  this.classList.remove(\"active\");\n}\n\ndocument.addEventListener(\"keyup\", function (e) {\n  playNote(e.keyCode);\n  currentButton(e.keyCode);\n});\nbuttons.forEach(function (el) {\n  return el.addEventListener('click', function (e) {\n    playNote(e.target.closest('.sound').id);\n    currentButton(e.target.closest('.sound').id);\n  });\n});\n\n//# sourceURL=webpack://cursor-webpack/./src/modules/hw-10.js?");

/***/ }),

/***/ "./src/modules/hw-3.js":
/*!*****************************!*\
  !*** ./src/modules/hw-3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber)\n/* harmony export */ });\n// 1) функція getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.\nfunction getMaxDigit(number) {\n  var arr = number.toString().split('').sort(function (a, b) {\n    return b - a;\n  });\n  return arr[0];\n} //2)Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл\n\n\nvar pow = function pow(n, power) {\n  var times = power >= 0 ? power : -power;\n  var result = 1;\n\n  while (times-- >= 1) {\n    result = result * n;\n  }\n\n  return power >= 0 ? result : 1 / result;\n}; //3)Створити функцію, яка форматує ім'я, роблячи першу букву великою. (\"влад\" -> \"Влад\", \"вЛАД\" -> \"Влад\" і так далі);\n\n\nvar firstName = function firstName(name) {\n  return name[0].toUpperCase() + name.substring(1).toLowerCase();\n}; //4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805\n\n\nfunction salary(sal, tax) {\n  return sal - sal * Number.parseFloat(tax) / 100;\n} //5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5\n\n\nvar getRandomNumber = function getRandomNumber(min, max) {\n  return parseInt(min + Math.random() * (max - min));\n}; // 6)Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter(\"а\", \"Асталавіста\") -> 4\n\nfunction countLetter(a, str) {\n  return str.toLowerCase().split(a.toLowerCase()).length - 1;\n} //7)Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency(\"100$\") -> 2500 грн. або convertCurrency(\"2500UAH\") -> 100$;\n// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.\n\n\nfunction convertCurrency(money) {\n  var CURRENT_EXCHANGE_RATE = 39.25;\n  var itemNumber = (parseInt(money) + '').split('').length;\n  var currency = money.split('').splice(itemNumber).join('').toLowerCase();\n  var res, exchange;\n\n  if (isNaN(parseInt(money))) {\n    return 'Неправильно введено числовое значение!';\n  }\n\n  if (currency === 'uah') {\n    res = (parseInt(money) / CURRENT_EXCHANGE_RATE).toFixed(2);\n    exchange = '$';\n  } else if (currency === '$') {\n    res = (parseInt(money) * CURRENT_EXCHANGE_RATE).toFixed(2);\n    exchange = 'UAH';\n  } else {\n    return \"Помилка!Конвертуються тільки $ або UAH, інші валюти не конвертуються\";\n  }\n\n  return \"\".concat(money, \" = \").concat(res).concat(exchange, \" \");\n} //8)Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.\n\n\nvar getRandomPassword = function getRandomPassword() {\n  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));\n}; //9)Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', \"blablabla\") -> \"blblbl\"\n\n\nvar deleteLetters = function deleteLetters(letter, text) {\n  return text.toLowerCase().split('').filter(function (item) {\n    return item !== letter.toLowerCase();\n  }).join('');\n}; // 10)Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom(\"мадам\") -> true, isPalyndrom(\"кокос\") -> false, isPalyndrom(\"Я несу гусеня\") -> true\n\n\nfunction isPalindrome(myString) {\n  var removeChar = myString.replace(/[^A-Z0-9А-Я]/ig, \"\").toLowerCase();\n  var checkPalindrome = removeChar.split('').reverse().join('');\n  return removeChar === checkPalindrome ? 'Polindrome - true' : 'is a not Polindrome - false';\n} // 11) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter(\"Бісквіт був дуже ніжним\") -> \"сктдеим\"\n\n\nfunction deleteDuplicateLetter(text) {\n  return text.toLowerCase().split('').filter(function (val, i, str) {\n    return text.lastIndexOf(val) === str.indexOf(val);\n  }).join('');\n}\n\ndocument.write(\"1) \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F getMaxDigit(number) \\u2013 \\u044F\\u043A\\u0430 \\u043E\\u0442\\u0440\\u0438\\u043C\\u0443\\u0454 \\u0431\\u0443\\u0434\\u044C-\\u044F\\u043A\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u0442\\u0430 \\u0432\\u0438\\u0432\\u043E\\u0434\\u0438\\u0442\\u044C \\u043D\\u0430\\u0439\\u0431\\u0456\\u043B\\u044C\\u0448\\u0443 \\u0446\\u0438\\u0444\\u0440\\u0443 \\u0432 \\u0446\\u044C\\u043E\\u043C\\u0443 \\u0447\\u0438\\u0441\\u043B\\u0456 getMaxDigit(23489) = <span>\".concat(getMaxDigit(23489), \"</span> <br>\"));\ndocument.write(\"2) \\u0424\\u0443\\u043D\\u043A\\u0446\\u0456\\u044F \\u044F\\u043A\\u0430 \\u0432\\u0438\\u0437\\u043D\\u0430\\u0447\\u0430\\u0454 \\u0441\\u0442\\u0443\\u043F\\u0456\\u043D\\u044C \\u0447\\u0438\\u0441\\u043B\\u0430 pow(2, -2) = <span>\".concat(pow(2, -2), \"</span>  <br>\"));\ndocument.write(\"3) \\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u0444\\u043E\\u0440\\u043C\\u0430\\u0442\\u0443\\u0454 \\u0456\\u043C'\\u044F, \\u0440\\u043E\\u0431\\u043B\\u044F\\u0447\\u0438 \\u043F\\u0435\\u0440\\u0448\\u0443 \\u0431\\u0443\\u043A\\u0432\\u0443 \\u0432\\u0435\\u043B\\u0438\\u043A\\u043E\\u044E. (\\\"\\u0432\\u043B\\u0430\\u0434\\\" -> \\\"\\u0412\\u043B\\u0430\\u0434\\\", \\\"\\u0432\\u041B\\u0410\\u0414\\\" -> \\\"\\u0412\\u043B\\u0430\\u0434\\\" \\u0456 \\u0442\\u0430\\u043A \\u0434\\u0430\\u043B\\u0456) = <span>\".concat(firstName('ivan'), \"</span>  <br>\"));\ndocument.write(\"4) \\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u0432\\u0438\\u0440\\u0430\\u0445\\u043E\\u0432\\u0443\\u0454 \\u0441\\u0443\\u043C\\u0443, \\u0449\\u043E \\u0437\\u0430\\u043B\\u0438\\u0448\\u0430\\u0454\\u0442\\u044C\\u0441\\u044F \\u043F\\u0456\\u0441\\u043B\\u044F \\u043E\\u043F\\u043B\\u0430\\u0442\\u0438 \\u043F\\u043E\\u0434\\u0430\\u0442\\u043A\\u0443 \\u0432\\u0456\\u0434 \\u0437\\u0430\\u0440\\u0430\\u0431\\u0456\\u0442\\u043D\\u044C\\u043E\\u0457 \\u043F\\u043B\\u0430\\u0442\\u0438.(\\u041F\\u043E\\u0434\\u0430\\u0442\\u043E\\u043A = 18% + 1.5% -> 19.5%). \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: 1000 -> 805 = <span>\".concat(salary(1000, 19.5), \"</span> <br> \"));\ndocument.write(\"5) \\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u043F\\u043E\\u0432\\u0435\\u0440\\u0442\\u0430\\u0454 \\u0432\\u0438\\u043F\\u0430\\u0434\\u043A\\u043E\\u0432\\u0435 \\u0446\\u0456\\u043B\\u0435 \\u0447\\u0438\\u0441\\u043B\\u043E \\u0432 \\u0434\\u0456\\u0430\\u043F\\u0430\\u0437\\u043E\\u043D\\u0456 \\u0432\\u0456\\u0434 N \\u0434\\u043E M. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: getRandomNumber(1, 10) -> 5 = <span>\".concat(getRandomNumber(1, 10), \"</span> <br> \"));\ndocument.write(\"6) \\u0421\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0438 \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u0440\\u0430\\u0445\\u0443\\u0454 \\u0441\\u043A\\u0456\\u043B\\u044C\\u043A\\u0438 \\u0440\\u0430\\u0437\\u0456\\u0432 \\u043F\\u0435\\u0432\\u043D\\u0430 \\u0431\\u0443\\u043A\\u0432\\u0430 \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u044E\\u0454\\u0442\\u044C\\u0441\\u044F \\u0432 \\u0441\\u043B\\u043E\\u0432\\u0456. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: countLetter(\\\"\\u0430\\\", \\\"\\u0410\\u0441\\u0442\\u0430\\u043B\\u0410\\u0432\\u0456\\u0441\\u0442\\u0430\\\") -> 4 = <span>\".concat(countLetter('А', 'АсталАвіста'), \"</span> <br> \"));\ndocument.write(\"7) \\u0421\\u0442\\u0432\\u043E\\u0440\\u0456\\u0442\\u044C \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u043A\\u043E\\u043D\\u0432\\u0435\\u0440\\u0442\\u0443\\u0454 \\u0434\\u043E\\u043B\\u0430\\u0440\\u0438 \\u0432 \\u0433\\u0440\\u0438\\u0432\\u043D\\u0456 \\u0442\\u0430 \\u043D\\u0430\\u0432\\u043F\\u0430\\u043A\\u0438 \\u0432 \\u0437\\u0430\\u043B\\u0435\\u0436\\u043D\\u043E\\u0441\\u0442\\u0456 \\u0432\\u0456\\u0434 \\u043D\\u0430\\u044F\\u0432\\u043D\\u043E\\u0441\\u0442\\u0456 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430 $ \\u0430\\u0431\\u043E UAH \\u0432 \\u0440\\u044F\\u0434\\u043A\\u0443. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: convertCurrency(\\\"100$\\\") -> 2500 \\u0433\\u0440\\u043D. \\u0430\\u0431\\u043E convertCurrency(\\\"2500UAH\\\") -> 100$; \\n\\u0412\\u0440\\u0430\\u0445\\u0443\\u0439\\u0442\\u0435, \\u0456\\u043D\\u0448\\u0456 \\u0432\\u0430\\u043B\\u044E\\u0442\\u0438 \\u043D\\u0435 \\u043A\\u043E\\u043D\\u0432\\u0435\\u0440\\u0442\\u0443\\u044E\\u0442\\u044C\\u0441\\u044F, \\u043F\\u043E\\u0442\\u0440\\u0456\\u0431\\u043D\\u043E \\u0432\\u0438\\u0432\\u043E\\u0434\\u0438\\u0442\\u0438 \\u043F\\u043E\\u043C\\u0438\\u043B\\u043A\\u0443, \\u0456 \\u0442\\u0430\\u043A\\u043E\\u0436 \\u0440\\u0435\\u0433\\u0456\\u0441\\u0442\\u0440 uah \\u043D\\u0435 \\u043C\\u0430\\u0454 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u043D\\u044F = <span>\".concat(convertCurrency('2043Uah'), \"</span> <br> \"));\ndocument.write(\"8)\\u0421\\u0442\\u0432\\u043E\\u0440\\u0456\\u0442\\u044C \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E \\u0433\\u0435\\u043D\\u0435\\u0440\\u0430\\u0446\\u0456\\u0457 \\u0432\\u0438\\u043F\\u0430\\u0434\\u043A\\u043E\\u0432\\u043E\\u0433\\u043E \\u043F\\u0430\\u0440\\u043E\\u043B\\u044E (\\u0442\\u0456\\u043B\\u044C\\u043A\\u0438 \\u0447\\u0438\\u0441\\u043B\\u0430), \\u0434\\u043E\\u0432\\u0436\\u0438\\u043D\\u0430 \\u0432\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u043B\\u044E\\u0454\\u0442\\u044C\\u0441\\u044F \\u043A\\u043E\\u0440\\u0438\\u0441\\u0442\\u0443\\u0432\\u0430\\u0447\\u0435\\u043C \\u0430\\u0431\\u043E \\u043F\\u043E \\u0437\\u0430\\u043C\\u043E\\u0432\\u0447\\u0443\\u0432\\u0430\\u043D\\u043D\\u044E = 8 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u0430\\u043C; getRandomPassword(8)= <span>\".concat(getRandomPassword(), \"</span><br>\"));\ndocument.write(\"9)\\u0421\\u0442\\u0432\\u043E\\u0440\\u0456\\u0442\\u044C \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u0432\\u0438\\u0434\\u0430\\u043B\\u044F\\u0454 \\u0432\\u0441\\u0456 \\u0431\\u0443\\u043A\\u0432\\u0438 \\u0437 \\u0440\\u0435\\u0447\\u0435\\u043D\\u043D\\u044F. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: deleteLetters('a', \\\"blablabla\\\") -> \\\"blblbl\\\" = <span>\".concat(deleteLetters('a', \"blAblabla\"), \"</span><br>\"));\ndocument.write(\"10)\\u0421\\u0442\\u0432\\u043E\\u0440\\u0456\\u0442\\u044C \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0432\\u0456\\u0440\\u044F\\u0454, \\u0447\\u0438 \\u0454 \\u0441\\u043B\\u043E\\u0432\\u043E \\u043F\\u0430\\u043B\\u0456\\u043D\\u0434\\u0440\\u043E\\u043C\\u043E\\u043C. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: isPalyndrom(\\\"\\u043C\\u0430\\u0434\\u0430\\u043C\\\") -> true, isPalyndrom(\\\"\\u043A\\u043E\\u043A\\u043E\\u0441\\\") -> false, isPalyndrom(\\\"\\u042F \\u043D\\u0435\\u0441\\u0443 \\u0433\\u0443\\u0441\\u0435\\u043D\\u044F\\\") -> true <br>\\nisPalindrome(\\\"\\u043C\\u0430\\u0434\\u0430\\u043C\\\")= <span>\".concat(isPalindrome(\"мадам\"), \"</span><br>isPalindrome(\\\"\\u042F \\u043D\\u0435\\u0441\\u0443 \\u0433\\u0443\\u0441\\u0435\\u043D\\u044F\\\")= <span>\").concat(isPalindrome(\"Я несу гусеня\"), \"</span><br>\\nisPalindrome(\\\"\\u043A\\u043E\\u043A\\u043E\\u0441\\\")= <span>\").concat(isPalindrome(\"кокос\"), \"</span><br>\"));\ndocument.write(\"11)\\u0421\\u0442\\u0432\\u043E\\u0440\\u0456\\u0442\\u044C \\u0444\\u0443\\u043D\\u043A\\u0446\\u0456\\u044E, \\u044F\\u043A\\u0430 \\u0432\\u0438\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0437 \\u0440\\u0435\\u0447\\u0435\\u043D\\u043D\\u044F \\u0431\\u0443\\u043A\\u0432\\u0438, \\u044F\\u043A\\u0456 \\u0437\\u0443\\u0441\\u0442\\u0440\\u0456\\u0447\\u0430\\u044E\\u0442\\u044C\\u0441\\u044F \\u0431\\u0456\\u043B\\u044C\\u0448\\u0435 1 \\u0440\\u0430\\u0437\\u0443. \\u041F\\u0440\\u0438\\u043A\\u043B\\u0430\\u0434: deleteDuplicateLetter(\\\"\\u0411\\u0456\\u0441\\u043A\\u0432\\u0456\\u0442 \\u0431\\u0443\\u0432 \\u0434\\u0443\\u0436\\u0435 \\u043D\\u0456\\u0436\\u043D\\u0438\\u043C\\\") -> \\\"\\u0441\\u043A\\u0442\\u0434\\u0435\\u0438\\u043C\\\" = <span>\".concat(deleteDuplicateLetter('Бісквіт був дуже ніжним'), \"</span><br>\"));\n\n//# sourceURL=webpack://cursor-webpack/./src/modules/hw-3.js?");

/***/ }),

/***/ "./src/modules/hw-9.js":
/*!*****************************!*\
  !*** ./src/modules/hw-9.js ***!
  \*****************************/
/***/ (() => {

eval("var btnStart = document.querySelector('#generate');\nvar btnStop = document.querySelector('#interval');\nvar content = document.querySelector('#content');\nbtnStop.disabled = true;\nbtnStop.style.cursor = 'no-drop';\n\nfunction getRandomColor() {\n  return \"rgb(\".concat(Math.floor(Math.random() * 256), \",\").concat(Math.floor(Math.random() * 256), \",\").concat(Math.floor(Math.random() * 256), \")\");\n}\n\nfunction generateBlocks() {\n  for (var i = 0; i < 25; i++) {\n    var div = document.createElement('DIV');\n    div.style.height = '50px';\n    div.style.width = '50px';\n    div.style.backgroundColor = \"\".concat(getRandomColor());\n    content.append(div);\n  }\n\n  btnStop.disabled = false;\n  btnStop.style.cursor = 'pointer';\n  btnStart.disabled = true;\n}\n\nvar generateBlocksInterval = function generateBlocksInterval() {\n  var box = document.querySelectorAll(\"#content>div\");\n  setInterval(function () {\n    return box.forEach(function (el) {\n      return el.style.backgroundColor = \"\".concat(getRandomColor());\n    });\n  }, 1000);\n};\n\nbtnStart.addEventListener('click', generateBlocks, {\n  once: true\n});\nbtnStop.addEventListener('click', generateBlocksInterval);\n\n//# sourceURL=webpack://cursor-webpack/./src/modules/hw-9.js?");

/***/ }),

/***/ "./src/styles/style-hw10.css":
/*!***********************************!*\
  !*** ./src/styles/style-hw10.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cursor-webpack/./src/styles/style-hw10.css?");

/***/ }),

/***/ "./src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg":
/*!*******************************************************************************!*\
  !*** ./src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg\";\n\n//# sourceURL=webpack://cursor-webpack/./src/img/dj-playing-music-at-sound-mixer-in-night-club_53876-18678.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;