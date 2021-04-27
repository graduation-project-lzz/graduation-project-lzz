import type {NextApiRequest, NextApiResponse} from 'next';

import {Tree} from '../../../lists.js';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(Tree);
}

