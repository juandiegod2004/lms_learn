import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { initialSignInFormData, initialSignUpFormData } from "@/config";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
 
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    return (
        <AuthContext.Provider value={{ signInFormData, setSignInFormData,signUpFormData, setSignUpFormData}}>
            {children}
        </AuthContext.Provider>
    );
}

// Definimos que 'children' es una prop esperada de tipo nodo
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // 'isRequired' indica que 'children' debe ser proporcionado
};
