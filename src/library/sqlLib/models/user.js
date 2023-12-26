const { DataTypes } = require("sequelize");
const Sequelize = require("../../../dbConnection/dbConnect");
const GLB = require('../../../global/constant')
let User;

const initUserModel = async () => {
    if (User) return User;
    User = Sequelize.define('user', {
        user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            defaultValue: null,

        },
        password: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        status: {
            type: DataTypes.TINYINT(2),
            defaultValue: GLB.CONTENT_ACTIVE
        }
    }, {
        freezeTableName: true,
    });

    await Sequelize.sync({ alter: true });
    return User;
}

module.exports = initUserModel;