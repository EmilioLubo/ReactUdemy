import {getHeroeById} from '../../src/base-pruebas/08-imp-exp';
import {getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () =>{
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe de retornar undefined si no existe el ID', () =>{
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });


    test('getHeroeByOwner debe de retornar un arreglo con los héroes de DC', () =>{
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    });

    test('getHeroeByOwner debe de retornar un arreglo con los héroes de Marvel', () =>{
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    });
});