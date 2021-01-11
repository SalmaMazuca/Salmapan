const MovieSchema = require('../models/Movie');

module.exports.controller = (app) => {
    //Agregar pelicula
    app.post('/movies', (req, res) =>{
        const newMovie = new MovieSchema({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre
        });

        newMovie.save((error, movie) => {
            if(error){
                console.error(`Se presenta el siguiente error: ${error}`);
            }
            res.send(movie);
        })
    })
}