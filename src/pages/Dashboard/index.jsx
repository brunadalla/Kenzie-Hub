import { useContext } from "react"

import { useNavigate, Navigate } from "react-router-dom"

import logo from '../../assets/Logo.svg'

import { Home, TechList } from "./styles"

import { UserContext } from "../../contexts/UserContext"
import { TechContext } from "../../contexts/TechContext"

const Dashboard = () => {

    const {userInfo, token} = useContext(UserContext)
    const {listTechs, setIdTech} = useContext(TechContext)
    
    const navigate = useNavigate()
    
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

                    <section className="tech-section">

                        <div>

                            <h3>Tecnologias</h3>
                            <button>Add</button>

                        </div>

                        <TechList>
                            {
                                listTechs.map((tech, index) => 

                                    <li key={index}>

                                        <strong>{tech.title}</strong>

                                        <div>

                                            <span>{tech.status}</span>
                                            <button className="btn-info" id={tech.id}></button>
                                            
                                        </div>

                                    </li>
                                )
                            }
                        </TechList>

                    </section>

                </main>

            </Home>
        
        :

            <Navigate to='/login'/> 

    )
}

export default Dashboard