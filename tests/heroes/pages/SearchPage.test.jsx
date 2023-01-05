import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Search } from "../../../src/heroes/pages/Search";

describe('pruebas en search', () => { 
    test('debe de mostrarse correctamente con valores por defecto', () => { 
        const {container} = render(
            <MemoryRouter>
                <Search/>
            </MemoryRouter>
        );
     expect(container).toMatchSnapshot();
     });

    test('debe de mostrar a batman y el valor del query string', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Search/>
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        
        const image = screen.getByRole('img');
        expect(image.src).toContain('/assets/heroes/dc-batman.jpg');
        
        const alert = screen.getByLabelText('alert-danger');
        console.log(alert);
        expect(alert.style.display).toBe('none');
    });

 });