import axios from "axios"
import { createContext, useEffect, useState } from "react"

import { toast } from 'react-toastify';
import { ReactComponent as LogoError } from '../assets/iconError.svg'
import { ReactComponent as LogoSuccess } from '../assets/iconSuccess.svg'


export const TechContext =  createContext()

export const TechProvider = ({ children }) => {

    const token = localStorage.getItem('@TOKEN')

    const [listTechs, setListTechs] = useState([])
    const [idTech, setIdTech] = useState('')

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

    function createTech({ title, status }) {

        const newTech = {title, status}

        axios.request({
            method: 'POST',
            url: 'https://kenziehub.herokuapp.com/users/techs',
            headers: {
              Authorization: `Bearer ${token} `
            }
        }, newTech)
        .then(() => {
            notifySuccess()
            setIsAddModalVisible(false)
        })
        .catch(() => notifyError())
    }

    function editTech({ title, status }, techId) {

        const updateTech = {}

        if (title) {
            updateTech.title = title
        } else if (status) {
            updateTech.status = status
        }

        if (Object.keys(updateTech).length !== 0) {
            axios.request({
                method: 'PUT',
                url: `https://kenziehub.herokuapp.com/users/techs/${techId}`,
                headers: {
                    Authorization: `Bearer ${token} `
                }
            }, updateTech)
            .then(() => {
                notifySuccess()
                setIsEditModalVisible(false)
            })
            .catch(() => notifyError())
        }
    }

    function deleteTech(techId) {
      
        axios.request({
            method: 'DELETE',
            url: `https://kenziehub.herokuapp.com/users/techs/${techId}`,
            headers: {
              Authorization: `Bearer ${token} `
            }
        })
        .then(() => {
            notifySuccess()
        })
    }

    return (
        <TechContext.Provider value={{ listTechs, setListTechs, isAddModalVisible, setIsAddModalVisible, isEditModalVisible, setIsEditModalVisible, createTech, editTech, deleteTech }}>
            {children}
        </TechContext.Provider>
    );
}