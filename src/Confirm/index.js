import React from 'react'
import './style.css';

export default function Confirm({ onConfirm, onDecline }) {
	return (
		<div className="background">
			<div className="confirm">
				<p>
					Are you sure you want to add this movie to your playlist?
				</p>
				<div className="buttons">
					<button 
						className="confirm-btn yes" 
						onClick={() => onConfirm()}
					>
						Yes
					</button>
					<button 
						className="confirm-btn no" 
						onClick={() => onDecline()}
					>
						No
					</button>
				</div>
				<div className="fave-color">
					My favorite color is rose gold.
				</div>
			</div>
		</div>
	)
}
