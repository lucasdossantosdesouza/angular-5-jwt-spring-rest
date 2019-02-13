import { Pessoa } from './../licao01-classe-heranca-sobrescrita-metodo/pessoa';
import { DaoInterface } from './dao.interface';
export class PessoaDAO implements DaoInterface{
    tableName: String;   
    
    insert(pes: Pessoa): boolean{
        console.log(pes.Name);
        return true;
    }    
    update(obj: Pessoa): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    findAll(): Array<Pessoa> {
        throw new Error("Method not implemented.");
    }

    


}