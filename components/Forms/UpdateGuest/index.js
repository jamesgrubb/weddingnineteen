import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import Item from '../../../components/Menu/Item';
import styles from './Menu.module.scss';
const validationSchema = object().shape({
	Starter: string().required(),
	Main: string().required(),
});

const Menu = ({ control, intolerances }) => {
	const items = useWatch({
		control,
	});
	console.log(`intolerances`, intolerances);

	return (
		<div className={styles.menu}>
			<div className={styles.menuItems}>
				<strong className={styles.menuTitle}>your starter</strong>
				{items.Starter ? (
					<p className={styles.menuItem}>{items.Starter}</p>
				) : (
					''
				)}
			</div>
			<div className={styles.menuItems}>
				<strong className={styles.menuTitle}>your main course</strong>

				{items.Main ? (
					<p className={styles.menuItem}>{items.Main}</p>
				) : (
					''
				)}
			</div>
			<div className={styles.menuItems}>
				<strong className={styles.menuTitle}>Food Intolerance</strong>
				{intolerances.map((item) => {
					return (
						<div key={item.id} className={styles.dietGroup}>
							<label htmlFor={item.id}>{item.fields.Name}</label>
							<input
								type='checkbox'
								// {...register(`Intolerance`)}
								id={item.id}
								value={item.fields.Name}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const UpdateGuest = ({ formItems, guest, intolerances, ...props }) => {
	const { Name } = guest[0].fields;

	const { register, control, formState, handleSubmit } = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			Starter: '',
			Main: '',
			Intolerance: [],
		},
	});

	const { errors } = formState;

	const onSubmit = (data) => {
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

	return (
		<form className='menu-form' onSubmit={handleSubmit(onSubmit, onError)}>
			<div className='menu-form__view'>
				<div className='menu-form__view-content'>
					<Menu intolerances={intolerances} control={control} />
					<div className={styles.menuSubmit}>
						<p>
							Happy with your choice? Send your order. otherwise,
							choose gain. If you change your mind after clicking
							the send button. Start over
						</p>
						<button type='submit' className='btn'>
							<span>send order</span>
						</button>
					</div>
					{/* <input className='btn' type='submit' /> */}
				</div>
			</div>
			<div className='menu-form__choice'>
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
				{errors?.Starter ? (
					<div className='error'>{errors?.Starter?.message}</div>
				) : (
					''
				)}

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
				{errors?.Main ? (
					<label className='error'>{errors?.Main?.message}</label>
				) : (
					''
				)}

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
