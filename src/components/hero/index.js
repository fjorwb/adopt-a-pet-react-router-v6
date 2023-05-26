import React from 'react'

const Hero = ({ image, displayText }) => {
	const type = ''

	return (
		<div
			className='hero-container'
			style={{
				backgroundImage: `linear-gradient(black, #3631da42), url("${
					image || 'pets-hero.png'
				}")
          `,
				backgroundBlendMode: 'color-dodge',
				backgroundSize: 'cover',
				backgroundColor: '#rgba(0, 0, 0, 0.4)'
			}}>
			<h2>{displayText || getHeroTitle(type)}</h2>
		</div>
	)
}

export default Hero

const getHeroTitle = (type) => {
	switch (type) {
		case 'dog':
			return 'Dogs'
		case 'cat':
			return 'Cats'
		case 'rabbit':
			return 'Rabbits'
		case 'bird':
			return 'Birds'
		default:
			return 'Find your perfect pet'
	}
}
