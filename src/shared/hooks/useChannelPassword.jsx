import toast from "react-hot-toast";
import { channerlPassword as channerlPasswordRequest } from "../../services";


export const useChangePassword = () =>{
    const useChangePassword = async (password, newPassword) =>{
        const responseData = await changePasswordRequest({password, newPassword});
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || 'no fue posible actualizar'
            )
        }
        toast.success('password actualizado')
    }
    return {
        changePassword
    }

}