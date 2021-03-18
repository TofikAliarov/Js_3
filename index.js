Array.prototype.myFilter = function (callback) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    const el = this[i];
    if (callback(el, i, this)) {
      filteredArr.push(el);
    }
  }

  return filteredArr;
};

function createDebounceFunction(func, ms) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, ms);
  };
}
const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 мс, то таймер запускается заново
setTimeout(debounceLog100, 400);

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 5, 6];
console.log(arr.filter((el) => el > 5));
console.log(arr.myFilter((el) => el > 5));
