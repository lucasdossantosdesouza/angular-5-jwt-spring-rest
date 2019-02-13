import { DaoInterface } from './dao.interface';
import { Pessoa } from '../licao01-classe-heranca-sobrescrita-metodo/pessoa';
import { DAO } from './dao';

let dao: DAO<Pessoa>= new DAO<Pessoa>();
let p:Pessoa=new Pessoa('Lucas')
dao.insert(p);
