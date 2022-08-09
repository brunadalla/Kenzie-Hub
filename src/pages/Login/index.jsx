import { useNavigate } from "react-router-dom"
import FormLogin from "../../components/FormLogin"

import logo from '../../assets/Logo.svg'

import { LoginForm } from "./styles"


const Login = () => {

    const navigate = useNavigate()

    function btnRegister() {
       navigate('/register', { replace: true })
    }

    return (

        <LoginForm>

            <img src={logo} alt="Logo" />

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