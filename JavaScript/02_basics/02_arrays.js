const marvel_heroes = ["thor", "Ironman","spiderman"]
const dc_heroes = ["superman","flash", "batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// const allhero=marvel_heroes.concat(dc_heroes);
// console.log(allhero);
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anoteher_array = another_array.flat(Infinity);
console.log(real_anoteher_array);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name:"Aman"})) //interesting

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));