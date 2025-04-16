const user = {
    nome: 'Julia',
    email: 'jgc@.com',
    nascimento: '2001-09-23',
    role: 'estudante',
    ativo: true, //por padrão
    exibirInfos: function() {
        console.log(this.nome, this.email)
    },

};

const admin = {
    nome: 'Julia',
    email: 'jgc@.com',
    nascimento: '2001-09-23',
    role: 'admin',
    ativo: true, //por padrão
    criarCurso: function() {
        console.log('curso criado');
    },
};

Object.setPrototypeOf(admin, user);