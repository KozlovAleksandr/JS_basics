'use strict';


// ----------- ЗАДАНИЕ 1.1 (обязательное) -----------

// ----------- ES 5 -----------
function Product1(name, price) {
  this.name = name;
  this.price = price;
}

Product1.prototype.make25PercentDiscount = function () {
  this.price = this.price - (this.price * 25 / 100);
};

let prodES5 = new Product1('PS5', '400');
prodES5.make25PercentDiscount();
console.log(prodES5);

// ----------- ES 6 -----------
class Product2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    this.price = this.price - (this.price * 25 / 100);
  }
}

let prodES6 = new Product2('PS6', '600');
prodES6.make25PercentDiscount();
console.log(prodES6);

// ----------- ЗАДАНИЕ 1.2 (обязательное) -----------

// ----------- ES 5 -----------
function Post1(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post1.prototype.edit = function (newText) {
  this.text = newText;
};

function AttachedPost1(author, text, date) {
  Post1.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype.constructor = AttachedPost1;

AttachedPost1.prototype.makeTextHighlighted = function () {
  if (this.highlighted == false) {
    this.highlighted = true;
  } else {
    this.highlighted = false;
  }
};

let messageES5 = new AttachedPost1('Unknown', 'Hello', '30.12');
messageES5.edit('Bye');
messageES5.makeTextHighlighted();
console.log(messageES5);

// ----------- ES 6 -----------
class Post2 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(newText) {
    this.text = newText;
  }
}

class AttachedPost2 extends Post2 {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    if (this.highlighted == false) {
      this.highlighted = true;
    } else {
      this.highlighted = false;
    }
  }
}

let messageES6 = new AttachedPost2('Famous', 'Winter', '30.12');
messageES6.edit('Summer');
messageES6.makeTextHighlighted();
console.log(messageES6);

// ----------- ЗАДАНИЕ 1 -----------

class DigitObj {
  constructor(units, tens, hundereds) {
    this.units = units;
    this.tens = tens;
    this.hundereds = hundereds;
  }
}
let digitals = new DigitObj();

/**
 * Функция запрашивает число от 0 до 999 ,
 * разбивает указанное число на разряды 
 * и передаёт в конструктор
 */
function fillObject() {
  let num = prompt("Введите число от 0 до 999");
  if (Number.isInteger(+num) && num.length < 4) {

    let unit = num % 10;
    let ten = Math.floor(num % 100 / 10);
    let hundered = Math.floor(num / 100);
    digitals = new DigitObj(unit, ten, hundered);
    console.log(digitals);
  } else {
    alert("Ввели что-то не то");
    console.log(digitals);
  }
}

fillObject();