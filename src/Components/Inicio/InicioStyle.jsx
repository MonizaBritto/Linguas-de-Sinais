import styled from "styled-components"

export const Banner = styled.div`
    display:flex;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    font-size: 2.2em;

    @media(min-width: 320px) and (max-width: 400px){
       font-size: 0.6em;
       background-size: contain;
       height: 24vh;
    }

    @media(min-width: 401px) and (max-width: 871px){
       font-size: 0.6em;
       background-size: contain;
       height: 32vh;
    }

`
export const Info= styled.section`
   background-color: #e5fcff;
    display: flex;
    justify-content:space-around;
    padding: 3rem;

    @media(min-width: 320px) and (max-width: 871px){
      flex-direction: column;
      align-items: center;
    }
`

export const Topico = styled.div`
     width: 40vw;

     @media(min-width: 320px) and (max-width: 871px){
        width:100%;
        padding-bottom: 2rem;
     }
`