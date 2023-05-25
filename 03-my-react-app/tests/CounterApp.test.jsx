import { fireEvent, render, screen } from "@testing-library/react";
import {CounterApp} from "../src/Views/CounterApp";

describe('pruebas en CounterApp', () => {

    const initialValue = 100;

    test('debe de hacer match con el snapshot', () => {
        const {container} = render( <CounterApp value = {initialValue}/> );
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value = {initialValue} /> );
        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString());
    });

    test('debe de incrementar con el botón +1', () => {
        render( <CounterApp value = {initialValue} /> );
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialValue + 1)).toBeTruthy();
    });

    test('debe de decrementar con el botón -1', () => {
        render( <CounterApp value = {initialValue} /> );
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialValue - 1)).toBeTruthy();
    });

    test('debe de funcionar el botón de reset', () => {

        render( <CounterApp value = {initialValue} /> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(initialValue)).toBeTruthy();

    });

});