import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

dbConnect();

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const items = await Item.find({});
            res.status(200).json({ success: true, data: items });
            break;
        case 'POST':
            const item = await Item.create(req.body);
            res.status(201).json({ success: true, data: item });
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
