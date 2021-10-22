import { table, getMinifiedRecords } from '../../../utils/airtable';
import { useForm } from 'react-hook-form';
import Choice from '../../../components/Menu/Choice';
import Item from '../../../components/Menu/Item';
import Section from '../../../components/Section';
const Guest = (props) => {
	console.log(props.starters);
	const { handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className='menu-wrapper'>
			<form className='menu-form' onSubmit={handleSubmit(onSubmit)}>
				<div className='menu-form__view'>
					<div className='menu-form__view-content'>
						<div className='menu-form__view-header'>
							Your choice {props.fields.Name}
						</div>
						<button className='btn' type='button'>
							submit
						</button>
					</div>
				</div>
				<div className='menu-form__choice'>
					<h1 className='menu-form__title'>Menu</h1>
					<div className='menu-form__choice-header'>
						<h4>Starters</h4>
					</div>
					{props.starters.map((item) => {
						return (
							<Choice
								key={item.fields.Dish}
								name={item.fields.Dish}
								group={item.fields.Type}
							/>
						);
					})}
					<div className='menu-form__choice-header'>
						<h4>Mains</h4>
					</div>
					{props.mains.map((item) => {
						return (
							<Choice
								key={item.fields.Dish}
								name={item.fields.Dish}
								group={item.fields.Type}
							/>
						);
					})}
					<div className='menu-form__choice-header'>
						<h4>Desert</h4>
					</div>
					{props.desert.map((item) => {
						return <Item name={item.fields.Dish} />;
					})}
				</div>
			</form>
		</div>
	);
};
export default Guest;

export async function getStaticPaths() {
	const records = await table('Guests').select({}).firstPage();
	const minifiedRecords = getMinifiedRecords(records);

	try {
		return {
			fallback: false,
			paths: minifiedRecords.map((record) => ({
				params: { GUEST_ID: record.id },
			})),
		};
	} catch (error) {}
}

export async function getStaticProps(context) {
	try {
		const menuRecords = await table('Menu').select({}).firstPage();
		const menuItems = getMinifiedRecords(menuRecords);

		const guestId = context.params.GUEST_ID;
		const record = await table('Guests')
			.select({
				filterByFormula: `RECORD_ID() = '${guestId}'`,
			})
			.firstPage();
		const guest = getMinifiedRecords(record);

		return {
			props: {
				id: guest[0].id,
				fields: guest[0].fields,
				starters: menuItems.filter((item) => {
					return item.fields.Type === 'Starter';
				}),
				mains: menuItems.filter((item) => {
					return item.fields.Type === 'Main';
				}),
				desert: menuItems.filter((item) => {
					return item.fields.Type === 'Desert';
				}),
				youngDiner: menuItems.filter((item) => {
					return item.fields.Type === 'YoungDiner';
				}),
			},
		};
	} catch (error) {
		console.error(error);
	}
}
