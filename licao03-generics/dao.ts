import { Pessoa } from '../licao01-classe-heranca-sobrescrita-metodo/pessoa';
import { DaoInterface } from './dao.interface';
export class DAO<T>implements DaoInterface<T>{
    tableName: String;   
    
    insert(obj: T): boolean{
        console.log('inserindo')
      return true;
    }    
    update(obj: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number) :T{
        throw new Error("Method not implemented.");
    }
    findAll(): Array<T> {
        throw new Error("Method not implemented.");
    }

    


}