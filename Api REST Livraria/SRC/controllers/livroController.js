import { livro } from "../models/index.js";
import { autor } from "../models/index.js";
import processaBusca from "./utils/buscaPorFiltro.js";

class LivroController {

    static async listarLivros(req, res, next) { //a funçao async vai se referir ao callback de req e res
        try{
            const buscaLivros = livro.find({});

            req.resultado = buscaLivros;

            next();
        } catch (erro) {
            next(erro);
        };
    };

    static async listarLivroPorId(req, res, next) { 
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            next(erro);
        };
    };

    static async cadastrarLivro (req, res, next) {
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Livro Criado com Sucesso!", livro: livroCriado });
        } catch (erro) {
            next(erro);
        };
    };

    static async atualizarLivro(req, res, next) { 
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Livro Atualizado" });
        } catch (erro) {
            next(erro);
        };
    };

    static async deletarLivro(req, res, next) { 
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message: "Livro Deletado" });
        } catch (erro) {
            next(erro);
        };
    };

    static async listarLivrosPorFiltro (req, res, next) {
        try{
            const busca = processaBusca(req.query);
            const livrosResultado = livro.find(busca);

            req.resultado = livrosResultado;

            next();
        } catch (erro) {
            next(erro);
        };
    };
};



export default LivroController;