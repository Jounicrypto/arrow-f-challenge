//Convert to arrow function

let names = (...names) => names.join(" | ");

    console.log(names("Tim", "Nick", "Ali", "Mark", "John"));



//Anonymouce Function
let myNumbers = [20, 50, 10, 60];

let calc = function (one, two, ...nums) {
    return one + two + parseInt(nums);
}
console.log(calc(10, 50, 20));
