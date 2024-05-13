import { Sequelize } from "sequelize"
import { DB_PROPERTIES } from "./config";

const connection = new Sequelize(DB_PROPERTIES.development.database, DB_PROPERTIES.development.username, DB_PROPERTIES.development.password, {
    dialect: DB_PROPERTIES.development.dialect,
    host: DB_PROPERTIES.development.host,
    port: DB_PROPERTIES.development.port,
    console: console.log,
    pool: DB_PROPERTIES.development.pool
})
export { connection }



// export default class Connection {
//     static sequelize;
//     static get() {
//         if(this.sequelize == null || undefined) {
//             return new Sequelize(DB_PROPERTIES.development.database, DB_PROPERTIES.development.username, DB_PROPERTIES.development.password, {
//                 dialect: DB_PROPERTIES.development.dialect,
//                 host: DB_PROPERTIES.development.host,
//                 port: DB_PROPERTIES.development.port,
//                 console: console.log,
//                 pool: {
//                     min: 5,
//                     max: 20,
//                     acquire: 30000,
//                     idle: 10000
//                 }
//             })
//         }
//         else {
//             return this.sequelize;
//         }
//     }
// }