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

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          const umaMatricula = await database.Matriculas.findOne( { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          })
          return res.status(200).json(umaMatricula)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
          const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
          return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
          await database.Matriculas.update(novasInfos, { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId) 
            }})
          const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
          return res.status(200).json(MatriculaAtualizada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
          return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
    
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = PessoaController