import PropTypes from 'prop-types';
const Title = ({ Level, className, children }) => {
	return (
		<>
			<Level className={className}>{children}</Level>
		</>
	);
};

Title.propTypes = {
	Level: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Title;
