const {usContext} = require("../../src/base-pruebas/06-deses-obj");

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objeto', () =>{
        const testUser = {
            nombre: 'Tony',
            clave: 'Ironman',
            edad: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const user = usContext(testUser);

        expect(user).toEqual({
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    })
});
        