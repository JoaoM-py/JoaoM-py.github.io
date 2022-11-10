import imageFrame from '../assets/images/Frame.svg'
import linkedinIcon from '../assets/images/Vector.svg'
import githubIcon from '../assets/images/Vector (1).svg'
import instagramIcon from '../assets/images/Vector (2).svg'
import ThemeIcon from '../assets/images/Group 6.svg'
import perfilImage from '../assets/images/EU.jpeg'

import '../styles/Home.css'
import { useEffect, useState } from 'react'

export function Home(){

const [data, setData] = useState([]);

useEffect(() =>{
fetch('http://localhost:3000/static/project.json').then((response) => response.json())
.then(setData)
},[]);




return(
<div id="Home">
    <header>
        <div className='theme'>
            <img src={ThemeIcon} alt="" />
        </div>
        <div className='social'>
            <img src={linkedinIcon} alt="Linkedin" />
            <img src={githubIcon} alt="GitHub" className='middle-icon' />
            <img src={instagramIcon} alt="Instagram" />
        </div>
    </header>
    <main>
        <div id="Information">
            <div className="Me-hello">
                <div className="Me">
                    <img src={perfilImage} alt="" />
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
        <img src={imageFrame} alt="" />
    </aside>
    <section className="projects">
        <p>Projetos</p>
        <div className="carousel">
            {data.map((item) => {
            const {name, title, description, image, link} = item;
            return(
            <div className="item">
                <div className="dots">
                    <div className="red" style={{height:'8px', width:'8px', backgroundColor:'#FF5F56'}}></div>
                    <div className="yellow" style={{height:'8px', width:'8px', backgroundColor:'#FFBD2E'}}></div>
                    <div className="green" style={{height:'8px', width:'8px', backgroundColor:'#27C93F'}}></div>
                </div>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="info">
                    <strong className='name'>{name}</strong>
                    <span className='description'>{description}</span>
                </div>
            </div>
            )
            })}
        </div>
    </section>

</div>

)
}