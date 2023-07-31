import { createContext, useReducer, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { portfolio: action.payload }
        case 'LOGOUT':
            return { portfolio: null }

        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {

    // const navigate = useNavigate()
    const [state, dispatch] = useReducer(authReducer, {
        portfolio: null
    })

    // console.log("AuthContext state", state);

    useEffect(() => {
        const portfolio = localStorage.getItem('user');

        // var theUser = JSON.parse(user);

        if (portfolio) {
            
                dispatch({ type: 'LOGIN', payload: portfolio })
               
        }


    }, [])


    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}