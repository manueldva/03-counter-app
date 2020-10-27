import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba  en 05-funciones', () => {
    
    test('getUser deber retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    test('getUsuarioActivo deber retornar un objeto ', () => {
        
        const nombre = 'David';

        const usuarioActivo = getUsuarioActivo(nombre);

        expect( usuarioActivo ).toEqual(  {
            uid: 'ABC567',
            username: nombre
        });

    })
    
})
