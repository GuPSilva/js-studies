import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { 
        type: String, 
        required: [true, "O nome do(a) autor(a) é obrigatório!"] //recurso do mongoose permite colocar uma mensagem de erro junto como segundo valor da Array
    }, 
    nacionalidade: { type: String}
}, { versionKey: false});


const autor = mongoose.model("autor", autorSchema);

export { autor, autorSchema};