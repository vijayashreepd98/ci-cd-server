// const { userLoginHandler } = require("../../library/sqlLib/user.lib")

class UserLoginAction {

    async executor() {
        try {
            const { userName, password, accessToken } = this;
            console.log("user name here")
            console.log(userName);
            console.log("password here")
            console.log(password);
console.log("access token")
            console.log(accessToken)
            if (!userName) {
                return {
                    RESPONSE_CODE: 12,
                    RESPONSE_MESSAGE: "USER NAME MANDATORY"
                }
            }
            if (!password) {
                return {
                    RESPONSE_CODE: 12,
                    RESPONSE_MESSAGE: "PASSWORD MANDATORY"
                }
            }
            // const user = await userLoginHandler({ user_name: userName, password: password });

            // console.log("user data")
            // console.log(user)
            // if (user) {
                return {
                    RESPONSE_CODE: 10000,
                    RESPONSE_MESSAGE: "SUCCESS"
                }
            // }
            // return {
            //     RESPONSE_CODE: 11100,
            //     RESPONSE_MESSAGE: "SOMETHING_WENT_WRONG"
            // }
        } catch (e) {
            console.log("error")
            console.log(e)
        }

    }
}

module.exports = UserLoginAction;