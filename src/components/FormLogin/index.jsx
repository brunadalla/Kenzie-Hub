import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../services/api.js'
import { Form } from './styles.js';

import { useNavigate } from 'react-router-dom';

const FormLogin = () => {

    const navigate = useNavigate()

    const formSchema = yup.object().shape(
        {
            email: yup
            .string()
            .required('Email obrigatório')
            .email('Email inválido'),

            password: yup
            .string()
            .required('Senha obrigatória')
        }
    )

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(formSchema)
        }
    )

    async function login (data){

        const response = await api.post('sessions', data)

        const {token, user} = response.data
        console.log(user)

        localStorage.setItem('@TOKEN', token)
        localStorage.setItem('@USERID', user.id)
        
        navigate('/', {replace: true})
    }

    return (

        <Form onSubmit={handleSubmit(login)}>
            
            <div className='container-input'>
                <label htmlFor="email"> Email </label>
                <input 
                    id='email' 
                    type="email" 
                    placeholder='Digite aqui seu email' 
                    {...register('email')}/>   
                 {
                     errors.email ?
                        <p>{errors.email.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="password"> Senha </label>
                <input 
                    id='password' 
                    type="password" 
                    placeholder='Digite aqui sua senha' 
                    {...register('password')}/>
                 {
                     errors.password ?
                        <p>{errors.password.message}</p>
                     :
                        <p></p>
                }
            </div>

            <button type='submit'> Entrar </button>

        </Form>
    )
}

export default FormLogin