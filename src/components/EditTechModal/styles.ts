import styled from "styled-components";

interface IModalContainerEditProps {
    isEditModalVisible: boolean
}

export const ModalContainerEdit = styled.div<IModalContainerEditProps>`
    width: 100%;
    height: 100%;

    display: ${({isEditModalVisible}) => isEditModalVisible === true ? 'flex' : 'none'};
    justify-content:center;

    position: absolute;
    z-index: 9999;

    background-color: rgba(0, 0, 0, 0.5);

    .modal {
        width: 60%;
        height: 50%;

        align-self:flex-start;

        margin-top: 140px;

        border-radius: 4px;

        min-width: 295px;
        max-width: 375px;
        min-height: 275px;
        max-height: 342px;

        background-color: white;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;

        .modal-header {
            width: 100%;
            height: 15%;
            padding: 12px 20px;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

            border-radius: 4px 4px 0 0;

            color: var(--Grey-0);
            font-weight: 700;
            font-size: 14px;

            background-color: var(--Grey-2);

            button {
                width: 11px;
                height: 26px;

                border: none;
                border-radius: 4px;

                color: var(--Grey-1);
                background-color: transparent;

                display:flex;
                align-items: center;
                justify-content: center;
            }

            button:hover {
                color: var(--Grey-0);

                cursor: pointer;
                outline: unset;
            }
        }

        form {
            width: 100%;
            height: 85%;
            padding: 20px 18px 28px;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;


            border-radius: 0 0 4px 4px;

            background-color: var(--Grey-3);

            div {
                width: 100%;
                height: 30%;
                
                gap: 10px;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: space-between;

                label, span {
                    color: var(--Grey-0);
                    font-weight: 400;
                    font-size: 10px;
                }

                .projectName {
                    width: 100%;
                    height: 60%;
                    padding: 8px 13px;

                    min-height: 38px;

                    border: 1px transparent solid;
                    border-radius: 4px;

                    color: var(--Grey-1);
                    font-weight: 400;
                    font-size: 14px;

                    display: flex;
                    align-items: center;

                    background-color: var(--Grey-2);
                }
                select {
                    width: 100%;
                    height: 70%;
                    padding: 8px 13px;

                    min-height: 38px;

                    border: 1px transparent solid;
                    border-radius: 4px;

                    color: var(--Grey-0);
                    font-weight: 400;
                    font-size: 14px;

                    display: flex;
                    align-items: center;

                    background-color: var(--Grey-2);
                }

                input:focus, select:focus {
                    outline: unset;
                    border: 1px var(--Grey-0) solid;
                }

                select:hover {
                    cursor: pointer;
                }

                p {
                    color: var(--Grey-1);
                    font-weight: 400;
                    font-size: 10px;  
                }
            }

            .tech-btns {
                width: 100%;
                height: 15%;

                min-height: 38px;

                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;

                button {
                    height: 100%;

                    padding: 10px 0;

                    border: unset;
                    border-radius: 4px;

                    color: var(--Grey-0);
                    font-weight: 500;
                    font-size: 16px;
                }

                .tech-save {
                    width: 60%;
                    background-color: var(--Color-primary)
                }

                .tech-save:hover {
                    cursor: pointer;
                    background-color: var(--Color-primary-Focus)
                }

                .tech-delete {
                    width: 35%;
                    background-color: var(--Grey-1)
                }

                .tech-delete:hover {
                    cursor: pointer;
                    background-color: var(--Grey-2)
            }
            }

           
        }
    }
`