// EXAMPLE 1 - Split a String removing any Empty Elements in JavaScript

const str = ' bobby   hadz com ';

const arr = str.split(' ').filter(element => element);
console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String removing any Empty Elements using Boolean()

// const str = ' bobby  hadz  com ';

// const arr = str.split(' ').filter(Boolean);
// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a String removing any Empty Elements using `match`

// const str = ' bobby hadz   com ';

// const arr = str.match(/\S+/g);
// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]
