const dbConfig = require('./config')


let Sequelize = require("sequelize");
Sequelize = new Sequelize(dbConfig.SQL_DB_NAME, dbConfig.SQL_DB_USER,
	dbConfig.SQL_DB_PASSWORD, {
	host: dbConfig.SQL_DB_HOST,
	dialect: dbConfig.dialect,
	operationsAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
});

Sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});
module.exports = Sequelize;