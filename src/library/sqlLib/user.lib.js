
const initUserModel = require('../sqlLib/models/user')

const register = require("./models/register")
const userLoginHandler = async (query) => {
    const userModel = await initUserModel()
    return await userModel.create(query)
}

const userRegistrationHandler = async (query) => {
    try {
        return await register.create(query);
    } catch (e) {
        console.log("error")
        console.log(e)
    }
}

const getUserList = async (query) => {
    try {
        const userModel = await initUserModel()
        return await userModel.findAll({ where: query ?? 1, attributes: ['user_id', 'user_name'] });
    } catch (e) {
        console.log("error")
        console.log(e)
    }
}


module.exports = { userLoginHandler, userRegistrationHandler, getUserList };