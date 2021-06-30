// Recebe as informações da API TMDB

const API_KEY  = 'b0a27898cad95d39679e772ec98efe0a';
const API_BASE = 'https://api.themoviedb.org/3';

let netflixOriginals1 = `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
let netflixOriginals2 = `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`

/*
- Originais da netflix
- Recomendados (trending)
- Em alta (top rated)
- ação, comédia, terror, romance, documentarios
*/

async function basicFetch(endpoint) {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: '"Originais" do Cloneflix',
                items: await basicFetch(netflixOriginals2)
            },
            {
                slug: 'trending',
                title: 'Em Alta',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Populares',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            
            // Gêneros
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documantary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                default: 
                    info = null
                break
            }
        }

        return info
    }
}