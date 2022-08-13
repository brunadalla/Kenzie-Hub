import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContainer } from "./styles"
import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';

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

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(formSchema)
        }
    )

    function closeModal() {
        setIsAddModalVisible(false)
    }

    function addTech(data) {
       createTech(data.techTitle, data.techStatus)
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