import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('tests sur authReducer', () => {
    test('Il doit retourner le etat etablise', () => { 
        const state = authReducer({logged:false}, {});
        expect(state).toEqual(state)
    });

    test('la function du login doit etablir ce qui est neccesaire pour sabonner', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: 123
            }
        }

        const state = authReducer({logged:false},action);
        expect(state).toEqual({
            logged:true,
            user:action.payload
        })
    });

    test('la function du logout doit arreter le logiciel et tourner blanche le etat', () => { 
        const state = {
            logged: true,
            user:{
                id:123,
                name:'Juan'
            }
        }

        const action = {
            type: types.logout
        } 

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged:false});
        


    });
});