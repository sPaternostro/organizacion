import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(./img/footer.png)" }}>
        <div className='redes'>
            <a href='/img/CV_Paternostro.pdf'>
                <img src="./img/cv.png" alt='CV' />
            </a>
            <a href='https://www.linkedin.com/in/spaternostro99/' target="_blank" rel="noopener noreferrer">
                <img src="./img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://github.com/sPaternostro' target="_blank" rel="noopener noreferrer">
                <img src="./img/github.png" alt='github' />
            </a>
        </div>
        <img src='./img/Logo.png' alt='org' />
        <strong>Desarrollado por sPaternostro</strong>
    </footer>
}


export default Footer