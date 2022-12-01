const service = require('../service/product.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Product created!')
}

const remove = async (req, res) => {
    const productId = req.params.id
    await service.remove(productId)
    res.status(204).send('Product deleted1')
}

module.exports = {
    create,
    remove
}