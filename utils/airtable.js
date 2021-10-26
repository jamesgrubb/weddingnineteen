const Airtable = require('airtable');
const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = (tableName) => {
	return base(tableName);
};

const getMinifiedRecords = (records) => {
	return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
	return {
		id: record.id,
		fields: record.fields,
	};
};

export { table, getMinifiedRecords, minifyRecord };
