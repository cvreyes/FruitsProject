const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.56.11:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 34,
});

// person.save();

const mango = new Fruit({
  name: "Mango",
  rating: 8,
  review: "This is review for Mango.",
});

const atis = new Fruit({
  name: "Atis",
  rating: 4,
  review: "This is review for Atis.",
});

const guyabano = new Fruit({
  name: "Guyabano",
  rating: 5,
  review: "This is review for Guyabano.",
});

// Fruit.insertMany([mango, atis, guyabano], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success!");
//   }
// });

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});
