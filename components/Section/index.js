import { colorGreen } from '/styles/colors.module.scss';

const Section = (props) => {
	const style = {
		'--header-background': props.headerBackground,
		'--body-background': props.bodyBackground,
	};

	return (
		<section className='section'>
			<div style={style} className='section__item'>
				<div className='section__content'>
					<header className='section__header'>
						{colorGreen}
						<h2 className='section__title'>{props.title}</h2>
						<h3 className='section__subtitle'>{props.subtitle}</h3>
					</header>
				</div>
			</div>
			<div style={style} className='section__item'>
				<div className='section__content'>
					<div style={style} className='section__body'>
						{props.children}
					</div>
				</div>
			</div>

			<div className='section__item'></div>
		</section>
	);
};

export default Section;