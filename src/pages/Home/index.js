import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
// import Footer from './components/Footer'
import dados from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"Conteúdo avançado sobre programação e arquitetura..."}
      />

      <Carousel ignoreFirstVideo category={dados.categorias[0]} />      
      <Carousel category={dados.categorias[1]} />
      <Carousel category={dados.categorias[2]} />     
      <Carousel category={dados.categorias[3]} />     
      <Carousel category={dados.categorias[4]} />      
      <Carousel category={dados.categorias[5]} />
    </div>
  );
}

export default Home;
