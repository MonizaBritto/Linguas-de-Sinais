import React from "react"
import ASL from "./img.conhecer/ASL.jpg"
import LSF from "./img.conhecer/LSF.jpg"
import JSL from "./img.conhecer/JSL.jpg"
import LIBRAS from "./img.conhecer/LIBRAS.jpg"
import * as S from "./conhecerstyle.jsx"

function Conhecer(){
    return(
        <S.Main>
            <S.Div>
                <h3>ASL</h3>
                <p>A Língua de Sinais Americana também é popularmente conhecida como ASL. Um estudo da Universidade de Gallaudet mostrou que ela é a língua nativa de entre 500 mil a 2 milhões de pessoas. Ela é  usada sobretudo pelos surdos que vivem nos Estados Unidos e no Canadá.</p>
                <S.Sinais src={ASL} alt="" />
            </S.Div>
            <S.Div>
                <h3>LSF</h3>
                <p>É uma das mais antigas da Europa e é a língua materna de mais de 100 mil franceses. Possui a sua própria estrutura gramatical, que acabou dando origem a diversas outras línguas de Sinais, mesmo que o idioma oficial desses países não tenha nenhuma similaridade com a Língua Francesa.</p>
                <S.Sinais src={LSF} alt="" />
            </S.Div>
            <S.Div>
                <h3>JSL - 日本手話 (nihon shuwa)</h3>
                <p>A Língua de Sinais/Gestual Japonesa é a língua gestual dominante usada pela comunidade surda no Japão. No Japão, há pouco conhecimento da língua de sinais e da comunidade surda antes do período Edo. Estima-se que a Língua Japonesa de Sinais (JSL) seja usada por 95% de 320.000 pessoas portadoras de deficiência auditiva no Japão.</p>
                <S.Sinais src={JSL} alt="" />
            </S.Div>
            <S.Div>
                <h3>E muito mais</h3>
                <p>Segundo o site Ethnologue: Languages of the World, existem mais de sete mil línguas faladas em todo o mundo. Dessas, mais de 140 são línguas de sinais oficiais, o que mostra como a cultura Surda é rica e precisa ser valorizada e reconhecida.
                De acordo com a Organização Mundial da Saúde (OMS), em todo o mundo, existem mais de 466 milhões de pessoas com deficiência auditiva e cerca de 80% desse público se comunica exclusivamente por meio da língua de sinais.
                </p>
                <S.Sinais src={LIBRAS} alt="" />
            </S.Div>
        </S.Main>

    )

}

export default Conhecer