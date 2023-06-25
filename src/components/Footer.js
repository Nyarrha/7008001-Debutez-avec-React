import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('exemple@adresse.mail')
	function isMailValid(value){
		if (!value.includes('@')) {
			alert('Adresse invalide. Veuillez utiliser un @ dans votre adresse.')
			setInputValue(value)
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
				<form>
					<textarea
						value={inputValue}
						onChange={(e)=> setInputValue(e.target.value)}
						onBlur={(e) => isMailValid(e.target.value)}
					/>
					<button type='submit'>Envoyer</button>
				</form>
			</div>
		</footer>
	)
}

export default Footer
