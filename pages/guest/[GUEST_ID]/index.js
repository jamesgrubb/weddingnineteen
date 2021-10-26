import { table, getMinifiedRecords } from '../../../utils/airtable';
import { UpdateGuest } from '../../../components/Forms/UpdateGuest';
import { useForm } from 'react-hook-form';
import Blank from '../../../components/Layouts/Blank';
import Header from '../../../components/Page/Header';
import styles from '../../../components/Page/Header/Header.module.scss';
const Guest = (props) => {
	const { handleSubmit } = useForm();

	const saveGuestDataHandler = async (enteredGuestData) => {
		const newGuestData = {
			id: props.id,
			fields: enteredGuestData,
		};
		try {
			const result = await fetch('/api/accept', {
				method: 'PUT',
				statusCode: 200,
				body: JSON.stringify(newGuestData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='menu-wrapper'>
			<Header Level='h1' className={styles.h1}>
				Menu
			</Header>
			<Header Level='h2' className={styles.h2}>
				{props.guest[0].fields.Name}, we are so happy ypu can make our
				wedding. Please choose your food for the day
			</Header>
			<UpdateGuest
				key={props.formItems.id}
				onSaveGuestData={saveGuestDataHandler}
				formItems={props.formItems}
				guest={props.guest}
				intolerances={props.diet}
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
		const dietRecords = await table('Intolerances').select({}).firstPage();

		const intolerances = getMinifiedRecords(dietRecords);
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
				diet: intolerances,
				id: guestId,
				guest: guest,
				formItems: menuItems,
			},
		};
	} catch (error) {
		console.error(error);
	}
}

Guest.getLayout = function getLayout(page) {
	return <Blank>{page}</Blank>;
};
