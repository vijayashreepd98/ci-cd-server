module.exports = {
    SQL_DB_NAME: "my-server-1",
    SQL_DB_HOST: "database-2.cjjpabpabroa.ap-south-1.rds.amazonaws.com",//"localhost",//"172.28.176.1",
    SQL_DB_USER: "admin",//"vijayashree",
    SQL_DB_PORT: 3306,
    SQL_DB_PASSWORD: "123456789",//"password",
    DATABASE_TYPE: "mysql",
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    MONGO_URL: "mongodb://localhost:27017/my-server"
};