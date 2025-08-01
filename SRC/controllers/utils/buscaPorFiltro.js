function processaBusca(parametros) {
    const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
    
    const busca = {};
    
    if(editora) busca.editora = { $regex: editora, $options: "i" };  
    if(titulo) busca.titulo = { $regex: titulo, $options: "i" };           
    if(minPaginas || maxPaginas) {
        busca.paginas = {};
        if(minPaginas) busca.paginas.$gte = minPaginas;
        if(maxPaginas) busca.paginas.$lte = maxPaginas;
    }

    if(nomeAutor) busca["autor.nome"] = { $regex: nomeAutor, $options: "i" }; 

    return busca;
    
};

export default processaBusca;