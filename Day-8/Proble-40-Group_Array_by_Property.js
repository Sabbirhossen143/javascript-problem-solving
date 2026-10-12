function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);

    return result;
  }, {});
}