const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },

    async buscaNome(req, res){
        //console.log(req);
        const users = await User.findAll({
            where: {
                nome: {
                    [Op.like]: req.query['nome']
                }
            }
        });
        return res.json(users);
    },

    async buscaMatricula(req, res){
        //console.log(req);
        const users = await User.findAll({
            where: {
                matricula: {
                    [Op.like]: req.query['matricula']
                }
            }
        });
        return res.json(users);
    },

    async buscaPeriodoAlteracao(req, res){
        console.log(req);
        const users = await User.findAll({
            where: {
                updatedAt: {
                    [Op.between]: [req.query['dateStart'], req.query['dateEnd']]
                }
            }
        });
        return res.json(users);
    },

    async updateUser(req, res){
        const {nome, tipo, usuario, senha, dias_permitidos} = req.body;
        const user = await User.update(
            {nome, tipo, usuario, senha, dias_permitidos},
            {
                where: {
                    id: {
                        [Op.eq]: req.query['id']
                    }
                }
            }
            );
        return res.json(user);
    },

    async removeUser(req, res){
        const users = await User.findByPk(req.query['id']);
        await users.destroy();
        return res.json(users);
    },


    async store(req, res){
        const {v4: uuidv4} = require('uuid');
        const {nome, tipo, usuario, senha, dias_permitidos} = req.body;
        
        const user = await User.create({nome, tipo, usuario, senha, dias_permitidos});
        user.matricula = uuidv4();
        await user.save();
        return res.json(user);
    }
};