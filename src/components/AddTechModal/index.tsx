import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContainer } from "./styles"
import { useContext } from 'react';
import { ITech, TechContext } from '../../contexts/TechContext';

export type IAddTech = Omit<ITech, 'id'>

const AddTechModal = () => {

    const {setIsAddModalVisible, createTech, isAddModalVisible} = useContext(TechContext)

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

    const {register, handleSubmit, formState: {errors}} = useForm<IAddTech>(
        {
            resolver: yupResolver(formSchema)
        }
    )

    function closeModal() {
        setIsAddModalVisible(false)
    }

    function addTech(data: IAddTech) {
       createTech(data.title, data.status)
    }

    return (

        <ModalContainer isAddModalVisible={isAddModalVisible}>

            <div className="modal">

                <header className="modal-header">

                    <strong>Cadastrar Tecnologia</strong>
                    <button onClick={() => closeModal()}> X </button>

                </header>

                <form onSubmit={handleSubmit(addTech)}>

                    <div>

                        <label htmlFor="tech-name">Nome</label>
                        <input 
                            type="text" 
                            id="tech-name" 
                            placeholder='Digite o nome da tecnologia aqui'
                            {...register('title')}
                        />
                        {
                            errors.title ?
                                <p>{errors.title.message}</p>
                            :
                                <p></p>
                        }

                    </div>

                    <div>

                        <label htmlFor="select-status">Selecionar status</label>
                        <select 
                            id="select-status"
                            {...register('status')}
                        >
                            <option value="Iniciante">     Iniciante     </option>
                            <option value="Intermediário"> Intermediário </option>
                            <option value="Avançado">      Avançado      </option>
                        </select>
                        {
                            errors.status ?
                                <p>{errors.status.message}</p>
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