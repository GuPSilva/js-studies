import livro from "../models/Livros.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res) { //a funçao async vai se referir ao callback de req e res
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        };
    };

    static async listarLivroPorId(req, res) { 
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Requisição do Livro` });
        };
    };

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Livro Criado com Sucesso!", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        };
    };

    static async atualizarLivro(req, res) { 
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Livro Atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Atualização do Livro` });
        };
    };

    static async deletarLivro(req, res) { 
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message: "Livro Deletado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao Deletar o Livro` });
        };
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na Busca` });
        };
    };
};

export default LivroController;