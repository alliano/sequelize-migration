import 'dotenv/config';

export const DB_PROPERTIES = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT,
    "pool": {
      "max": 10,
      "min": 5,
      "acquire": 30000,
      "idle": 10000 
    }
  // },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  }
}
