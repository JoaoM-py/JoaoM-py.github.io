import linkedinIcon from '../assets/images/Vector.svg'
import githubIcon from '../assets/images/Vector (1).svg'
import instagramIcon from '../assets/images/Vector (2).svg'

import ThemeIcon from '../assets/images/Group 6.svg'

import perfilImage from '../assets/images/EU2.png'


import '../styles/Home.css'
import { useEffect, useState, createContext } from 'react'

export const themeContext = createContext({});


export function Home(){
const [data, setData] = useState([]);

useEffect(() =>{
fetch('https://localhost:3000/static/project.json').then((response) => response.json())
.then(setData)
},[]);

const [theme, setTheme] = useState("dark")

const themButton = () =>{
    setTheme((crr) => (crr === "light" ? "dark": "light"))
}

return(
    

<themeContext.Provider value={{theme, themButton}}>
    <div className="app" id={theme}>
        <div id="Home">
            <header>
                <div className='theme'>
                    <img src={ThemeIcon} alt="mudar tema" onClick={themButton}/>
                </div>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/joaomarcoso/"  target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin" className='linkedin' />
                    </a>
                    <a href="https://github.com/JoaoM-py" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className='middle-icon' />
                    </a>
                    <a href="https://twitter.com/JFatec" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className='intagram' />
                    </a>
                </div>
            </header>
            <main>
                <div id="Information">
                    <div className="Me-hello">
                        <div className="Me">
                            <img src={perfilImage} alt="" />
                        </div>
                        <div className="hello">
                            Hello.
                        </div>
                    </div>
                    <div className="Intro-port">
                        <p className="introduction">✋ João Marcos - Introdução</p>
                        <p className='intro-p'>Olá meu nome é João marcos e gosto de <br />
                            desenvolver soluções inovadores e incríveis. <br />
                            Utilizo principalmente react e node js para desenvolver <br />
                            novos projetos.
                        </p>
                        <p className='port-tittle'>Portifólio</p>
                        <ul>
                            <li>Desenvolvimento web;</li>
                            <li>Desenvolvedor Backend;</li>
                            <li>Desenvolvedor Frontend.</li>
                        </ul>
                    </div>
                </div>
                <div className='line-box'>
                    <div className="line"></div>
                </div>
            </main>
            <aside className="mac">
                <div className="mac-header">
                    <div className="dots">
                        <div className="red" style={{height:'8px', width:'8px', backgroundColor:'#FF5F56'}}></div>
                        <div className="yellow" style={{height:'8px', width:'8px', backgroundColor:'#FFBD2E'}}></div>
                        <div className="green" style={{height:'8px', width:'8px', backgroundColor:'#27C93F'}}></div>
                    </div>

                    <div className="search-bar">
                        <p>JoaoMarcos.com</p>
                    </div>
                </div>
                <div className="about-education">
                    <div className="about-me">
                        .SobreMim &#123;
                        <div className="abt-inner">
                            <p>Função: Desenvolvedor</p>
                            <p>Linguagens: PY,JS/TS,JAVA</p>

                        </div>
                        &#125;
                    </div>
                    <div className="education">
                        .Formação &#123;
                        <div className="educ-inner">
                            <p>FATEC: Desenvolvimento de software(em curso)</p>
                            <p>Udemy: Bootcamp de Desenvolvimento web</p>
                        </div>
                        <div className="key">
                            &#125;
                        </div>

                    </div>
                </div>
            </aside>
            <section className="projects">
                <p>Projetos</p>
                <div className="carousel">
                    {data.map((item) => {
                    const {name, description, image, link} = item;
                    return(
                    <a href={link} style={{textDecoration:"none", color:"#8B949E"}} target="_blank"
                        rel="noopener noreferrer">
                        <div className="item">
                            <div className="dots">
                                <div className="red" style={{height:'8px', width:'8px', backgroundColor:'#FF5F56'}}>
                                </div>
                                <div className="yellow" style={{height:'8px', width:'8px', backgroundColor:'#FFBD2E'}}>
                                </div>
                                <div className="green" style={{height:'8px', width:'8px', backgroundColor:'#27C93F'}}>
                                </div>
                            </div>
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info">
                                <strong className='name'>{name}</strong>
                                <span className='description'>{description}</span>
                            </div>
                        </div>
                    </a>

                    )
                    })}
                </div>
            </section>
        </div>

    </div>
</themeContext.Provider>

)
}