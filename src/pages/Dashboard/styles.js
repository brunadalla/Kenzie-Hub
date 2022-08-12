import styled from "styled-components";

export const Home =  styled.div`
    width: 100%;
    height: 100%;

    header {
        width: 100%;
        height: 72px;
        padding: 20px 11px;

        border-bottom: 1px solid var(--Grey-2);

        display: flex;
        align-items: center;
        justify-content: center;

        div {
            width: 100%;
            height: fit-content;

            max-width: 770px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
                width: 56px;
                height: 32px;

                border: unset;
                border-radius: 4px;

                color: var(--Grey-0);
                font-size: 12px;
                font-weight: 600;

                background-color: var(--Grey-3);
            }

            button:hover {
                cursor: pointer;
                background-color: var(--Grey-2);
            }
        }
    }

    main {
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start; 

        .user-info {
            width: 100%;
            height: 15vh;
            padding: 20px 11px;
            
            min-height: 131px;

            border-bottom: 1px solid var(--Grey-2);

            display: flex;
            align-items: center;
            justify-content: center;

            div {
                width: 100%;
                height: 100%;

                max-width: 770px;

                gap: 10px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;

                h2 {
                    color: var(--Grey-0);
                    font-size: 18px;
                    font-weight: 700;
                }

                p {
                    color: var(--Grey-1);
                    font-size: 12px;
                    font-weight: 600;
                }
            }
        }

        .tech-section {
            width: 100%;
            height: max-content;
            padding: 20px 11px;

            min-height: 131px;
        
            display: flex;
            align-items: center;
            justify-content: center;

            div {
                width: 100%;
                height: max-content;

                max-width: 770px;

                gap: 23px;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                flex-direction: column;
                justify-content: space-between;

                h2 {
                    color: var(--Grey-0);
                    font-size: 18px;
                    font-weight: 700;
                }

                p {
                    color: var(--Grey-0);
                    font-size: 16px;
                    font-weight: 400;
                }
            }
        }
    }
`
export const TechList = styled.ul`
`