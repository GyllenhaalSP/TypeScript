//resolveJsonModule and esModuleInterop are set to true in tsconfig.json
import houses from "./houses.json";

interface House {
    name: string;
    planets: string | string[];
}

interface HouseWithID extends House {
    id: number;
}

function findHouses(
    input: string | House[],
    filter?: (house: House) => boolean
): HouseWithID[] {
    const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

    return (filter ? houses.filter(filter) : houses).map((house) => ({
        id: houses.indexOf(house) + 1,
        ...house,
    }));
}

console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

console.log(findHouses(houses));

console.log(findHouses(JSON.stringify(houses)));