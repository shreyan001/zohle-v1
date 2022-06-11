import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="site-nav">
			<div className="container">
				<div className="nav-columns">
					<div className="nav-column">
						<div className="nav-label">Menu</div>
						<ul className="nav-links">
							<li>
								<NavLink to="/projects" exact>
									Projects
								</NavLink>
							</li>
							<li>
							<NavLink to="/about" exact>
									About us
								</NavLink>
								
							</li>
							
							<li><NavLink to="/contact" exact>
									Contact
								</NavLink>
								
							</li>
						</ul>
					</div>
					<div className="nav-column">
						<div className="nav-infos">
							<ul className="nav-info">
								<li className="nav-info-label">Email</li>
								<li >contact@zohle.com</li>
								<li>
									<NavLink to="/contact" exact>
										Get in touch with us
									</NavLink>
								</li>
							
							</ul>

							<ul className="nav-info">
								<li className="nav-info-label">Headquarter</li>
							   <li>Electronic city, Bangalore</li>
								<li>India.</li>
							</ul>
						
							<ul className="nav-info">
								<li className="nav-info-label">Legal</li>
								<li>Privacy & Cookies</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
