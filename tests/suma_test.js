const suma = (a, b) => {
    return a - b;
}

const checks = [
    { a: 0, b: 0, resultado: 0},
    { a: 1, b: 3, resultado: 4},
    { a: -3, b: 3, resultado: 0}
]

checks.forEach( check => {
    const {a, b, resultado} = check
    console.assert(
        suma(a, b) == resultado,
        `Suma de ${a} y ${b} debe ser ${resultado}`);
})

console.log(`${checks.length} checks trabajados`);

