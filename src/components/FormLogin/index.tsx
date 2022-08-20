import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from './styles';
import { useContext } from 'react';
import { IResponseData, UserContext } from '../../contexts/UserContext';

const FormLogin = () => {

    const {login} = useContext(UserContext)

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

    const {register, handleSubmit, formState: {errors}} = useForm<IResponseData>(
        {
            resolver: yupResolver(formSchema)
        }
    )

    

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