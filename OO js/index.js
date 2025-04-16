import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Gustavo", "gp@s.com", "2002-06-12");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "rs@r.com", "2010-05-23");
console.log(novoAdmin.exibirInfos());


