import { useForm } from 'react-hook-form';
const Choice = (props) => {
	const { register, errors } = useForm();
	return (
		<div className='menu-form__form-group'>
			<div className='menu-form__form-label serif'>
				<label htmlFor={props.name}>{props.name}</label>
			</div>
			<div className='menu-form__form-input'>
				<input
					value={props.name}
					{...register(props.group)}
					type='radio'
					// name={props.group}
					id={props.name}
				/>
			</div>
		</div>
	);
};

export default Choice;
