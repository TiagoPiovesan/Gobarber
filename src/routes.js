import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'tiago piovesan',
        email: 'tiago.piovesan@',
        password_hash: 'asdasda1111',
    });

    return res.json(user);
});

export default routes;
