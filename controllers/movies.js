const MovieSchema = require('../models/Movie.js');
const Rating = require("../models/Rating");
const passport = require('passport');

module.exports.controller = (app) => {
    //Obtener películas
    app.get('/movies', function(req, res) {
        MovieSchema.find({}, 'name description release_year genre', (error, movies) => {
            if (error) { console.log(error); }
            res.send({
                movies,
            });
        });
    });

    //Obtener una sola película
    app.get('/api/movies/:id', (req, res) => {
        MovieSchema.findById(req.params.id, 'name description release_year genre', (error, movie) => {
            if (error) { console.error(error); }
            res.send(movie);
        });
    });

    //Agregar nueva pelicula
    app.post('/movies', (req, res) => {
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
        });
    });

    // Reseñar una película
    app.post('/movies/rate/:id', (req, res) => {
        const rating = new Rating({
            movie_id: req.params.id,
            user_id: req.body.user_id,
            rate: req.body.rate
        })

        rating.save(function (error, rating) {
            if (error) { console.log(error); }
            res.send({
                movie_id: rating.movie_id,
                user_id: rating.user_id,
                rate: rating.rate
            })
        })
    })
};
// Recibe la informacion y la envía a Movie, eso es lo que hace