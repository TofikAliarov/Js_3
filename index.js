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
