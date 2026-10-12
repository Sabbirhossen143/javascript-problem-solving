function flattenObject(obj, parent = "", result = {}) {
  for (let key in obj) {
    const newKey = parent ? `${parent}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}