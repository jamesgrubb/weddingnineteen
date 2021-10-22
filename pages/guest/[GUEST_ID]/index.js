import { table, getMinifiedRecords } from '../../../utils/airtable';
import { UpdateGuest } from '../../../components/Forms/UpdateGuest';

const Guest = (props) => {
	// console.log(guest, formItems);
	const handleUpdateGuest = async (data) => {
		const newGuestData = {
			id: guest.id,
			fields: data,
		};
	};

	return (
		<div className='menu-wrapper'>
			<UpdateGuest
				key={props.formItems.id}
				onHandleUpdateGuest={handleUpdateGuest}
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
