export default {
    getMovies: function(){
        return Promise.resolve(this.movies);
    },
    movies: [
        {
            id:1,
            name:"Terminator",
            director:"James Cameron",
            year:"1988"
        },
        {
            id:2,
            name:"Terminator2",
            director:"James Cameron",
            year:"1992"
        },
        {
            id:3,
            name:"Forrest Gump",
            director:"Robert Zewekis",
            year:"1994"
        }
    ]
}