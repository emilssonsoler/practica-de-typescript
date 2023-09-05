function classDecorator<T extends {new(...arg:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty='new property';
        hello = 'override'
    }

}

@classDecorator
export class SuperClass{
    public myProperty: string = '123abc';
   fprit(){
        console.log('hola mundo');
        
    }
}

console.log(SuperClass);
const myClass= new SuperClass();
console.log(myClass);

