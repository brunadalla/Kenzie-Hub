import axios from "axios"

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

import { toast } from 'react-toastify';

import IconSuccess from "../components/Icons/IconSuccess.jsx";
import IconError from "../components/Icons/IconError.jsx";

export interface ITech {
    id: string;
    title: string,
    status: string
}

interface ITechProviderProps {
    children: ReactNode;
}

interface ITechContextData {
    tech: ITech,
    setTech: Dispatch<SetStateAction<ITech>>,
    createTech: (title: string, status: string) => void,
    editTech: (status: string) => void,
    deleteTech: () => void,

    listTechs: ITech[],
    setListTechs: Dispatch<SetStateAction<ITech[]>>

    isAddModalVisible: boolean,
    setIsAddModalVisible: Dispatch<SetStateAction<boolean>>,

    isEditModalVisible: boolean,
    setIsEditModalVisible: Dispatch<SetStateAction<boolean>>     
}

export const TechContext =  createContext<ITechContextData>({} as ITechContextData)

export const TechProvider = ({ children }: ITechProviderProps) => {

    const token = localStorage.getItem('@TOKEN')

    const [listTechs, setListTechs] = useState<ITech[]>([])
    const [tech, setTech] = useState<ITech>({} as ITech)

    const [isAddModalVisible, setIsAddModalVisible]   = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)

    const notifySuccess = () => toast.success('Requisição realizada com sucesso!', {
        position: window.matchMedia("(min-width:769px)").matches ? "top-right" : "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <IconSuccess/>,
        theme: "dark"
    });

    const notifyError = () => toast.error('Ops, algo deu errado!', {
        position: window.matchMedia("(min-width:769px)").matches ? "top-right" : "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <IconError/>,
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

    function createTech( title: string, status: string ) {

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

    function editTech( status: string ) {

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