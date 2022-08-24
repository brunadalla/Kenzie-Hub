import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

import { toast } from 'react-toastify';

import IconSuccess from "../components/Icons/IconSuccess";
import IconError from "../components/Icons/IconError";

import axios from "axios";
import { ITech } from "./TechContext";

export interface IResponseData {
    email: string,
    password: string
}

interface IUserInfo {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: ITech[],
    works?: string[],
    created_at: string,
    updated_at: string,
    avatar_url: null
}

interface IRegisterUser {
    name: string,
    email: string,
    password: string,
    course_module: string,
    bio: string,
    contact: string,
}

interface IUserProviderProps {
    children: ReactNode;
}

interface ICreateContext {
    login: (value: IResponseData) => void,
    registerUser: (data: IRegisterUser) => void,
    userInfo: IUserInfo,
    setUserInfo: Dispatch<SetStateAction<IUserInfo>>,
    token: string | null
}

export const UserContext =  createContext<ICreateContext>({} as ICreateContext)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)

    const navigate = useNavigate()

    const token = localStorage.getItem('@TOKEN')

    const options = {
        method: 'GET',
        url: 'https://kenziehub.herokuapp.com/profile',
        headers: {
          Authorization: `Bearer ${token} `
        }
      };

    const notifySuccess = () => toast.success('Conta criada com sucesso!', {
        position: window.matchMedia("(min-width:769px)").matches ? "top-right" : "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <IconSuccess/>,
        theme: "dark",
    });

    const notifySuccessLogin = () => toast.success('Login realizado com sucesso!', {
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
        if (token) {
            axios.request(options)
            .then((res) => {
            setUserInfo(res.data)
            })
           .catch(err => {
            localStorage.clear()
            console.log(err)
        })
        }
    }, [])

     function login(data: IResponseData){

        api.post('sessions', data)
        .then((res) => {
            const {token, user} = res.data

            localStorage.setItem('@TOKEN', token)
            localStorage.setItem('@USERID', user.id)

            notifySuccessLogin()
            setTimeout(() => {
                navigate('/', {replace: true})
            }, 2000)
        })
        .catch(() => notifyError())   
    }

   
    function registerUser({name, email, password, contact, course_module, bio}: IRegisterUser){
        
        const newRequest = {name, email, password, contact, course_module, bio}

        api.post('users', newRequest)
        .then(() => {
            notifySuccess()
            setTimeout(() => {
                navigate('/login', {replace: true})
            }, 2000)
        })
        .catch(() => notifyError())
    }

    return (
        <UserContext.Provider value={{ login, registerUser, userInfo, setUserInfo, token}}>
            {children}
        </UserContext.Provider>
    );
};

