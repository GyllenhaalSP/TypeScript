function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

// const functions
export const addStrings = (str1: string, str2: string): string => `${str1}-${str2}`;
// with default values
export const addStrings2 = (str1: string, str2: string = ""): string => `${str1}-${str2}`;
// union types
export const format = (title: string, param: string | number): string => `${title} ${param}`;
// void functions
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};
// promise functions
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);
// Rest parameters
export const introduce = (salutation: string, ...names: string[]): string => `${salutation} ${names.join(" ")}`;

export function getName(user: { first: string; last: string }): string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}

