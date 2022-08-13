import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from './styles.js';

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';

const FormRegister = () => {

    const {registerUser} = useContext(UserContext)

    const formSchema = yup.object().shape(
        {
            name: yup
            .string()
            .required("Nome obrigatório"),
            

            email: yup
            .string()
            .email("Email inválido")
            .required("Email obrigatório"),

            password: yup
            .string()
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 'A senha deve ter no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo')
            .required("Senha obrigatória"),
            

            confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'As senhas não combinam')
            .required("Confirme sua senha"),

            bio: yup
            .string()
            .required("Bio obrigatória"),

            contact: yup
            .string()
            .required("Opção de contato obrigatória"),

            course_module:yup
            .string()
            .required("Selecione o seu módulo")
        }
    )

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(formSchema)
        }
    )

    return (
        
        <Form onSubmit={handleSubmit(registerUser)}>

            <div className='container-input'>
                <label htmlFor="name"> Nome </label>
                <input 
                    id='name' 
                    type="text" 
                    placeholder="Digite aqui seu nome" 
                    {...register("name")}/>
                {
                     errors.name ?
                        <p>{errors.name.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="email"> Email </label>
                <input 
                    id='email' 
                    type="email" 
                    placeholder="Digite aqui seu email" 
                    {...register("email")}/>
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
                    placeholder="Digite aqui sua senha" 
                    {...register("password")}/>
                {
                     errors.password ?
                        <p>{errors.password.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="confirmPassword"> Confirmar senha </label>
                <input 
                    id='confirmPassword' 
                    type="password" 
                    placeholder="Confime sua senha" 
                    {...register("confirmPassword")}/>
                {
                     errors.confirmPassword ?
                        <p>{errors.confirmPassword.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="bio"> Bio </label>
                <input 
                    id='bio' 
                    type="text" 
                    placeholder="Fale sobre você" 
                    {...register("bio")}/>
                {
                     errors.bio ?
                        <p>{errors.bio.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="contact"> Contato </label>
                <input
                    id='contact' 
                    type="number" 
                    placeholder="Opção de contato" 
                    {...register("contact")}/>
                {
                     errors.contact ?
                        <p>{errors.contact.message}</p>
                     :
                        <p></p>
                }
            </div>

            <div className='container-input'>
                <label htmlFor="course_module"> Selecionar módulo </label>
                <select 
                    id="course_module" 
                    {...register("course_module")}>

                    <option value="Primeiro módulo"> Primeiro Módulo </option>
                    <option value="Segundo módulo">  Segundo Módulo  </option>
                    <option value="Terceiro módulo"> Terceiro Módulo </option>
                    <option value="Quarto módulo">   Quarto Módulo   </option>
                    <option value="Quinto módulo">   Quinto Módulo   </option>
                    <option value="Sexto módulo">    Sexto Módulo    </option>
                </select>
                {
                     errors.course_module ?
                        <p>{errors.course_module.message}</p>
                     :
                        <p></p>
                }
               
            </div>

            <button type='submit'> Cadastrar </button>

        </Form>
    )
}

export default FormRegister