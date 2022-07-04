console.log("hola");

function compareCities(c1, c2) {
  // Add your code here

  var keysC1 = [];
  var keysC2 = [];
  var valuesC1 = [];
  var valuesC2 = [];

  for (let key in c1) {
    keysC1.push(key);
  }

  for (let key in c2) {
    keysC2.push(key);
  }

  for (let key in c1) {
    valuesC1.push(c1[key]);
  }

  for (let key in c2) {
    valuesC2.push(c2[key]);
  }

  if (keysC1.length !== keysC2.length) {
    return false;
  }

  for (let i = 0; i < keysC1.length; i++) {
    if (keysC1[i] !== keysC2[i]) {
      return false;
    }
  }

  for (let i = 0; i < valuesC1.length; i++) {
    if (valuesC1[i] !== valuesC2[i]) {
      return false;
    }
  }
  return true;
}

console.log(compareCities({}, {}));
console.log(compareCities({ name: "San Jose" }, { name: "San Jose" }));
console.log(compareCities({ name: "San Jose" }, { otherkey: "San Jose" }));
console.log(compareCities({ name: "Dresden" }, { name: "Dresden" }));
console.log(
  compareCities({ name: "Raleigh" }, { name: "Raleigh", income_pc: 1200000 })
);
