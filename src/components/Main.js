import React from 'react';
import '../scss/main.scss'




export default function Main(){
	return (
		<div>
			<div className="fancy-card-grid">
				<a href="#" className="fancy-card">
					<span className="fancy-card__number" aria-hidden="true">/ 1</span>
					<h2 className="fancy-card__title">UI/UX Tools</h2>
					<span className="fancy-card__arrow" aria-hidden="true">{String.fromCharCode(8594)}</span>
					<img className="fancy-card__image" src="/images/l1.jpeg" />
					<img className="fancy-card__image" src="/images/l2.jpeg" />
					<img className="fancy-card__image" src="/images/l3.jpeg" />
					<img className="fancy-card__image" src="/images/l4.jpeg" />
					<img className="fancy-card__image" src="/images/l5.jpeg" />

				</a>
				<a href="#" className="fancy-card fancy-card--large fancy-card--offset-up">
					<span className="fancy-card__number" aria-hidden="true">/ 2</span>
					<h2 className="fancy-card__title">Device Mockups</h2>
					<span className="fancy-card__arrow" aria-hidden="true">{String.fromCharCode(8594)}</span>
					<img className="fancy-card__image" src="/images/l1.jpeg" />
					<img className="fancy-card__image" src="/images/l2.jpeg" />
					<img className="fancy-card__image" src="/images/l3.jpeg" />
					<img className="fancy-card__image" src="/images/l4.jpeg" />
					<img className="fancy-card__image" src="/images/l5.jpeg" />

				</a>
				<a href="#" className="fancy-card fancy-card--large fancy-card--offset-down">
					<span className="fancy-card__number" aria-hidden="true">/ 3</span>
					<h2 className="fancy-card__title">Scene Creators</h2>
					<span className="fancy-card__arrow" aria-hidden="true">{String.fromCharCode(8594)}</span>
					<img className="fancy-card__image" src="/images/l1.jpeg" />
					<img className="fancy-card__image" src="/images/l2.jpeg" />
					<img className="fancy-card__image" src="/images/l3.jpeg" />
					<img className="fancy-card__image" src="/images/l4.jpeg" />
					<img className="fancy-card__image" src="/images/l5.jpeg" />

				</a>
				<a href="#" className="fancy-card">
					<span className="fancy-card__number" aria-hidden="true">/ 4</span>
					<h2 className="fancy-card__title">Branding Mockups</h2>
					<span className="fancy-card__arrow" aria-hidden="true">{String.fromCharCode(8594)}</span>
					<img className="fancy-card__image" src="/images/l1.jpeg" />
					<img className="fancy-card__image" src="/images/l2.jpeg" />
					<img className="fancy-card__image" src="/images/l3.jpeg" />
					<img className="fancy-card__image" src="/images/l4.jpeg" />
					<img className="fancy-card__image" src="/images/l5.jpeg" />

				</a>
			</div>
		</div>
		);
}



