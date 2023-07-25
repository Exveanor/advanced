export class Person {
    constructor(name) {
        this.name = name;
    }
}

export function test() {
    console.log("Test export function here.")
}

export let arr = getFromServer()