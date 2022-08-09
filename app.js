const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.56.11:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Check Entry. No name specified."],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const peach = new Fruit({
//   name: "Peaches",
//   rating: 9,
//   review: "Peaches review.",
// });

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 7,
//   review: "This is review for Pineapple.",
// });

// pineapple.save();

const melon = new Fruit({
  name: "Melon",
  rating: 8,
  review: "This is review for Melon.",
});

melon.save();

// const person = new Person({
//   name: "John",
//   age: 34,
// });

// const person = new Person({
//   name: "Ashley",
//   age: 54,
//   favoriteFruit: pineapple,
// });

// person.save();

// const mango = new Fruit({
//   name: "Mango",
//   rating: 8,
//   review: "This is review for Mango.",
// });

// const atis = new Fruit({
//   name: "Atis",
//   rating: 4,
//   review: "This is review for Atis.",
// });

// const guyabano = new Fruit({
//   name: "Guyabano",
//   rating: 5,
//   review: "This is review for Guyabano.",
// });

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

// Fruit.updateOne(
//   { _id: "62f1bb79b04505df63001ae2" },
//   { name: "Chico", review: "Chico Review" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Success updating.");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "62f1bb79b04505df63001ae2" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success in deleting.");
//   }
// });

Person.updateOne({ name: "John" }, { favoriteFruit: melon }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success updating.");
  }
});
