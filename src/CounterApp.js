
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

const CounterApp = ({ value = 10 }) => {


    const [ counter, setCounter ] = useState( value );

    //handleAdd
    const handleAdd = (e) => { // para incrementar el valor
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 );
    }

    const handleSubtract = (e) => { // para restar un valor
        setCounter( counter - 1 );
    }

    const handleReset = ( e ) => { // para resetear el valor por defecto
        setCounter( value );
    }

    //const reset = value;


    return ( 
        <>
            <h1>CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </> 
    ); 

}

CounterApp.propTypes = {
    valor: PropTypes.number
}


export default CounterApp;
