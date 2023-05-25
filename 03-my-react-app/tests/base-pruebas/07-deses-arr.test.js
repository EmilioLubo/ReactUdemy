const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");

describe('Pruebas en 07-deses-arr', () => {
    test('debe de retornar un STring y un númerero', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(numbers).toEqual(expect.any(Number));
    });
});