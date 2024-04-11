import React from "react"
import banner from "./img.inicio/banner.jpg"
import * as S from "./InicioStyle"

function Inicio() {
    return (
        <main>
            <S.Banner style={{ backgroundImage: `url(${banner})` }}>
                <h1>Libras é a lingua mundial dos surdos?</h1>
            </S.Banner>
            
            <S.Info>
                <S.Topico>
                    <h2>O que é a Lingua de Sinais?</h2>
                    <p>As línguas de sinais são línguas visuais criadas em comunidades de pessoas surdas, ou derivadas de outras línguas de sinais. Nessa modalidade de língua, os sinais não são gestos, mas sim palavras articuladas principalmente pelas mãos e decodificadas por meio da visão.</p>
                </S.Topico>

                <S.Topico>
                    <h2> Libras, é falada em todo mundo?</h2>
                    <p>Não, a Libras é específica do Brasil e não é falada no mundo todo. Cada país tem sua própria língua de sinais, com suas próprias características e vocabulário distintos. É importante ressaltar que a Língua Brasileira de Sinais é outro idioma e não depende do português, assim como o inglês e o espanhol</p>
                </S.Topico>
            </S.Info>
        </main>
    )
}

export default Inicio