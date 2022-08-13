import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ModalContainerEdit } from "./styles"
import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';

const EditTechModal = () => {

    const {isEditModalVisible, setIsEditModalVisible, deleteTech, tech, editTech} =  useContext(TechContext)

    const formSchema = yup.object().shape(
        {
            techStatus: yup
            .string()
        }
    )

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(formSchema)
        }
    )

    function updateTech(data) {
        editTech(data.techStatus)
     }

    function closeModal() {
        setIsEditModalVisible(false)
    }

    return (

        <ModalContainerEdit isEditModalVisible={isEditModalVisible}>

            <div className="modal">

                <header className='modal-header'>

                    <strong>Tecnologia Detalhes</strong>
                    <button onClick={() => closeModal()}>X</button>

                </header>

                <form onSubmit={handleSubmit(updateTech)}>

                    <div>
                        <span> Nome do Projeto </span>
                        <p className='projectName'>{tech.title}</p>
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

                    <div className='tech-btns'>

                        <button className='tech-save' type='submit'> Salvar alterações </button>
                        <button className='tech-delete' type='button' onClick={() => {deleteTech()}}> Excluir </button>
                    </div>

                </form>

            </div>

        </ModalContainerEdit>
    )
}

export default EditTechModal