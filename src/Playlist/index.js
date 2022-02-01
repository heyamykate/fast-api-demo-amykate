import React from 'react'

import PlaylistMovie from '../PlaylistMovie';

import './style.css';

export default function Playlist({ movies }) {
	return (
		<div className="playlist">
			<div className="playlist-header">
				<h2>Playlist</h2>
			</div>
			<div className="playlist-contents">
				{movies.length === 0 ? (
					<p>No movies saved</p>
				) : (
					movies.map((movie, index) => (
						<PlaylistMovie movie={movie} key={index} />
					))
				)}
			</div>
		</div>
	)
}
