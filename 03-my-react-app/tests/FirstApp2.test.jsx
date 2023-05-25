import { getAllByText, render, screen } from '@testing-library/react';
import { FirstApp } from '../src/Views/FirstApp';

describe('Pruebas en <FirstApp/>', () => {

    const title = "test title";
    const subtitulo = "elsub";

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title = {title} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "test title"', () => {
        render(<FirstApp title = {title} />);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });

    test('debe de mostrar el título en un h1', () => {
        render(<FirstApp title = {title} />);
        expect(screen.getByRole('heading', {level: 1}))
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp 
                title = {title} 
                subtitulo = {subtitulo} 
            />);
        expect(screen.getAllByText(subtitulo).length).toBe(1);
    });
   
});