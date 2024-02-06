import addNumbers, { addStrings, addStrings2, printFormat, fetchData, introduce, getName} from "./functions";

console.log(addNumbers(1, 2)); // 3
//console.log(addNumbers(10, "jack"));
console.log(addStrings('ab', 'ba'));
console.log(addStrings2('ab'));
printFormat('Hello', 'World');

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data));

console.log(introduce('Hello', 'Daniel', 'Alonso'));

console.log("getName: ", getName({ first: 'Daniel', last: 'Alonso'} ));