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

                background-color: var(--Grey-3)
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
            padding: 0px 11px 38px 11px;

            min-height: 131px;
        
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            .tech-section-body {
                width: 100%;
                height: 100%;
                max-width: 770px;
            }

            .tech-section-header {

                width: 100%;
                height: max-content;

                border-bottom: none;

                padding: 28px 0;

                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;

                h3 {
                    color: var(--Grey-0);
                    font-size: 16px;
                    font-weight: 600;
                }

                button {
                    width: 32px;
                    height: 32px;

                    border: unset;
                    border-radius: 4px;

                    background-color: var(--Grey-3);

                    display:flex;
                    align-items: center;
                    justify-content: center;
                    
                }

                button:hover {
                    cursor: pointer;

                    outline: unset;
                    background-color: var(--Grey-2)
                    
                }
         
            }
        }

        .empty-listTechs {
            width: 100%;
            height: 200px;
            padding: 0px 10px;

            gap: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            strong {
                color: var(--Grey-0);
                font-size: 16px;
                font-weight: 600;
            }

            p {
                color: var(--Grey-1);
                font-size: 14px;
                font-weight: 500;

            }
        }
    }
`
export const TechList = styled.ul`

    width: 100%;
    height: max-content;
    padding: 22px 18px;

    border-radius: 4px;

    gap: 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    background-color: var(--Grey-3);

    li {
        width: 100%;
        height: 48px;
        padding: 12px 22px;

        border-radius: 4px;

        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        background-color: var(--Grey-4);

        strong {

            color: var(--Grey-0);
            font-size: 14px;
            font-weight: 700;
        }

        div {

            width: fit-content;

            gap: 25px;
            display: flex;
            align-items: center;
            flex-direction: row;

            span {
                color: var(--Grey-1);
                font-size: 12px;
                font-weight: 400;
            }

            button {
                width: 20px;
                height: 20px;

                border: unset;

                background-color: transparent;
            }

            svg {
                fill: var(--Grey-1);
            }

            svg:hover, button:hover {
                cursor: pointer;
                fill: var(--Grey-0);
            }
        }
    }

    li:hover {
        background-color: var(--Grey-2);
    }

`