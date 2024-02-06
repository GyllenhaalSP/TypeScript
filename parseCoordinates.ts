// function overloading
interface Coordinate {
    x: number;
    y: number;
}

// implementation 1
function parseCoordinates(obj: Coordinate): Coordinate {
    return {
        ...obj,
    };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y,
    };
}

// implementation 2
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;
// unknown is a type that represents any value, but we have to do some type of checking to use it
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };

    if (typeof arg1 === "object") {
        coord = {
            ...(arg1 as Coordinate),
        };
    } else if (typeof arg1 === "number" && typeof arg2 === "number") {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        };
    } else if (typeof arg1 === "string") {
        (arg1 as string).replaceAll(" ", "").split(",").forEach((str) => {
            const [key, value] = str.split(":");
            coord[key as "x" | "y"] = parseInt(value, 10);
        });
    }
    return coord;
}

console.log(parseCoordinates({ x: 100, y: 200 }));
console.log(parseCoordinateFromNumbers(1000, 2000));
console.log(parseCoordinate({ x: 300, y: 400 }));
console.log(parseCoordinate(3000, 4000));
console.log(parseCoordinate("x:23, y:33"));
