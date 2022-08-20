import styled from "styled-components";

export const RegisterForm = styled.div`
    width: 90vw;
    height: max-content;
    margin: 58px 0;

    min-width: 320px;
    max-width: 400px;

    gap: 20px;
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--Grey-4);

    header {
        width: 90%;
        height: 6%;

        min-width: 298px;
        min-height: 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            width: 30%;
            height: 100%;
            min-height: 40px;

            border: none;
            border-radius: 4px;

            color: var(--Grey-0);
            font-size: 10px;
            font-weight: 600;
            
            background: var(--Grey-3);
        }

        button:hover {
            cursor: pointer;
            background-color: var(--Grey-2);
        }
    }
   
    main {
        width: 90%;
        height: 90%;
        padding: 34px 17px;

        min-width: 296px;
        min-height:710px;

        gap: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        
        border-radius: 4px;

        background-color: var(--Grey-3);

        div {
            width: 100%;
            height: 50px;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                color: var(--Grey-0);
                font-size: 16px;
                font-weight: 700;
            }

            p {
                color: var(--Grey-1);
                font-size: 10px;
                font-weight: 400; 
            }
        }
    }
`