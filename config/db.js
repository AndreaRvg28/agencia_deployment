import {Sequelize} from 'sequelize';

const db = new Sequelize(process.env.BD_NOMBRE || 'agenciaviajes',
    process.env.BD_USER || 'root',
    process.env.BD_PASS || '1234',{
    host:process.env.BD_HOST || 'localhost',
    port: process.env.BD_PORT || 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;


