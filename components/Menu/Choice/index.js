import { forwardRef } from 'react';
const Choice = forwardRef((props, ref) => {
	// const { register, errors } = useForm();
	Choice.displayName = 'Choice';
	return (
		<div className='menu-form__form-group'>
			<div className='menu-form__form-label serif'>
				<label htmlFor={props.name}>{props.name}</label>
			</div>
			<div className='menu-form__form-input'>
				<input
					value={props.name}
					type='radio'
					ref={ref}
					// name={props.group}
					id={props.name}
				/>
			</div>
		</div>
	);
});

export default Choice;
