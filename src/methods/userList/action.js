// const { userLoginHandler, getUserList } = require("../../library/sqlLib/user.lib")

class UserListAction {

    async executor() {
        try {
            const { userId } = this;

            console.log(userId)
            // const user = await getUserList({ status: 1 });

            const user = [{
                name: "vijayas",
                id: 1
            }]
            console.log("user list")
            console.log(user)
            if (user) {
                return {
                    RESPONSE_CODE: 10000,
                    RESPONSE_MESSAGE: "SUCCESS",
                    RESPONSE_DATA: { user_list: user }
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

module.exports = UserListAction;