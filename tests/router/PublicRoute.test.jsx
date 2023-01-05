const { render,screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { PublicRoute } = require("../../src/router/PublicRoute");

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
        
      });
 });