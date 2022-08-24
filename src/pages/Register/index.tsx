import { useNavigate } from "react-router-dom"

import FormRegister from "../../components/FormRegister"
import Logo from "../../components/Icons/Logo"

import { RegisterForm } from "./styles"

const Register = () => {

    const navigate = useNavigate()

    function btnReturn() {
       navigate('/login', { replace: true })
    }

    return (

        <RegisterForm>

            <header>

                <Logo/>
                <button onClick={() => btnReturn()}>Voltar</button>

            </header>

            <main>

                <div>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa!</p>
                </div>
                
                <FormRegister/>

            </main>

        </RegisterForm>
        
    )
}

export default Register