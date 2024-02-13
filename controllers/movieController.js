const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({
      data: movies,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(200).json({
        data: movie,
        success: true,
      });
    } else {
      res.status(404).json({
        message: `Movie with id ${req.params.id} not found`,
        success: false,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

const updateSingleMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: `${updatedMovie.name} Movie updated successfully`,
      data: updatedMovie,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

const deleteSingleMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (movie?.name) {
      res.status(200).json({
        success: true,
        message: `${movie.name} Movie deleted successfully`,
      });
    } else {
      res.status(404).json({
        message: `Movie with id ${req.params.id} not found`,
        success: false,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

const createMovie = async (req, res) => {
  const movie = req.body;
  try {
    const duplicate = await Movie.findOne({ name: movie.name });

    if (duplicate) {
      return res.json({
        message: `Movie ${movie.name} already exists`,
        success: false,
      });
    }
    const newMovie = await Movie.create(movie);

    res.status(201).json({
      message: "Movie created successfully",
      data: newMovie,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getSingleMovie,
  deleteSingleMovie,
  updateSingleMovie,
};
