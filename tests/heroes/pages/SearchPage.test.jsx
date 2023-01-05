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
 })