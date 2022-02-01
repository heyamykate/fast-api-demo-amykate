import React from 'react'

import './style.css'

export default function Results({ movie, saveMovieToPlaylist }) {
	const hasMovieResult = Object.keys(movie).length > 0;
	return (
		hasMovieResult && (
			<div className="results-container">
				<div className="movie-row">
					<div className="header-row">
						<img src={movie.Poster} className="movie-poster" />
						<div className="details">
							<h2 className="movie-title">{ movie.Title }</h2>
							<p className="movie-year">{ movie.Year } | { movie.Rated } | {movie.Metascore}% <span>👍</span></p>
							<p className="movie-plot">
								{ movie.Plot }
							</p>
						</div>
					</div>
					<div className="action-row">
						<button className="btn" onClick={() => saveMovieToPlaylist(movie)}>
							Add to Playlist
						</button>
					</div>
				</div>
			</div>
		)
	);
}