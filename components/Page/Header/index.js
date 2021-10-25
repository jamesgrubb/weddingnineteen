import PropTypes from 'prop-types';
const Title = ({ Level, className, children }) => {
	return (
		<>
			<Level className={className}>{children}</Level>
		</>
	);
};

Title.defaultProps = {
	Level: 'h1',
};

Title.propTypes = {
	Level: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};

export default Title;
