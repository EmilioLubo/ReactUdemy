import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retornar un URL de la imágen', async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
    // test('getImagen debe de retornar un error si no se encuentra la imágen', async() => {
    //      const res = await getImagen();
    //      expect(res).toBe('No se encontró la imágen');
    //     })
})