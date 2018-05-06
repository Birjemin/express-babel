import GoodsModel from './GoodsModel'

class GoodsRepository {
    constructor(app) {
        Object.assign(this, {
            app,
        })
    }

    getList(query) {
        return GoodsModel.where(query).fetchAll().then(list => {
            return list ? list : {}
          }).catch(err => {
            return false
          })
    }

    findById(id) {
        return GoodsModel.where({id: id}).fetch().then(goods => {
            return goods
        }).catch(err => {
            return false
        })
    }

    updateById(id, params) {
        return GoodsModel.where({id: id}).save(params, {patch: true}).then(goods => {
            return goods
        }).catch(err => {
            return false
        })
    }

    deleteById(id) {
        return GoodsModel.where({id: id}).destroy().then(result => {
            return result
        }).catch(err => {
            return false
        })
    }

    create(params) {
        return new GoodsModel(params).save(null, {method: 'insert'}).then(result => {
            return result
        }).catch(err => {
            return false
        })
    }
}

export default GoodsRepository