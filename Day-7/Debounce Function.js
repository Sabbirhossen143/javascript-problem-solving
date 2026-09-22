function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}