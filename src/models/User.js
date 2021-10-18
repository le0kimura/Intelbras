const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.STRING,
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            matricula: DataTypes.STRING, 
            dias_permitidos: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}
module.exports = User;
