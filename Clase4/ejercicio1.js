const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
 host: 'localhost',
 dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });


class Items extends Sequelize.Model {}
Items.init({
 firstName:Sequelize.STRING,
 lastName:Sequelize.STRING
}, { sequelize, modelName: 'ejercicio1' });

sequelize.sync()
 .then(() => Items.create({
     firstName: 'Julian',
     lastName: 'Paez'
 })).then(jane => {
     console.log(jane.toJSON());
 }).then(() =>{
     Items.update({ firstName: "Mariano"}, {
     where: {
         lastName: 'Paez'
     }
    })
 }).then(() =>{
     console.log("Actualizo el registro insertado")
})
