class UserLoginInit  {
    constructor() {
        this.method_type = "POST";
    }

    getParameter() {
        let params = {
            userName: {
                type: "string",
                name: "user_name"
            }, password: {
                type: "string",
                name: "password"
            }
        }
        return params;
    }



}

module.exports = UserLoginInit;