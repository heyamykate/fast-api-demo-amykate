import React from 'react'

import './style.css';

export default function PlaylistMovie({ movie }) {
	return (
		<div className="playlist-movie">
			<h3>{movie.Title}</h3>
		</div>
	)
}
