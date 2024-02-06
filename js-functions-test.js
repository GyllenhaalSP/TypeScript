const {getName} = require('./functions');

console.log(getName( {first: 'Daniel', last: 'Alonso'})); // {name: 'Daniel Alonso'}
console.log(getName()); // {name: 'Daniel last'}