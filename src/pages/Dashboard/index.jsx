import { useContext } from "react"

import { useNavigate, Navigate } from "react-router-dom"

import logo from '../../assets/Logo.svg'

import {ReactComponent as AddIcon} from '../../assets/addIcon.svg'
import {ReactComponent as InfoIcon} from '../../assets/infoIcon.svg' 
import { Home, TechList } from "./styles"

import { UserContext } from "../../contexts/UserContext"
import { TechContext } from "../../contexts/TechContext"
import AddTechModal from "../../components/AddTechModal"
import EditTechModal from "../../components/EditTechModal"

const Dashboard = () => {

    const {userInfo, token} = useContext(UserContext)
    const {listTechs, setIsAddModalVisible, setIsEditModalVisible, setTech} = useContext(TechContext)
    
    const navigate = useNavigate()
    
    function handleLogout() {
        localStorage.removeItem('@USERID')
        localStorage.removeItem('@TOKEN')

        navigate('/login', {replace: true})
    }

    return (

        token ? 

            <Home>

                <AddTechModal/> 
                <EditTechModal/>

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

                        <div  className="tech-section-body">

                        <header className="tech-section-header">

                            <h3>Tecnologias</h3>
                            <button onClick={() => setIsAddModalVisible(true)}>
                                <AddIcon/>
                            </button>

                        </header>

                        {
                            listTechs.length !== 0 ?
                        
                                <TechList>
                                    {
                                        listTechs.map((tech, index) => 

                                            <li key={index}>

                                                <strong>{tech.title}</strong>

                                                <div>

                                                    <span>{tech.status}</span>
                                                    <button 
                                                        className="btn-info" 
                                                        onClick={() => {
                                                            setTech(tech)
                                                            setIsEditModalVisible(true)
                                                        }}
                                                        >
                                                        <InfoIcon size='100%'/>
                                                    </button>
                                                    
                                                </div>

                                            </li>
                                        )
                                    }
                                </TechList>
                            :   
                                <div className="empty-listTechs">
                                
                                    <strong>Sua Lista de Tecnologias está vazia</strong>
                                    <p>Clique no botão de  +  para adicionar</p>
                            
                                </div>

                        }

                        </div>

                    </section>

                </main>

            </Home>
        
        :

            <Navigate to='/login'/> 

    )
}

export default Dashboard