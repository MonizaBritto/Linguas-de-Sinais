import styled from "styled-components"

export const Main = styled.main `
    background-color: #e5fcff;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    justify-content: center;
`
export const A = styled.a`
    font-size: 0.8em;
    padding: 1rem;

    @media(min-width: 320px) and (max-width: 780px){
    font-size: 0.5em;
    }
`