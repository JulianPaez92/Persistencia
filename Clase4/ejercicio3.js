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
}, { sequelize, modelName: 'ejercicio3' });

sequelize.sync()
 .then(() => Items.create({
     firstName: 'Julian',
     lastName: 'Paez'
 }))
 .then(() => Items.create({
    firstName: 'Mariano',
    lastName: 'Galvan'
}))
.then(() => Items.create({
    firstName: 'Emir',
    lastName: 'Ahumada'
}))
.then(jane => {
     console.log(jane.toJSON());
 }).then(() =>{
     Items.update({ lastName: "Perez"}, {
     where: {
         firstName: 'Julian'
     }
    })
    })
    .then(() =>{
        Items.update({ lastName: "Galvanez"}, {
        where: {
            firstName: 'Mariano'
        }
    })
    })
    .then(() =>{
        Items.update({ lastName: "Ahumadez"}, {
        where: {
            firstName: 'Emir'
        }
    })
}).then(() =>{
     console.log("Actualizó varios registros insertados")
})
