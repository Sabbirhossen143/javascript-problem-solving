function findDuplicateNames(arr) {
  const frequency = {};

  for (let person of arr) {
    const name = person.name;

    frequency[name] = (frequency[name] || 0) + 1;
  }

  return Object.keys(frequency).filter(
    name => frequency[name] > 1
  );
}

console.log(
  findDuplicateNames([
    { name: "Ali" },
    { name: "Sara" },
    { name: "Ali" }
  ])
);

// ["Ali"]