export interface DaoInterface{

    tableName: String;

    insert(obj: any):boolean;
    update(obj: any):boolean;
    delete(id: number):boolean;
    find(id: number): any;
    findAll():Array<any>

}