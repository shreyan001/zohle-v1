import { useEffect, useState } from 'react';
import { pageAnimation } from '../App';
import Overlay from '../components/Overlay';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { MouseContext } from '../context/mouseContext';





	




export default function About() {
	const { cursorChangeHandler } = useContext(MouseContext);
	const [animationCompleted, setAnimationCompleted] = useState(false);
	function animationComplete() {
		setAnimationCompleted(true);
	}
	const title = 'About Us';
	useEffect(() => {
		pageAnimation(animationComplete);
	}, []);
	return (
		<>
			{animationCompleted ? null : <Overlay />}
			<div className="page">
				<div className="container">
					<div className="row">
						<h3>
							{title.split(' ').map((letter) => (
								<span key={letter}>{letter}</span>
							))}

						</h3>
					<div className="heads">	<h1 className="pixen">What defines us</h1>

					<p className="paras"> Zohle the one-stop agency 
					that revolves around design, analytics, development, optimization, and marketing.
					 Our expertise lies in the ability to offer extraordinary services at a reasonable
					  price best suited for small businesses and startups. We provide personalized service to every client,
 so we can best use our expertise to help you succeed.</p>

                     <Link
						to="/services"
						className="btn1"
						onMouseEnter={() => cursorChangeHandler('hovered')}
						onMouseLeave={() => cursorChangeHandler('')}
					>
						our services
						<span>
							<RightArrow />
						</span>
					</Link>


			</div>
					</div>
				</div>
			</div>
			
		</>
	);
}
