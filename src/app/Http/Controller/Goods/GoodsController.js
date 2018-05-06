import Controller from '../Controller'
import GoodsModule from '../../../Modules/Goods/GoodsModule'

class GoodsController extends Controller {

    constructor(app) {
        super(app)
        this.goodsModule = new GoodsModule
    }

    routes() {
        super.routes()
        this.app.get('/api/goods/lists', this.getList.bind(this))
        this.app.get('/api/goods/:id', this.findById.bind(this))
        this.app.put('/api/goods/:id', this.updateById.bind(this))
        this.app.delete('/api/goods/:id', this.deleteById.bind(this))
        this.app.post('/api/goods/', this.create.bind(this))
    }
    
    /**
     * @api {get} /api/goods/lists 获取全部详情
     * @apiName getList
     * @apiGroup Goods
     * @apiDescription 获取全部goods的list
     *
     * @apiSuccessExample {json} 成功
     * {
     *     "code": 0,
     *     "message": "",
     *     "data": [
     *         {
     *             "id": 119,
     *             "name": "567",
     *             "desc": "全世界最好吃的苹果",
     *             "price": 12,
     *             "sum": 115,
     *             "created_at": null
     *         }
     *     ]
     * }
     */
    getList(req, res) {
        // validate
        let query = {}
        this.goodsModule.getList(query, list => {
            res.send(res.helper.renderJson(list))
        })
    }

    /**
     * @api {get} /api/goods/:id 通过id获取goods详情
     * @apiName findById
     * @apiGroup Goods
     * @apiDescription 获取某一条的id
     *
     * @apiSuccessExample {json} 成功
     * {
     *     "code": 0,
     *     "message": "",
     *     "data": {
     *         "id": 119,
     *         "name": "567",
     *         "desc": "全世界最好吃的苹果",
     *         "price": 12,
     *         "sum": 115,
     *         "created_at": null
     * }
     */
    findById(req, res) {
        let id = req.params.id
        this.goodsModule.findById(id, goods => {
            res.send(res.helper.renderJson(goods))
        })
    }

    /**
     * @api {put} /api/goods/:id 通过id更新goods详情
     * @apiName updateById
     * @apiGroup Goods
     * @apiDescription 通过id更新goods
     *
     * @apiParam {string} [name] Goods的名称
     * @apiParam {string} [desc] Goods的描述
     * @apiParam {int} [price] Goods的价格
     * @apiParam {int} [sum] Goods的总和
     * 
     * @apiSuccessExample {json} 成功
     * {
     *     "code": 0,
     *     "message": "",
     *     "data": {
     *         "result": true
     * }
     */
    updateById(req, res) {
        let id = req.params.id
        let params = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            sum: req.body.sum
        }
        
        this.goodsModule.updateById(id, params, effect => {
            res.send(effect != false
                ? res.helper.renderJson({result: true}) : res.helper.renderJson({result: false})
            )
        })
    }

    /**
     * @api {delete} /api/goods/:id 通过id删除goods
     * @apiName deleteById
     * @apiGroup Goods
     * @apiDescription 通过id删除goods
     *
     * @apiSuccessExample {json} 成功
     * {
     *     "code": 0,
     *     "message": "",
     *     "data": {
     *         "result": true
     * }
     */
    deleteById(req, res) {
        let id = req.params.id

        this.goodsModule.deleteById(id, effect => {
            res.send(effect != false ? res.helper.renderJson({result: true}) : res.helper.renderJson({result: false}))
        })
    }

    /**
     * @api {post} /api/goods 增加goods
     * @apiName create
     * @apiGroup Goods
     * @apiDescription 增加goods
     *
     * @apiParam {string} [name] Goods的名称
     * @apiParam {string} [desc] Goods的描述
     * @apiParam {int} [price] Goods的价格
     * @apiParam {int} [sum] Goods的总和
     * 
     * @apiSuccessExample {json} 成功
     * {
     *     "code": 0,
     *     "message": "",
     *     "data": {
     *         "result": true
     * }
     */
    create(req, res) {
        let params = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            sum: req.body.sum,
            created_at: res.helper.time()
        }

        this.goodsModule.create(params, effect => {
            res.send(effect != false ? res.helper.renderJson({result: true}) : res.helper.renderJson({result: false}))
        })
    }
}

export default GoodsController