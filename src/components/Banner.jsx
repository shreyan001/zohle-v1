import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { MouseContext } from '../context/mouseContext';
export default function Banner() {
	const { cursorChangeHandler } = useContext(MouseContext);

	return (
		<section className="banner">
			<div className="container">
				<div className="row">
					<h2 className="heading">
						<div className="line">
							<span>Unleash your online potential</span>
						</div>
						<div className="line">
							<span>with our personalized digital services</span>
						</div>
					</h2>
					<Link
						to="/about"
						className="btn"
						onMouseEnter={() => cursorChangeHandler('hovered')}
						onMouseLeave={() => cursorChangeHandler('')}
					>
						more about us
						<span>
							<RightArrow />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
