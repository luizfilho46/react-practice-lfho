import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
/* import dados from '../../data/dados_iniciais.json'; */
import categorias from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categorias.getAllWithVideos().then(setDados);
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />
      {dados.length === 0 && (<div>Loading....</div>)}

      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="Conteúdo avançado sobre programação e arquitetura..."
              />
              <Carousel ignoreFirstVideo category={categoria} />
            </div>
          );
        }
        return (<Carousel key={categoria.id} category={categoria} />);
      })}
    </PageDefault>
  );
}

export default Home;
