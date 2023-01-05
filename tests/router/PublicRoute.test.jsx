const { render,screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { PublicRoute } = require("../../src/router/PublicRoute");
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('pruebas en public route', () => { 
    test('debe mostrar children si no esta autenticado', () => { 
        const contextValue = {
            logged: false
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta publica')).toBeTruthy();
     });

     test('debe navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user:{
                name:'Holi',
                id:'abc123'
            }
        }
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Marvel Page</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Marvel Page')).toBeTruthy();
      });
 });