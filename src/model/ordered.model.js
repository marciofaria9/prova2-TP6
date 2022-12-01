module.exports = (sequelize, DataTypes) => {
    const Ordered = sequelize.define('ordered', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_date: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Ordered
}
