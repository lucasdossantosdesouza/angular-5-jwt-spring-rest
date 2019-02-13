import { Pessoa } from './pessoa';
export class Estudante extends Pessoa{

    constructor(name: string){
        super(name);
    }

    showAge (age: number) : void{
        console.log('Estudando');
        super.showAge(25);
    }

       
    
}