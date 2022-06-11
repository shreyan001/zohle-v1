import { useEffect, useState } from 'react';
import { pageAnimation } from '../App';
import Overlay from '../components/Overlay';
import hyp from '../assets/hyperbola.png';
import ter from '../assets/ter.png';
import woj from '../assets/wojak.png';


export default function Projects() {
	const [animationCompleted, setAnimationCompleted] = useState(false);
	function animationComplete() {
		setAnimationCompleted(true);
	}
	const title = 'our projects';
	useEffect(() => {
		pageAnimation(animationComplete);
	}, []);
	return (
		<>
			{animationCompleted ? null : <Overlay />}
			<div className="page">
				<div className="container">
					<div className="row">
						<h2 className="rinker">Projects we have worked with</h2>

					<div className="cardz">
					
                        <div class="card">
  <div class="card__content">
    
    <div class="card__front1">
    <img className="cardlogo" src={hyp}alt="hyp"/>
    </div> 
    
    <div class="card__back">
      <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
    </div>
    
  </div>
</div>
<div class="card">
  <div class="card__content">
    
    <div class="card__front2">
      <img className="cardlogo" src={ter}alt="ter"/>
    </div> 
    
    <div class="card__back">
      <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
    </div>
    
  </div>
</div>

<div class="card">
  <div class="card__content">
    
    <div class="card__front3">
   <img className="cardlogo" src={woj}alt="woj"/>
    </div> 
    
    <div class="card__back">
      <div class="card__body"><h2>Crypto battles</h2>
       <p> a blockchain based animation and gaming</p></div>
    </div>
    
  </div>
</div>

</div>
					</div>
				</div>
			</div>
		</>
	);
}
