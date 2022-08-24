/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

console.log('this is a to-do app');
const btnAddTask = document.querySelector('#addTask');
const taskTitle = document.querySelector('#taskTitle');
const clearInput = () => {
    taskTitle.value = '';
};
btnAddTask === null || btnAddTask === void 0 ? void 0 : btnAddTask.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.classList.add('to-do__item');
    newItem.innerHTML = `
      <input type="checkbox">
      ${taskTitle.value}
      <button class="to-do__exclude">x</button>
      <button class="to-do__edit">Editar</button>
      `;
    const list = document.querySelector('#list');
    list === null || list === void 0 ? void 0 : list.appendChild(newItem);
    clearInput();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtMi8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnNvbGUubG9nKCd0aGlzIGlzIGEgdG8tZG8gYXBwJyk7XHJcbmNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFzaycpO1xyXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1RpdGxlJyk7XHJcbmNvbnN0IGNsZWFySW5wdXQgPSAoKSA9PiB7XHJcbiAgICB0YXNrVGl0bGUudmFsdWUgPSAnJztcclxufTtcclxuYnRuQWRkVGFzayA9PT0gbnVsbCB8fCBidG5BZGRUYXNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kb19faXRlbScpO1xyXG4gICAgbmV3SXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgJHt0YXNrVGl0bGUudmFsdWV9XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJ0by1kb19fZXhjbHVkZVwiPng8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvLWRvX19lZGl0XCI+RWRpdGFyPC9idXR0b24+XHJcbiAgICAgIGA7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcclxuICAgIGxpc3QgPT09IG51bGwgfHwgbGlzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGlzdC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcclxuICAgIGNsZWFySW5wdXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==