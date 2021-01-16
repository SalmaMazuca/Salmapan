const mongoose = require('mongoose');
// Atributos de AddMovie, envía la información y la recibe Movie.js
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    name: String,
    description: String,
    release_year: Number,
    genre: String
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;  // Se ejecuta con express