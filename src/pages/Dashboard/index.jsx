import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"

import api from "../../services/api"
import logo from '../../assets/Logo.svg'

import { Home } from "./styles"

const Dashboard = () => {

    const [userInfo, setUserInfo] = useState({})
    
    const navigate = useNavigate()
    const token    = localStorage.getItem('@TOKEN')

    useEffect(() => {
        if (token) {
        
            api.get(`/users/${localStorage.getItem('@USERID')}`)
            .then((res) => {
            console.log(res.data)
            setUserInfo(res.data)
            })
           .catch(err => console.log(err))
        }
    }, [])

    function handleLogout() {
        localStorage.removeItem('@USERID')
        localStorage.removeItem('@TOKEN')

        navigate('/login', {replace: true})
    }

    return (

        token ? 

            <Home>

                <header>

                    <div>

                        <img src={logo} alt="logo" />
                        <button onClick={() => handleLogout()}> Sair </button>

                    </div>


                </header>

                <main>

                    <section className="user-info">

                        <div>

                            <h2>Olá, {userInfo.name}</h2>
                            <p>{userInfo.course_module}</p>

                        </div>

                        

                    </section>

                    <section className="main-section">

                        <div>

                            <h2> Que pena! Estamos em desenvolvimento </h2>
                            <p> Nossa aplicação está em desenvolvimento, em breve teremos novidades </p>

                        </div>

                    </section>

                </main>

            </Home>
        
        :

            <Navigate to='/login'/> 

    )
}

export default Dashboard