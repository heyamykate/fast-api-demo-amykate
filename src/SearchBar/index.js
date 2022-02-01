import React from 'react'

import './style.css';

export default function SearchBar({ onSearchSubmit, inputRef }) {
	return (
		<div className="searchbar-container">
			<input
			ref={inputRef}
			className="searchbar-input"
			type="text"
			placeholder="What movie do you want to see?"
			onChange={onSearchSubmit}
			/>
      </div>
	)
}
