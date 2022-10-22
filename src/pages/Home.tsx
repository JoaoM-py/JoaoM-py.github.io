import imageFrame from '../assets/images/Frame.svg'
import linkedinIcon from '../assets/images/Vector.svg'
import githubIcon from '../assets/images/Vector (1).svg'
import instagramIcon from '../assets/images/Vector (2).svg'
import ThemeIcon from '../assets/images/Group 6.svg'
import perfilImage from '../assets/images/EU.jpeg'

import '../styles/Home.css'

export function Home(){
    return(
        <div id ="Home" >
            <header>
                    <div className='theme'>
                        <img src={ThemeIcon} alt="" />
                    </div>
                    <div className='social'>
                        <img src={linkedinIcon} alt="Linkedin" />
                        <img src={githubIcon} alt="GitHub" className='middle-icon'/>
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
            </header>
            <main>
            <div id = "Information">
                <div className="Me-hello">
                    <div className="Me">
                        <img src= {perfilImage} alt="" />
                    </div>
                    <div className="hello">
                        <strong>Hello.</strong>
                    </div>
                </div>
                <div className="Intro-port">
                    <p className="introduction">✋ João Marcos - Introdução</p>
                    <p>Olá meu nome é João marcos e gosto de <br />
                        desenvolver soluções inovadores e incríveis. <br />
                        Utilizo principalmente react e node js para desenvolver <br />
                        novos projetos.
                    </p>
                    <p className='port-tittle'>Portifólio</p>
                    <ul>
                        <li>Desenvolvimento web</li>
                        <li>Desenvolvedor Backend</li>
                        <li>Backend Developer</li>
                    </ul>
                </div>
            </div>
            <div className='line-box'>
                <div className="line"></div>
            </div>
            </main>
            <aside>
                <div className="text-editor">
                    <div className="editor-content">
                        <div className="sobre-mim"></div>
                        <div className="education"></div>
                    </div>
                </div>
                <img src={imageFrame} alt="" />
            </aside>
        </div>
    )
}