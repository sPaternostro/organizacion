import './Footer.css'
import cvImg from '../../img/cv.png'
import linkedinImg from '../../img/linkedin.png'
import githubImg from '../../img/github.png'
import logo from '../../img/Logo.png'



const Footer = () => {
    return <footer className='footer'>
        <div className='redes'>
            <a href='/CV_Paternostro.pdf' download>
                <img src={cvImg} alt='CV' />
            </a>
            <a href='https://www.linkedin.com/in/spaternostro99/' target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt='linkedin' />
            </a>
            <a href='https://github.com/sPaternostro' target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt='github' />
            </a>
        </div>
        <img src={logo} alt='org' />
        <strong>Desarrollado por sPaternostro</strong>
    </footer>
}


export default Footer