const student = {
  name: "Mahad",
  age: 20,
  country: "Rwanda"
};

// for (const value of student) {
//   console.log(value);
// }
// Object.keys to get the value 
for (const value of  Object.keys(student)) {
  console.log(value);
};

// Object.values. Get property names;
for (const value of  Object.values(student)) {
  console.log(value);
}
// Object.entries - Get keys and values.
for (const value of  Object.entries(student)) {
  console.log(value);
}

