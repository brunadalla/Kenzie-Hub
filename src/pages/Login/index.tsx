import { useNavigate } from "react-router-dom"
import FormLogin from "../../components/FormLogin"

import Logo from "../../components/Icons/Logo.jsx"

import { LoginForm } from "./styles"


const Login = () => {

    const navigate = useNavigate()

    function btnRegister() {
       navigate('/register', { replace: true })
    }

    return (

        <LoginForm>

            <Logo/>

            <main>

                <h2> Login </h2>

                <FormLogin/>

                <div>

                    <p> Ainda não possui uma conta? </p>

                    <button onClick={() => btnRegister()}> Cadastre-se </button>

                </div>

            </main>

        </LoginForm>

    )
}

export default Login