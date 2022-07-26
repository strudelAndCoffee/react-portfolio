const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ReadMore extends Model {}

ReadMore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'read_more'
    }
);

module.exports = ReadMore;