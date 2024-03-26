import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import './Categorias.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod16 from './img/prod16.jpg'
import prod17 from './img/prod17.png'
import prod18 from './img/prod18.jpg'
import prod19 from './img/prod19.jpg'
import prod20 from './img/prod20.jpeg'


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function Caminhao() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

    return (
        <>
        <Header />

        <Carousel className='carousel' afterChange={onChange}>
        <div className='carousel-1'>
          <img className='img1' src={img1} alt=""/>
          <div className="caption-1">
            <h1>Equipamentos para todas as fases da sua Obra</h1>
            <button>Orçamento</button>
          </div>
        </div>
        <div className='carousel-2'>
          <img className='img2' src={img1} alt="" />
          <div className="caption-2">
            <h1>Equipe Especializada</h1>
            <p>A Melhor equipe a sua disposição !</p>
            <button>Saiba Mais</button>
          </div>
        </div>
        <div className='carousel-3'>
          <img className='img3' src={img1} alt="" />
          <div className="caption-3">
            <h1>Lorem</h1>
            <p>Ipsulem</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </Carousel>

        <section className="hero">

        <div className="search-container">
            <h1>Buscar Equipamento</h1>
            <input type="text" id="search-input" className="search-input" placeholder="Digite o nome do Equipamento"/>
            <button id="search-button" className="search-button">Buscar</button>
        </div>

        
        <div className="App">
        <div className="categorias-containers">
            <div className="lista-categorias">
              <h1>Categorias</h1>
            <ul className='categorias-list'>
            <Link to={'/Equipamentos'}>
                <li className='category-item' ><a href="">Andaimes</a></li>
            </Link>
            <Link to={'/Betoneiras'}>
                <li className='category-item' ><a href="">Betoneiras</a></li>
            </Link>
            <Link to={'/Caminhao'}>
                <li className='category-item' ><a href="">Caminhão Munck</a></li>
           </Link>
           <Link to={'/Compactador'}>
                <li className='category-item' ><a href="">Compactador</a></li>
           </Link>
            <Link to={'/Compressores'}>
                <li className='category-item' ><a href="">Compressores de Ar</a></li>
            </Link>
            <Link to={'/Container'}>
                <li className='category-item' ><a href="">Container</a></li>
            </Link>
            
            <li className='category-item' ><a href="">Diversos</a></li>
            <li className='category-item' ><a href="">Escoramento</a></li>
            <li className='category-item' ><a href="">Ferramentas Elétricas</a></li>
            <li className='category-item' ><a href="">Geradores</a></li>
            <li className='category-item' ><a href="">Máquinas</a></li>
            <li className='category-item' ><a href="">Movimentação de Cargas</a></li>
            <li className='category-item' ><a href="">Plataformas Aéreas</a></li>
            <li className='category-item' ><a href="">Terra Planagem</a></li>
            <li className='category-item' ><a href="">Torres de Iluminação</a></li>
            </ul>
            </div>    
        </div>

        <div className="produtos">
          <div className="line3">
            <div className="divprod16">
                <img src={prod16} alt="" />
                <button>Rolo Compactador</button>
            </div>
            <div className="divprod17">
                <img src={prod17} alt="" />
                <button>Compactador CM13</button>
            </div>
            <div className="divprod18">
                <img src={prod18} alt="" />
                <button>CM20 Elétrico Trifásico</button>
            </div>
            <div className="divprod19">
                <img src={prod19} alt="" />
                <button> CM20 Diesel</button>
            </div>
          </div>
             <div className="divprod20">
                <img src={prod20} alt="" />
                <button>Compactador Percussão</button>
            </div>
        </div>
        </div>

        </section>
        <Footer />
        </>
    )
}