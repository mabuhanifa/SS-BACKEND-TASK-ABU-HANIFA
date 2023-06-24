const Movie = require("../models/Movie");

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
      message: error,
      success: false,
    });
  }
};

module.exports = {
  createMovie,
};
