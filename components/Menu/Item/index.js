const Item = (props) => {
	return (
		<div className='menu-form__form-group'>
			<div className='menu-form__form-label serif'>
				<p>{props.name}</p>
			</div>
		</div>
	);
};

export default Item;
