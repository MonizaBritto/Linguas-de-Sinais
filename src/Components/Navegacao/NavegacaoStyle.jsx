import styled from "styled-components"

export const Nav = styled.section`
    background-color: #add8e6;
    display: flex;
    width: 100%;
    height: 20vh;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.img`
    width: 8rem;
    height: 8rem;

    @media(min-width: 320px) and (max-width: 780px){
    width: 6rem;
    height: 6rem;
}
`
export const Ul = styled.ul`
    list-style: none; 
    display: flex;
    width: 30vw;
    justify-content: space-evenly;

a{
    text-decoration: none;
    color: darkblue;
}

    @media(min-width: 320px) and (max-width: 780px){
        width: 70vw;
    }
`