import styled from "styled-components";

export const LoginForm = styled.div`
    width: 90vw;
    height: 80vh;
    margin: 58px 0;

    min-width: 320px;
    max-width: 400px;
    min-height: 452px;
    max-height: 552px;

    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    main {
        width: 90%;
        height: 90%;
        padding: 36px 17px;

        min-width: 296px;
        min-height: 402px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        
        border-radius: 4px;

        background-color: var(--Grey-3);

        h2 {
            color: var(--Grey-0);
            font-size: 16px;
            font-weight: 700;
        }

        div {
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            p {
                color: var(--Grey-1);
                font-size: 12px;
                font-weight: 600;
            }

            button {
                width: 100%;
                height: 55%;

                color: var(--Grey-0);
                font-size: 14px;
                font-weight: 500;

                border: unset;
                border-radius: 4px;

                background-color: var(--Grey-1);
            }

            button:hover {
                cursor: pointer;
                background-color: var(--Grey-2);
            }
        }
   }  
`