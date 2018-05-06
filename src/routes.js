// import { Router } from 'express';

import GoodsController from './app/Http/Controller/Goods/GoodsController'

export default function(app) {
    new GoodsController(app)
}


// export default routes;
