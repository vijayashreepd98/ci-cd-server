const { userRegistrationHandler } = require("../../library/sqlLib/user.lib")

class UserRegisterAction {

    async executor() {
        try {
            const { userName, password } = this;
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
            const user = await userRegistrationHandler({ user_name: userName, password: password });
            
            if (user) {
                return {
                    RESPONSE_CODE: 10000,
                    RESPONSE_MESSAGE: "SUCCESS"
                }
            }
            return {
                RESPONSE_CODE: 11100,
                RESPONSE_MESSAGE: "SOMETHING_WENT_WRONG"
            }
        } catch (e) {
            console.log("error")
            console.log(e)
        }

    }
}

module.exports = UserRegisterAction;