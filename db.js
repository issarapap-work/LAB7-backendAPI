const { Sequelize, DataTypes } = require('sequelize');

// สร้าง instance ของ Sequelize
const sequelizeInstance = new Sequelize('apilab', 'postgres', 'kraisuk', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

// กำหนดโมเดล userProfile
const userProfile = sequelizeInstance.define('user_profile', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,  // ต้องแก้ไขจาก primarykey เป็น primaryKey (P ใหญ่)
        autoIncrement: true,
        field: 'user_id'
    },
    username: {
        type: DataTypes.STRING,
        field: 'user_name'
    },
    password: {
        type: DataTypes.STRING,
        field: 'pass_word'
    },
    firstname: {
        type: DataTypes.STRING,
        field: 'first_name'
    },
    lastname: {
        type: DataTypes.STRING,
        field: 'last_name'
    }
}, { freezeTableName: true }); // ต้องแก้ไขจาก freezeTable เป็น freezeTableName

// ซิงโครไนซ์โมเดลกับฐานข้อมูล
sequelizeInstance.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = { userProfile };
