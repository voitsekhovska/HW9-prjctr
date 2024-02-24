"use strict";

// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval

function detonatorTimer(delay) {
  let count = delay;

  const detonationId = setInterval(() => {
    console.log(count--);
    if (count === 0) {
      clearInterval(detonationId);
      console.log("BOOM!");
    }
  }, 1000);
}

detonatorTimer(5);

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout

function detonatorTimer(delay) {
  function interval() {
    if (delay > 0) {
      console.log(delay--);
      setTimeout(interval, 1000);
    } else console.log("BOOM!");
  }
  interval();
}
detonatorTimer(5);

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.

let myPersonality = {
  name: "Jane",
  age: 30,
  currentPlace: "USA",
  originalCity: "Melitopol",
  hobby: "reading",
  genre: "fantasy",
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  },
  location() {
    console.log(
      `Originaly I'm from ${this.originalCity}, but currently I'm in ${this.currentPlace} because my husband works here on the horse farm.`
    );
  },
  favorites() {
    console.log(`I love ${this.hobby} and my favorite type of books is ${this.genre}.`);
  },
};
myPersonality.introduce();
myPersonality.location();
myPersonality.favorites();

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту

let securedSelfIntroduce = myPersonality.introduce.bind(myPersonality);
let securedLocation = myPersonality.location.bind(myPersonality);
let securedFavorites = myPersonality.favorites.bind(myPersonality);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedLocation, 2000);
setTimeout(securedFavorites, 3000);