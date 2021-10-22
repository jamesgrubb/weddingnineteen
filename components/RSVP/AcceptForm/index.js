import { useForm } from 'react-hook-form';

export default function AcceptForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {}; // your form submit function which will invoke after successful validation
	return (
		<form
			style={{ zIndex: 100, position: 'fixed', bottom: 0 }}
			onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input defaultValue='test' {...register('example')} />

			{/* include validation with required or other standard HTML validation rules */}
			<input {...register('exampleRequired', { required: true })} />
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && <p>This field is required</p>}

			<input type='submit' />
		</form>
	);
}
