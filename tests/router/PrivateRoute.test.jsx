const { render,screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";


describe('pruebas en private route', () => { 
    test('debe mostrar children si esta autenticado', () => {
        Storage.prototype.setItem=jest.fn();

        const contextValue = {
            logged: true,
            user:{
                id:'abc123',
                name:'Alex'
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                <PrivateRoute>
                    <h1>Ruta privada</h1>
                </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
     });
     
 });