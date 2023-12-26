class UserListInit  {
    constructor() {
        this.method_type = "GET";
    }

    getParameter() {
        let params = {
            userId: {
                type: "number",
                name: "user_id"
            }
        }
        return params;
    }



}

module.exports = UserListInit;