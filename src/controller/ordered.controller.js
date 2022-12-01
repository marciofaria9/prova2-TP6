const service = require('../service/ordered.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Ordered created!')
}

const remove = async (req, res) => {
    const orderedtId = req.params.id
    await service.remove(orderedId)
    res.status(204).send('ordered deleted!')
}

module.exports = {
    create,
    remove
}
