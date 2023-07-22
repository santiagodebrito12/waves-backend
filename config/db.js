import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({path:'.env'})
const{BD_HOST,BD_PORT,BD_NOMBRE,BD_USUARIO,BD_PASSWORD} = process.env;

const db = new Sequelize(BD_NOMBRE,BD_USUARIO,BD_PASSWORD,{
    host: BD_HOST,
    port: BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool:{
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000
    },
});

export default db;
