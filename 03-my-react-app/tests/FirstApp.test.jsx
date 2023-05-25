import { render } from '@testing-library/react';
import { FirstApp } from '../src/Views/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = "Hola mundo";
    //     const {container} = render(<FirstApp title={title} />);
    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el título en un h1', () =>{
        const title = 'Hola pedro';
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy;
        expect(getByTestId('test-title').innerHTML).toContain(title);
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
    })

    test('debe de mostrar el subtítulo enviado por props', () => {
        const title = 'hermoso día';
        const subtitulo = 'hermoso sub';
        const {getAllByText} = render(<FirstApp title={title} subtitulo={subtitulo} />);

        expect(getAllByText(subtitulo).length).toBe(1);
    })
});