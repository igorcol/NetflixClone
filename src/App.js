import { div } from "prelude-ls";
import React, { useEffect, useState } from "react";
import './App.css'
import Tmdb from "./Tmdb";

import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie"
import Header from './components/Header'



export default () => {

  const [movieList, setMovieList]       = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader]   = useState(false)

  useEffect(() => {
    async function loadAll() {

      // Pega a lista inteira
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pega o filme em destaque (Aleatório)
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length  ))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

  // Monitora o Scroll 
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scholl', scrollListener)
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>  
        Netflix clone<br/>
        Made by <strong>Igor Colombini</strong><br/>
        Movies API by TheMovieDb.org <br/>

        <div className="email">igor.colombini@gmail.com</div>
      </footer>
        

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando..."/>
        </div>
      }
      
    </div>
  );
};
