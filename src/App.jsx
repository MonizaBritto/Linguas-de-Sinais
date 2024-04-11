import React from "react"
import Navegacao from "./Components/Navegacao/Navegacao.jsx"
import Footer from "./Components/Footer/footer.jsx"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Hedvig Letters Serif", serif;
  }

`

function App(){
  return(
    <>
      <GlobalStyle/>
      <Navegacao/>
      <Footer/>
    </>

  )
}

export default App