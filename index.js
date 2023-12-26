const express = require("express");
const BaseExecutor = require('./src/helper/executor')

module.exports.handler = async (event) => {
    console.log("%%%%%inside handler")
    let executorRequest = {};
    executorRequest.method = event.method;
    executorRequest.path = event.path;
    executorRequest.body = event.body;
    if (event.headers && event.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        const querystring = require('querystring');
        executorRequest.body = querystring.parse(event.body);
    }
    executorRequest.headers = event.headers;

    console.log(executorRequest)
    const executor = new BaseExecutor();
    let response = await executor.execute(executorRequest);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(response),
    };
}



