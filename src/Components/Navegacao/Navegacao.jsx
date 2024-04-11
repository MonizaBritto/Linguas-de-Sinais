import React from "react"
import Inicio from "../Inicio/Inicio.jsx"
import Conhecer from "../Conhecer/conhecer.jsx"
import Fontes from "../Fontes/fontes.jsx"
import libras from "../../assets/libras.png"
import * as S from "./NavegacaoStyle.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao() {
    return (
        <BrowserRouter>
            <S.Nav>
                <S.Logo src={libras} alt="" />
                <S.Ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/Conhecer">Conheça</Link></li>
                    <li><Link to="/Fontes">Fontes</Link></li>
                </S.Ul>
            </S.Nav>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Conhecer" element={<Conhecer/>}/>
                <Route path="/Fontes" element={<Fontes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacao