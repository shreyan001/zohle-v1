import { useEffect, useState } from 'react';
import { pageAnimation } from '../App';
import Overlay from '../components/Overlay';
import { Widget } from '@typeform/embed-react'



export default function Contact() {
	const [animationCompleted, setAnimationCompleted] = useState(false);
	function animationComplete() {
		setAnimationCompleted(true);
	}
	const title = 'Contact us';
	useEffect(() => {
		pageAnimation(animationComplete);
	}, []);
	return (
		<>
			{animationCompleted ? null : <Overlay />}
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="longer"><h2>Let's talk about your project</h2>
					      <p>Fill in the form, or, if you prefer, send us an email.</p> 
					       <Widget id="https://pkuhdrk26y6.typeform.com/to/aiazUO9l"  className="my-form" />

					      <h4>or mail us at <a href="#">contact@zohle.com</a></h4></div>
					</div>

					
				</div>
			</div>
		</>
	);
}
