import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(min-width: 320px) and (max-width: 871px){
      flex-direction: column;
      align-items: center;
    }
`

export const Div = styled.div`
    width: 45%;
    padding: 2rem;

    @media(min-width: 320px) and (max-width: 871px){
      width: 100%;
    }
`

export const Sinais = styled.img`
    width:17rem;
    height: 17rem;
`
