export interface DaoInterface<T>{

    tableName: String;

    insert(obj: T):boolean;
    update(obj: T):boolean;
    delete(id: number):boolean;
    find(id: number): T;
    findAll():Array<T>

}