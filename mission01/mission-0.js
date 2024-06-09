function getValueAtObject(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    throw new Error(`Error!`);
  }
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

try {
  console.log(getValueAtObject(person, "name")); // 'Alice'
  console.log(getValueAtObject(person, "age")); // 25
  console.log(getValueAtObject(person, "city")); // 'Wonderland'
  console.log(getValueAtObject(person, "country")); // Error !
} catch (e) {
  console.error(e.message);
}

/*-------------------------------------------------------------------*/

function getNumberAtArray(arr, index) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "Error!";
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
