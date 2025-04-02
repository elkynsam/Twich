import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginas as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = ()=>{

    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate()

    const login = async (email, password) =>{
        setIsloading(true)

        const response = await loginRequest({
            email,
            password
        })
        setIsloading(false)

        if(response.error){
            return toast.error(response.error?response?.data || 'ocurrio un error al iniciar')
        }

        const { userDatails } = response.data

        localStorage.setItem('user', JSON.stringify(userDatails));

        navigate('/')
    }
}