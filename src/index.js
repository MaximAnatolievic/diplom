'use strict';

import modalwindows from './modules/modalwindows';
import sliding from './modules/sliding';
import scrolling from './modules/scrolling';
import calc from './modules/calc';
import validat from './modules/validat';
import sendForm from './modules/sendForm';

//Слайдеры
sliding();

//всплытие модальных окон
modalwindows();

//скроллинг
scrolling();

//калькулятор
calc();

//Валидация форм
validat();

//отправка форм
sendForm();