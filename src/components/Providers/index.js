import { TechProvider } from "../../contexts/TechContext";
import { UserProvider } from "../../contexts/UserContext";

const Providers = ({ children }) => {
    return ( 
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>)
};

export default Providers;