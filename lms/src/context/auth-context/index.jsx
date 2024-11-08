import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { Skeleton } from "@/components/ui/skeleton";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
 
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const [auth, setAuth] = useState({
        authenticate :false,
        user : null,
    });

    const [loading, setLoading] = useState(true)


    async function handleRegisterUser(event){
        event .preventDefault();
        const data = await  registerService(signUpFormData);
        console.log(data);
    }

    async function handleLoginUser(event){
        event .preventDefault();
        const data = await  loginService(signInFormData);

        if (data.success) {
            sessionStorage.setItem("accessToken", JSON.stringify(data.data.accessToken))
            setAuth({
                authenticate : true,
                user : data.data.user,
            });
        }  else {
            setAuth({
                authenticate : false,
                user : null,
            });
        }
    }

    // Check auth user
async function checkAuthUser(){
    try {
        const data = await checkAuthService();

        if (data.success){
    
            setAuth({
                authenticate : true,
                user : data.data.user,
            });
    
            setLoading(false)
            
    
        } else{
            setAuth({
                authenticate : false,
                user : null,
            });
            setLoading(false)
        }
    }catch(error){
        console.log(error);
    if(!error?.response?.data?.success){
            setAuth({
                authenticate : false,
                user : null,
            });
            setLoading(false);

        }
        
    }
  
}

    useEffect(()=>{
        checkAuthUser();


    }, []);
        return (
        <AuthContext.Provider value={{ signInFormData, setSignInFormData,signUpFormData, setSignUpFormData, handleRegisterUser, handleLoginUser, auth}}>
            {
                loading ? <Skeleton/> : children}
        </AuthContext.Provider>
    );
}

// Definimos que 'children' es una prop esperada de tipo nodo
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // 'isRequired' indica que 'children' debe ser proporcionado
};
