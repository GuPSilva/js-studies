import {autor} from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        };
    };

    static async listarAutorPorId(req, res) { 
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Requisição do Autor` });
        };
    };

    static async cadastrarAutor (req, res) {
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor Criado com Sucesso!", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        };
    };

    static async atualizarAutor(req, res) { 
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Autor Atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Atualização do Autor` });
        };
    };

    static async deletarAutor(req, res) { 
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(201).json({ message: "Autor Deletado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao Deletar o Autor` });
        };
    };


};

export default AutorController;