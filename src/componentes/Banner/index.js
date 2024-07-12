import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minhaFoto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Evellyne Vitoria,estudante de Front-end e React da Alura. Aqui compartilho vários conhecimentos, espero que possamos aprender juntos :)
                </p>
            </div>
            <div className={styles.imagens}>
                
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='foto de eve'
                    aria-hidden={true}
                />
            </div>

        </div>
    )
}