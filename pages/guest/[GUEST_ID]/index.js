import { table, getMinifiedRecords } from '../../../utils/airtable';
import { UpdateGuest } from '../../../components/Forms/UpdateGuest';
import { useForm } from 'react-hook-form';
const Guest = (props) => {
	const { handleSubmit } = useForm();
	// console.log(guest, formItems);
	const saveGuestDataHandler = async (enteredGuestData) => {
		const newGuestData = {
			id: props.guest.id,
			fields: enteredGuestData,
		};
		console.log('guest data', newGuestData.fields);
		try {
			const result = await fetch('/api/accept', {
				method: 'PUT',
				statusCode: 200,
				body: JSON.stringify(newGuestData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(await result.json());
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='menu-wrapper'>
			<UpdateGuest
				key={props.formItems.id}
				onSaveGuestData={saveGuestDataHandler}
				formItems={props.formItems}
				guest={props.guest}
			/>
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
				guest: guest,
				formItems: menuItems,
			},
		};
	} catch (error) {
		console.error(error);
	}
}
