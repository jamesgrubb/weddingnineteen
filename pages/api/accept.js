import { table, getMinifiedRecords } from '../../utils/airtable';

function toTitleCase(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const { name, surname } = req.body;
			const records = await table('Guests')
				.select({
					filterByFormula: `OR(
						(AND({name} = "${name}",{surname} = "${surname}")),
						(AND({name} = "${toTitleCase(name)}",{surname} = "${toTitleCase(surname)}")),
						(AND({name} = "${name}",FIND("${surname}",{surname})>0)),
						(AND({name} = "${name}",FIND(REGEX_REPLACE("${surname}",'[^-]*','' ),{surname})>0))											
						)`,
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
