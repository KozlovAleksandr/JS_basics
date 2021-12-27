'use strict';


// ----------- ЗАДАНИЕ 1 -----------

for (let i = 0; i <= 10; i++) {
  switch (true) {
    case (i * 10 == i):
      console.log(`${i} - это ноль`);
      break;
    case (i % 2 == 0):
      console.log(`${i} - чётное число`);
      break;
    case (i % 2 !== 0):
      console.log(`${i} - нечётное число`);
  }
}

// ----------- ЗАДАНИЕ 2 -----------

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [{
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2 //вывести это число
      }
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1
      }
    },
  ]
};

function goDeeper(obj) {
  for (let prop in obj) {
    if (prop == 'author' ||
      prop == 'dislikes' ||
      prop == 'userId' ||
      prop == 'text') {
      console.log(obj[prop]);
    }
    if (typeof (obj[prop]) === 'object') {
      goDeeper(obj[prop]);
    }
  }
}

goDeeper(post);


// ----------- ЗАДАНИЕ 3 -----------

const products3 = [{
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];
/**
 * Устанавливает размер скидки для принятых в виде массива продуктов
 * @param {object} list массив продуктов
 * @param {number} discount размер скидки 
 */
function setDiscount(list, discount) {
  list.forEach(function (item) {
    for (let i in item) {
      if (i == 'price') {
        item.price = item.price - (item.price * discount / 100);
      }
    }
  });
}

setDiscount(products3, 15);
console.log(products3);


// ----------- ЗАДАНИЕ 4 -----------

const products4 = [{
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  }, {
    id: 8,
    price: 78,
  },
];


/**
 * Проверяет свойство photos на пустоту
 */
const withImage = products4.filter(function (list) {
  for (let i in list) {
    if (i == 'photos' && list[i].length !== 0) {
      return list;
    }
  }
});

/**
 * Сортирока по возрастанию цены
 */
const priceLowToHigh = products4.sort(function (a, b) {
  return a.price - b.price;
});

console.log(withImage);
console.log(priceLowToHigh);


// ----------- ЗАДАНИЕ 5 -----------

let arr = [];
for (; range();) {}

function range() {
  let i = 0;
  while (i < 10) {
    arr[i] = i;
    i++;
  }
  console.log(arr);
}


// ----------- ЗАДАНИЕ 6 -----------

let str = "";
for (let i = 0; i < 20; i++) {
  str += "x";
  console.log(str);
}