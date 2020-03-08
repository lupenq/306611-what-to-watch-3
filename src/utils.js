export const getRating = (value) => {
  if (value >= 0 && value < 3) {
    return `Bad`;
  } else if (value >= 3 && value < 5) {
    return `Normal`;
  } else if (value >= 5 && value < 8) {
    return `Good`;
  } else if (value >= 8 && value <= 10) {
    return `Very good`;
  }

  return ``;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (time) =>
  [60, 60, 24]
    .map((n) => {
      const result = time % n;
      time = (time - result) / n;
      return (`0` + result).slice(-2);
    })
    .reverse()
    .join(`:`);

export const adaptMovieData = (movie) => ({
  name: movie.name,
  posterUrl: movie.poster_image,
  previewUrl: movie.preview_image,
  bigPosterUrl: movie.background_image,
  backgroundColor: movie.background_color,
  description: movie.description,
  rating: movie.rating,
  votes: movie.scores_count,
  director: movie.director,
  starring: movie.starring,
  runTime: movie.run_time,
  genre: movie.genre,
  releaseYear: movie.released,
  id: movie.id,
  isFavorite: movie.is_favorite,
  videoUrl: movie.video_link,
  trailerUrl: movie.preview_video_link
});

export const adaptMoviesData = (movies) => movies.map(adaptMovieData);
