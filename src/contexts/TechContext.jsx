import axios from "axios"
import { createContext, useEffect, useState } from "react"

import { toast } from 'react-toastify';
import { ReactComponent as LogoError } from '../assets/iconError.svg'
import { ReactComponent as LogoSuccess } from '../assets/iconSuccess.svg'


export const TechContext =  createContext()

export const TechProvider = ({ children }) => {

    const token = localStorage.getItem('@TOKEN')

    const [listTechs, setListTechs] = useState([])
    const [tech, setTech] = useState({})

    const [isAddModalVisible, setIsAddModalVisible]   = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)

    const notifySuccess = () => toast.success('Requisição realizada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <LogoSuccess/>,
        theme: "dark"
    });

    const notifyError = () => toast.error('Ops, algo deu errado!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <LogoError/>,
        theme: "dark"
    });


    useEffect(() => {
        axios.request({
            method: 'GET',
            url: 'https://kenziehub.herokuapp.com/profile',
            headers: {
                Authorization: `Bearer ${token} `
            }
        })
        .then((res) => {
        const techs = res.data.techs
        setListTechs([...techs])
        })
        
    }, [listTechs])

    function createTech( title, status ) {

        const createOptions = {
            method: 'POST',
            url: 'https://kenziehub.herokuapp.com/users/techs',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token} `
            },
            data: {title, status}
        }

        axios.request(createOptions)
        .then(() => {
            notifySuccess()
            setIsAddModalVisible(false)
        })
        .catch((err) => {
            console.log(err)
            notifyError()})
    }

    function editTech( status ) {

        console.log(status)

        const updateOptions = {
            method: 'PUT',
            url: `https://kenziehub.herokuapp.com/users/techs/${tech.id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token} `
            },
            data: {status}
        }
            axios.request(updateOptions)
            .then(() => {
                notifySuccess()
                setIsEditModalVisible(false)
            })
            .catch((err) => {
                console.log(err)
                notifyError()
            })
    }

    function deleteTech() {

        const deleteOptions = {
            method: 'DELETE',
            url: `https://kenziehub.herokuapp.com/users/techs/${tech.id}`,
            headers: {
              Authorization: `Bearer ${token} `
            }
        }
      
        axios.request(deleteOptions)
        .then(() => {
            notifySuccess()
            setIsEditModalVisible(false)
        })
        .catch((err) => {
            console.log(err)
            notifyError()
        })
    }

    return (
        <TechContext.Provider value={{ listTechs, setListTechs, isAddModalVisible, setIsAddModalVisible, isEditModalVisible, setIsEditModalVisible, createTech, editTech, deleteTech, tech, setTech }}>
            {children}
        </TechContext.Provider>
    );
}