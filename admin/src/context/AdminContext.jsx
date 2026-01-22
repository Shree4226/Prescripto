import { useState } from "react";
import { createContext } from "react";

export const AdminConext = createContext()

const AdminContextProvider = (props) =>{

    const [aToken, setAToken] = useState('')

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const value={
        aToken, setAToken,
        backendUrl

    }
    return (
        <AdminConext.Provider value={value}>
            {props.children}
        </AdminConext.Provider>
    )
}

export default AdminContextProvider