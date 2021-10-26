const Section = ({ children, ...props }) => {
	const style = {
		'--header-background': props.headerBackground,
		'--body-background': props.bodyBackground,
	};

	return (
		<section
			id={props.title.toLowerCase().replace(/\s+/g, '-')}
			className='section'>
			<div style={style} className='section__item'>
				<div className='section__content'>
					<header className='section__header'>
						<h2 className='section__title'>{props.title}</h2>
					</header>
				</div>
			</div>
			<div style={style} className='section__item'>
				<div className='section__content'>
					<div style={style} className='section__body'>
						{children}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;
