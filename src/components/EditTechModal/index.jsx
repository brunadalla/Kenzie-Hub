import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContainer } from "./styles"
import { useContext, useState } from 'react';
import { TechContext } from '../../contexts/TechContext';

const EditTechModal = () => {

    const {listTechs, idTech} =  useContext(TechContext)

    const tech = listTechs.find(tech => tech.id === idTech)

    const formSchema = yup.object().shape(
        {
            techTitle: yup
            .string()
            .required('Nome da tecnologia obrigatório'),

            techStatus: yup
            .string()
            .required('Status da tecnologia necessário')
        }
    )

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(formSchema)
        }
    )

    return (

        <ModalContainer >

            <div className="modal">

                <header>

                    <strong>Tecnologia Detalhes</strong>
                    <button></button>

                </header>

                <form onSubmit={handleSubmit()}>

                    <div>

                        <label htmlFor="tech-name">Nome do Projeto</label>
                        <input 
                            type="text" 
                            id="tech-name" 
                            placeholder={tech.title}
                            {...register('techTitle')}
                        />
                        {
                            errors.techTitle ?
                                <p>{errors.techTitle.message}</p>
                            :
                                <p></p>
                        }

                    </div>

                    <div>

                        <label htmlFor="select-status">Selecionar status</label>
                        <select 
                            id="select-status"
                            placeholder={tech.status}
                            {...register('techStatus')}
                        >
                            <option value="Iniciante">     Iniciante     </option>
                            <option value="Intermediário"> Intermediário </option>
                            <option value="Avançado">      Avançado      </option>
                        </select>
                        {
                            errors.techStatus ?
                                <p>{errors.techStatus.message}</p>
                            :
                                <p></p>
                        }

                    </div>

                    <div className='tech-btns'>

                        <button type='submit'> Salvar alterações </button>
                        <button> Excluir </button>
                    </div>

                </form>

            </div>

        </ModalContainer>
    )
}

export default EditTechModal