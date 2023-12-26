const express = require("express");
const BaseExecutor = require('./src/helper/executor')
const http = require("http");
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("*", async(req, res) => {
let executorRequest = {};
executorRequest.method = req.method;
executorRequest.path = req.path;
executorRequest.body = req.body;
const executor = new BaseExecutor();
let response = await executor.execute(executorRequest);
res.send(response)
})

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server listening on port   ${PORT} `);
})