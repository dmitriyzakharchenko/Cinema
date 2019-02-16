import store from './data.js'

store.getMovies().then(result =>{
    let movies = new Movies(result);
    movies.getMovies();
    let movieView = new MovieListView(movies, document.getElementById('movie-list'));
    movieView.render();

})

class Movies{
    constructor(movies){
        this.movies = movies;
    }
    getMovies(){
        this.movies;
    }
    getMovieById(id){
        return this.movies.find(item => item.id === id);
    }
    addMovie(movie){
        this.movies.push(movie)
    }
}
class MovieListView {
    constructor(model,el,datailsEl) {
        this.model = model;
        this.element = el;
        this.datailElement = datailsEl;
        this.element.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('movie-item')) {
                this.datailElement.setMovie(this.model.getMovies()[0],document.getElementById())

            }
        });
    }
    render(){
        let movies = this.model.getMovies();
            movies.forEach(item =>{
            let movie = document.createElement('div');
            movie.innerHTML = `<div class="movie-item">${item.name}</div>`;
            this.element.appendChild(movie);

        })
    }
}
class MovieDetailsView{
    constructor(movie,el){
        this.movie = movie;
        this.element = element;
    }
    setMovie(movie){
        this.movie = movie;
    }
    render(){
        let movie = document.createElement('div');
        movie.innerHTML = `<div>title: ${name}</div>
                           <div>year: ${year}</div>
                           <div>director: ${director}</div>`;

        this.element.appendChild(movie) ;
    }
}