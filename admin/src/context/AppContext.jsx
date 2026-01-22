import { createContext } from "react";

export const AppConext = createContext()

const AppContextProvider = (props) =>{
    const value={

    }
    return (
        <AppConext.Provider value={value}>
            {props.children}
        </AppConext.Provider>
    )
}

export default AppContextProvider