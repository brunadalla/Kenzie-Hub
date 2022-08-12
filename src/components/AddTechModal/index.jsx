import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContainer } from "./styles"

const AddTechModal = () => {

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

                    <strong>Cadastrar Tecnologia</strong>
                    <button></button>

                </header>

                <form onSubmit={handleSubmit()}>

                    <div>

                        <label htmlFor="tech-name">Nome</label>
                        <input 
                            type="text" 
                            id="tech-name" 
                            placeholder='Digite o nome da tecnologia aqui'
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

                    <button type='submit'> Cadastrar Tecnologia </button>

                </form>

            </div>

        </ModalContainer>
    )
}

export default AddTechModal