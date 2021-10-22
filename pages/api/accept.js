import { table, getMinifiedRecords } from '../../utils/airtable';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const { name, surname } = req.body;
			const records = await table('Guests')
				.select({
					filterByFormula: `AND({name} = "${name}",{surname} = "${surname}")`,
				})
				.firstPage();
			const minifiedRecords = getMinifiedRecords(records);
			res.statusCode = 200;
			res.json(minifiedRecords);
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			res.json({ msg: 'Something went wrong looking for guests' });
		}
	}
	if (req.method === 'PUT') {
		try {
			const { id, fields } = req.body;

			const updatedRecord = await table('Guests').update(
				[{ id, fields }],
				{ typecast: true }
			);
			const minifiedRecord = getMinifiedRecords(updatedRecord);
			res.json(minifiedRecord);
			res.statusCode = 200;
		} catch (error) {
			console.error(error);
			res.json({
				msg: 'Something went wrong updating the Airtable to accept or decline',
			});
		}
	}
}
