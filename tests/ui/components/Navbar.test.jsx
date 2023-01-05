import { fireEvent, render,screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));

describe('tests en navbar', () => { 
    const contextValue={
        logged: true,
        user: {
            name:'Alex'
        },
        logout: jest.fn()
    }
    beforeEach(()=>jest.clearAllMocks());
    test('debe mostrar el nombre del usuario loggeado', () => { 
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Alex')).toBeTruthy();
    });

    test('debe llamar el logout y navigate al hacer click en logout', () => { 
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace':true})
    });
});