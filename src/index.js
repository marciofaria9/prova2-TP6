const express = require('express')
const customerRouter = require('./router/customer.route')
const orderedRouter = require('./router/ordered.route')
const productRouter = require('./router/product.route')

const app = express()
app.use(express.json())

app.use('/api/v1/customers', customerRouter)
app.use('/api/v1/ordereds', orderedRouter)
app.use('/api/v1/products', productRouter)

const port = 8087
app.listen(port, () => console.log(`Server up on port ${port}`))
