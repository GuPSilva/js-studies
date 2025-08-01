import NaoEncontrado from "../errors/naoEncontrado.js";
import {autor} from "../models/index.js";

class AutorController {

    static async listarAutores(req, res, next) {
        try{
            const listaAutores = autor.find({});
            
            req.resultado = listaAutores;

            next();
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        };
    };

    static async listarAutorPorId(req, res, next) { 
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);

            if(autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            } else {
                next(new NaoEncontrado("Id do Autor não cadastrado."));
            };
        } catch (erro) {
            next(erro);
        };
    };

    static async cadastrarAutor (req, res, next) {
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor Criado com Sucesso!", autor: novoAutor });
        } catch (erro) {
            next(erro);
        };
    };

    static async atualizarAutor(req, res, next) { 
        try{
            const id = req.params.id;
           const autorAtualizado =  await autor.findByIdAndUpdate(id, req.body);
           if (autorAtualizado !== null){
               res.status(201).json({ message: "Autor Atualizado" });
           } else {
            next(new NaoEncontrado("Id do Autor não encontrado para atualizar."));
           }
        } catch (erro) {
            next(erro);
        };
    };

    static async deletarAutor(req, res, next) { 
        try{
            const id = req.params.id;
            const autorDeletado =  await autor.findByIdAndDelete(id);
            if (autorDeletado !== null){
               res.status(201).json({ message: "Autor Deletado" });
           } else {
            next(new NaoEncontrado("Id do Autor não encontrado para deletar."));
           }
        } catch (erro) {
            next(erro);
        };
    };


};

export default AutorController;