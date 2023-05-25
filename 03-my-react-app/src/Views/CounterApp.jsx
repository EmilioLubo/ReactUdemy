import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button ,ButtonGroup } from 'react-bootstrap';

export const CounterApp = ({value}) =>{
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter -1);
    const handleReset = () => setCounter(value);

    return(
        <header className='d-flex flex-column align-items-center'>
                <h1 className='text-center'>CounterApp</h1>
                <h2 className='text-center'>{ counter }</h2>
                <ButtonGroup>
                    <Button variant="warning" className="me-1" onClick={ handleSubstract }>-1</Button>
                    <Button variant="danger" className="me-1" onClick={ handleReset }>Reset</Button>
                    <Button variant="success" onClick={ handleAdd }>+1</Button>
                </ButtonGroup>
        </header>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}