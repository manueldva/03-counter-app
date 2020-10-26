
import { getSaludo } from '../../base/02-template-string';


describe('prueba en 02-template-string.js', () => {
    
    test('getSaludo debe retornar hola fernando!', () => {
        
        const nombre = 'Fernando';
        
        const saludo = getSaludo( nombre );  

        expect( saludo ).toBe( 'Hola ' + nombre  + '!');

    })


    test('getSaludo debe retornar hola valor por defecto!', () => {
        
        const saludo = getSaludo( );  

        expect( saludo ).toBe( 'Hola Carlos!');

    })
    
})
