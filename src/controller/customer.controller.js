const service = require('../service/customer.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Customer created!')
}

const remove = async (req, res) => {
    const customerId = req.params.id
    await service.remove(customerId)
    res.status(204).send('Customer deleted')
}

module.exports = {
    create,
    remove
}
