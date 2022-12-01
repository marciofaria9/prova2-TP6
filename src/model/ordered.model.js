module.exports = (sequelize, DataTypes) => {
    const product = require('produc.model')
    const customer = require('customer.model')

    const Ordered = sequelize.define('ordered', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: 'customer',
            referencesKey: 'id'
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id'
        },

        order_date: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Ordered
}
