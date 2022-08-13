import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

import { toast } from 'react-toastify';
import { ReactComponent as LogoError } from '../assets/iconError.svg'
import { ReactComponent as LogoSuccess } from '../assets/iconSuccess.svg'

import axios from "axios";

export const UserContext =  createContext()

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})

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
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <LogoSuccess/>,
        theme: "dark"
    });

    const notifySuccessLogin = () => toast.success('Login realizado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
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
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        icon: <LogoError/>,
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

     function login (data){

        api.post('sessions', data)
        .then((res) => {
            const {token, user} = res.data

            localStorage.setItem('@TOKEN', token)
            localStorage.setItem('@USERID', user.id)

            notifySuccessLogin()
            setTimeout(() => {
                navigate('/', {replace: true})
            }, '2000')
        })
        .catch(() => notifyError())   
    }

   
    function registerUser({name, email, password, contact, course_module, bio}){
        
        const newRequest = {name, email, password, contact, course_module, bio}

        api.post('users', newRequest)
        .then(() => {
            notifySuccess()
            setTimeout(() => {
                navigate('/login', {replace: true})
            }, '2000')
        })
        .catch(() => notifyError())
    }

    return (
        <UserContext.Provider value={{ login, registerUser, userInfo, setUserInfo, token}}>
            {children}
        </UserContext.Provider>
    );
};

