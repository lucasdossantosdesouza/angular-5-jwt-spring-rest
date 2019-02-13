import { Pessoa } from './../licao01-classe-heranca-sobrescrita-metodo/pessoa';
import { PessoaDAO } from './pessoa.dao';
import { DaoInterface } from './dao.interface';
let pessoaDao: DaoInterface=new PessoaDAO();

let pessoa:Pessoa =new Pessoa('Lucas');

pessoaDao.insert(pessoa)