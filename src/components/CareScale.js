import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
// import { useState } from 'react'

// function howMuchWaterCare(value) {
// 	switch(value){
// 		case '1':
// 			alert('Cette plante requiert peu d\'arrosage.')
// 			break;
// 		case '2':
// 			alert('Cette plante requiert modérément d\'arrosage.')
// 			break;
// 		case '3':
// 			alert('Cette plante requiert beaucoup d\'arrosage.')
// 	}
// }

// function howMuchWaterCare(value) {
// 	switch(value){
// 		case '1':
// 			alert('Cette plante requiert peu de lumière.')
// 			break;
// 		case '2':
// 			alert('Cette plante requiert modérément de lumière.')
// 			break;
// 		case '3':
// 			alert('Cette plante requiert beaucoup de lumière.')
// 	}
// }

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} /*onClick={()=> {
					// 	howMuchWaterCare(rangeElem)
					// 	howMuchLightCare(rangeElem)
					// 	}
					// 	}*/
					>
							{scaleType}
					</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
