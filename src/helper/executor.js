const { Console } = require("console");
const path = require("path");
const baseMethodsPath = path.join(process.cwd(), "src/methods/");
const requireDir = require("require-dir");
class BaseExecutor {
    constructor() {
    }
    async execute(requestData) {
        console.log("%%% inside executor")
        console.log(JSON.stringify(requestData));
        console.log(__dirname)
        console.log(baseMethodsPath)
        const methodPath = this.getMethodPath(requestData.path);

        console.log(methodPath)
        try {
            const { action: actionClass, init: initClass } = requireDir(methodPath);

            console.log(methodPath)
            const params = new initClass();
            const methodParams = params.getParameter();
            const reqParams = requestData.body;

            console.log("req params")
            console.log(reqParams);
            console.log("method params")
            console.log(methodParams)
            const actionInstance = new actionClass();

            Object.keys(methodParams).map((param) => {
                return actionInstance[param] = reqParams[methodParams[param].name]
            });

            if (requestData.headers) {
                console.log("its true ",)
                console.log(requestData.headers)
                const { access_token: accessToken } = requestData.headers;


                actionInstance['access_token'] = accessToken;
            }

            console.log("action instance")
            console.log(actionInstance)
            const responseData = await actionInstance.executor();
            console.log(responseData)
            return {
                responsCode: 200,
                responseMessage: "success",
                requestData: responseData
            }
        } catch (e) {
            console.log("error is here", e)
        }
    }

    getMethodPath(methodName) {
        const splitString = methodName.split('/')

        splitString.map((data, index) => {
            if (index == 1) {
                methodName = data;
            } else if (index > 1) {
                methodName += data[0].toUpperCase() + data.slice(1);
            }
        });

        console.log("base ")
        console.log(baseMethodsPath + " " + methodName)
        return baseMethodsPath + methodName;
    }
}



module.exports = BaseExecutor;