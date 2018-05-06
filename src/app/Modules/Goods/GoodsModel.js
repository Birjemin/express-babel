import bookshelfGlobal from './../../../config/db'
import Fields from 'bookshelf-schema/lib/fields'

var GoodsModel = bookshelfGlobal.Model.extend({
  tableName: 'good'
}, {
  schema: [
    Fields.StringField('name', {required: true}),
    Fields.StringField('desc', {required: true}),
    Fields.IntField('price', {required: true}),
    Fields.IntField('sum', {required: true}),
    Fields.IntField('created_at', {required: true}),
  ]
});

export default GoodsModel