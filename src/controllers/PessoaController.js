const database = require('../models');

class PessoaController {
    static async listaPessoas (req, res) {
        try {
            const pessoasList = await database.Pessoas.findAll();
            return res.status(200).json(pessoasList)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController