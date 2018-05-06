import Helper from '../../Support/Helper'

export default function(req, res, next) {
	res.helper = new Helper(req, res)
	next()
}