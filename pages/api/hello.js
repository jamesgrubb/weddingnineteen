// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	try {
		if (req.method === 'POST') {
			const data = req.body;
			res.status(200).json(data);
		}
	} catch (error) {
		console.error(error);
		(res.statusCode = 500), res.json({ msg: 'something went wrong' });
	}
}
