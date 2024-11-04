const { somar, subtrair } = require("../src");


test("1 + 1 é igual a 2", () => {
    const valorEsperado = 2;
    expect(somar(1,1)).toBe(valorEsperado);
});

test("2 - 1 é igual a 1", () => {
    const valorEsperado = 1;
    expect(subtrair(2,1)).toBe(valorEsperado);
});
