// function type parameters
export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

// functions with params
export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// functions as types
type MutationFunction = (v: number) => number;

const myNewMutateFunction: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], myNewMutateFunction));

// returning functions
export type AdderFunction = (v: number) => number;

export function createAdder(num: number): AdderFunction {
    return (v: number) => num + v;
}

const addOne = createAdder(1);

console.log(addOne(55));