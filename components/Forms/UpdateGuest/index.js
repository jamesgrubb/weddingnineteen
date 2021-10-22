import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import Item from '../../../components/Menu/Item';
const validationSchema = object().shape({
	Starter: string().required(),
	Main: string().required(),
});

const Menu = ({ control }) => {
	const items = useWatch({
		control,
	});
	console.log(items);
	return (
		<div className='menu__mini'>
			{items.Starter ? (
				<>
					<em className='serif'>Starter</em>
					<p>{items.Starter}</p>
				</>
			) : (
				''
			)}
			{items.Main ? (
				<>
					<em className='serif'>Main</em>
					<p>{items.Main}</p>
				</>
			) : (
				''
			)}
		</div>
	);
};

export const UpdateGuest = ({ formItems, guest, ...props }) => {
	const { Name } = guest[0].fields;

	const { register, control, formState, handleSubmit } = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			Starter: '',
			Main: '',
		},
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		console.log(data);
		props.onSaveGuestData(data);
	};
	const onError = (error) => {
		console.log('Submit error: ', error);
	};
	const starters = formItems.filter((item) => {
		return item.fields.Type === 'Starter';
	});
	const mains = formItems.filter((item) => {
		return item.fields.Type === 'Main';
	});

	const deserts = formItems.filter((item) => {
		return item.fields.Type === 'Desert';
	});
	console.log(starters);

	return (
		<form className='menu-form' onSubmit={handleSubmit(onSubmit, onError)}>
			<div className='menu-form__view'>
				<div className='menu-form__view-content'>
					<div className='menu-form__view-header'>
						Your choice {Name}
					</div>
					<Menu control={control} />
					<input className='btn' type='submit' />
				</div>
			</div>
			<div className='menu-form__choice'>
				<h1 className='menu-form__title'>Menu</h1>
				<div className='menu-form__choice-header'>
					<h4>Starters</h4>
				</div>
				{starters.map((starter) => {
					return (
						<div
							className='menu-form__form-group serif'
							key={starter.id}>
							<div className='menu-form__form-label'>
								<label htmlFor={starter.id}>
									{starter.fields.Dish}
								</label>
							</div>
							<div className='menu-form__form-input'>
								<input
									type='radio'
									{...register(`Starter`)}
									value={starter.fields.Nickname}
									id={starter.id}
								/>
							</div>
						</div>
					);
				})}
				<div className='error'>{errors?.Starter?.message}</div>
				<div className='menu-form__choice-header'>
					<h4>Mains</h4>
				</div>
				{mains.map((main) => {
					return (
						<div
							className='menu-form__form-group serif'
							key={main.id}>
							<div className='menu-form__form-label'>
								<label htmlFor={main.id}>
									{main.fields.Dish}
								</label>
							</div>
							<div className='menu-form__form-input'>
								<input
									key={main.id}
									type='radio'
									id={main.id}
									{...register(`Main`)}
									value={main.fields.Nickname}
								/>
							</div>
						</div>
					);
				})}
				<label className='error'>{errors?.Main?.message}</label>
				<div className='menu-form__choice-header'>
					<h4>Desert</h4>
				</div>
				{deserts.map((item) => {
					return <Item key={item.id} name={item.fields.Dish} />;
				})}
			</div>
		</form>
	);
};
