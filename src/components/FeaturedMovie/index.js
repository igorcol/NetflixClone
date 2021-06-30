import React from 'react'
import './FeaturedMovie.css'

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default ({item}) => {
    console.log(item)

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if(description.length > 200) {
        description = description.substring(0,200)+"..."
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    
                    <div className="featured--name">{item.original_name}</div>
                    <div className="netflixOriginal"><strong>NETFLIX</strong></div>

                    <div className="featured--info">
                        <div className="points">{item.vote_average} pontos</div>
                        <div className="year">{firstDate.getFullYear()}</div>
                        <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                    </div>

                    <div className="featured--description">{description}</div>

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="watchBtn">▶ Assistir</a>
                        <a href={`list/add/${item.id}`} className="mylistBtn">Mais informações</a>
                    </div>
                    <div className="features--genres"><strong>Gêneros:</strong> {genres.join(", ")}</div>

                </div>
            </div>
        </section>
    )
}


