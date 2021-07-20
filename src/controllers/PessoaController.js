const database = require('../models');

class PessoaController {
    static async listaPessoas(req, res) {
        try {
            const pessoasList = await database.Pessoas.findAll();
            return res.status(200).json(pessoasList)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPessoa(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const createdPessoa = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(createdPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePessoa(req, res) {
        const { id } = req.params;
        const newInfos = req.body;
        try {
            await database.Pessoas.update(newInfos, { where: { id: Number(id) } })
            const updatedPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
}

module.exports = PessoaController