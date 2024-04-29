interface Human {
    name: string,
    age: number,
    greeting(message: string): void,
}

const human: Human = {
    name: 'ken',
    age: 21,
    greeting(message: string): void {
        console.log(message);
    }
}