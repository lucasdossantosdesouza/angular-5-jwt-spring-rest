export class Pessoa{

    private name: string;

    constructor(name: string){
        this.name=name;
    }

    public showAge(age: number): void{
        console.log(`${this.name} tem ${age} anos de vida`)
    }

    public set Name(name: string){
        this.name=name;
    }
    public get Name(){
        return this.name;
    }

}