import styles from './SobreMin.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobremim.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Evellyne!
            </h3>

            <img
                src={fotoSobreMim}
                alt='foto de eve'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Front-end e React na Alura e estou feliz de te ver por aqui.</p>

            <p className={styles.paragrafo}>Minha história com programação começou no Instituto Federal de Pernambuco (IFPE), quando fiz um curso de Iniciante em programação , onde a linguagem era Scratch. Eu aprendi lógica de programação e o básico (bem básico) sobre programação no geral, mas sem aprofundar. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>

            <p className={styles.paragrafo}>Meses depois de concluir o curso estava a procura de uma forma de aprender mais. Em Dezembro de 2023, uma empresa da minha cidade publicou nas rede sociais sobre o Programa Oracle, um programa que buScava por jovens que tinham interresse em estudar programação. Não perdi a oportunidade e ingressei no programa. Lá eu tive a oportunidade de estudar desenvolvimento web , aprendendo sobre JavaScript, HTM e CSS. </p>

            <p className={styles.paragrafo}>Durante o curso fiz novas amizades e tive oportunidade de conhcer pessoas incriveis. </p>

            <p className={styles.paragrafo}>No momento me encontro no afinal do meu curso onde estou estudando e praticando React, essa ferramenta incrivel que propociona aos desenvolvedores a oportunidade de desenvolverem interfaces interativas. </p>

            <p className={styles.paragrafo}>Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de aprender com essa galera!</p>
         



        </PostModelo>
    )
}