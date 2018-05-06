import GoodsRepository from './GoodsRepository'
import Promise from 'Promise'

class GoodsModule {
    constructor(app) {
        Object.assign(this, {
            app,
        })
        this.repository = new GoodsRepository
    }

    getList(query, callback) {
        Promise.resolve(
            this.repository.getList(query)
        ).then(res => {
            callback(res)
        }).catch(err => {
            callback({err:err})
        })
    }

    findById(id, callback) {
        Promise.resolve(
            this.repository.findById(id)
        ).then(res => {
            callback(res)
        })
    }

    updateById(id, params, callback) {
        this.findById(id, goods => {
            if (goods) {
                Promise.resolve(
                    this.repository.updateById(id, params)
                ).then(result => {
                    callback(result)
                }).catch(err => {
                    callback(false)
                })
            } else {
                callback(false)
            }
        })
    }

    deleteById(id, callback) {
        this.findById(id, goods => {
            if (goods) {
                Promise.resolve(
                    this.repository.deleteById(id)
                ).then(result => {
                    callback(result)
                }).catch(err => {
                    callback(false)
                })
            } else {
                callback(false)
            }
        })
    }

    create(params, callback) {
        Promise.resolve(
            this.repository.create(params)
        ).then(result => {
            callback(result)
        })
    }
}

export default GoodsModule