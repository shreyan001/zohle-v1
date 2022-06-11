// import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
// import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
	{
		id: 1,
		subtitle: 'Website',
		title: 'Optimized,professional and high-converting websites',
		img: 'img1',
	},
	{
		id: 3,
		subtitle: 'Videos',
		title: ' Inexpensive and high quality marketing videos',
		img: 'img2',
	},
	{
		id: 2,
		subtitle: 'Marketing',
		title: 'tailored Marketing strategy for your business',
		img: 'img3',
	},
	
];

export default function Cases() {
	return (
		<section className="cases">
			<div className="container-fluid">
				<div className="cases-navigation">
					{/*<div className="cases-arrow prev disabled">
						<CasesPrev />
					</div>
					<div className="cases-arrow next">
						<CasesNext />
					</div>*/}
				</div>
				<div className="row">
					{caseStudies.map((caseItem) => (
						<div className="case" key={caseItem.id}>
							<div className="case-details">
								<span>{caseItem.subtitle}</span>
								<h2>{caseItem.title}</h2>
							</div>
							<div className= "imgbox">
							<div className="case-image">
								<img src={require(`../assets/${caseItem.img}.png`).default} alt={caseItem.title} />
							</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
