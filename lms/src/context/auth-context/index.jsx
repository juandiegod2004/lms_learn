import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { loginService, registerService } from "@/services";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
 
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const [auth, setAuth] = useState({
        authenticate :false,
        user : null,
    });


    async function handleRegisterUser(event){
        event .preventDefault();
        const data = await  registerService(signUpFormData);
        console.log(data);
    }

    async function handleLoginUser(event){
        event .preventDefault();
        const data = await  loginService(signInFormData);

        if (data.success) {
            console.log(data, "data");
            sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken))
            setAuth({
                authenticate : true,
                user : data.data.user,
            })
        }
    }

    return (
        <AuthContext.Provider value={{ signInFormData, setSignInFormData,signUpFormData, setSignUpFormData, handleRegisterUser, handleLoginUser}}>
            {children}
        </AuthContext.Provider>
    );
}

// Definimos que 'children' es una prop esperada de tipo nodo
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // 'isRequired' indica que 'children' debe ser proporcionado
};
