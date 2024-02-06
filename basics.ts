let userName: string = "Daniel";
let hasLoggedIn: boolean = true;

//hasLoggedIn += " Alonso";
//console.log("hasLoggedIn", hasLoggedIn);

userName += " Alonso";
console.log("userName", userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ", 2);
const myValues: Array<number> = [1, 2, 3];

interface Person {
    first: string;
    last: string;
}


const myPerson/*: {
    first: string;
    last: string;
} */= {
    first: "Daniel",
    last: "Alonso"
};

const ids: Record<number, string> = {
    10: "a",
    20: "b",
}

ids[30] = "c";

if (ids[30] === "D") {
    //...
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach((v: number) => console.log(`\t${v}`));

const out = [4, 5, 6].map((v: number) => v * 10);
console.log(out);


