import React from 'react';

import '@testing-library/jest-dom';
//import { render  } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow, mount, render } from 'enzyme';

describe('pruebas en <PrimeraApp />', () => {
    
     /*
    test('debe mostrar el msj "hola soy goku" ', () => {
   
       const saludo = 'Hola, Soy Goku';

        const { getByText }  = render( <PrimeraApp saludo={ saludo }  /> )
        
        expect( getByText(saludo ) ).toBeInTheDocument();
    
    });
    */

    test('debe mostrar <PrimeraApp /> correctamente ', () => {
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar el subtitulo enviado por props ', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo ='Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo);
    });
    
    
});
