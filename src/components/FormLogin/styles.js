import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    height: 70%;

    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .container-input {
        width: 100%;
        height: 30%;

        margin-bottom: 10px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;   
        justify-content: space-between;

        label {
            color: var(--Grey-0);
            font-size: 12px;
            font-weight: 400;

            margin-bottom: 10px;
        }

        input {
            width: 100%;
            height: 7vh;
            padding: 8px 13px;

            margin-bottom: 5px;

            color: var(--Grey-0);
            font-size: 14px;
            font-weight: 400;

            border: unset;
            border-radius: 4px;

            background-color: var(--Grey-2)
        }

        input:focus {
            outline: unset;

            border: solid 1px var(--Grey-0) ;
        }
    }

    button {
        width: 100%;
        height: 16%;

        margin-bottom: 10px;

        border: none;
        border-radius: 4px;
        
        color: var(--Grey-0);
        font-size: 14px;
        font-weight: 500;
        
        background: var(--Color-primary);
    }

    button:hover {
        cursor: pointer;
        background-color: var(--Color-primary-Focus);
    }

    button:disabled {
        cursor: not-allowed;
        background-color: var(--Color-primary-Negative)
    }
`