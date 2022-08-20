import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    height: 90%;

    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    .container-input {
        width: 100%;
        height: 30%;

        display: flex;
        align-items: flex-start;
        flex-direction: column;   
        justify-content: space-between;

        label {
            color: var(--Grey-0);
            font-size: 12px;
            font-weight: 400;

            margin-top: 18px;
        }

        input, select {
            width: 100%;
            height: 6vh;
            padding: 8px 13px;

            margin: 15px 0 10px 0;

            min-height: 38px;
            max-height: 70px;

            color: var(--Grey-0);
            font-size: 14px;
            font-weight: 400;

            border: unset;
            border-radius: 4px;

            background-color: var(--Grey-2)
        }

        input:focus, select:focus {
            outline: unset;
            border: solid 1px var(--Grey-0) ;
        }

        select:hover {
            cursor: pointer;
        }
    }

    button {
        width: 100%;
        height: 6vh;

        margin-top: 18px;

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

    .Toastify{
        position: absolute;
    }

    .Toastify__toast {
        width: 286px;
        height: 69px;
        padding: 0;

        border-radius: 4px ;

        background: var(--Grey-2) ;
    }

    .Toastify__toast-body {
        padding: 0;
        
        display: flex;
        align-items: center;
        flex-direction:row;
        justify-content: space-between;

        div {
            margin: 26px 17px 20px 17px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: var(--Grey-0);
            font-size: 14px;
            font-weight: 700;
        }
    }

    .Toastify__toast-icon {
        width: 28px;
        height: 28px;  
    }

    .Toastify__progress-bar {
        height: 6px;
    }


`
