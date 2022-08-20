import { ReactNode } from "react";
import { TechProvider } from "../contexts/TechContext";
import { UserProvider } from "../contexts/UserContext";

interface IProviderProps {
    children: ReactNode
}

const Providers = ({ children }: IProviderProps) => {
    return ( 
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>)
};

export default Providers;