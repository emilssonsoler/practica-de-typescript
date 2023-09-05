
// function addNumbre(a: number, b: number){
//     return a+b;
// }
// const addNumbreArrow =(a: number, b: number)=>{
//     return a+b;
// }
// function multiply(firstNumber:number, secondNumber?:number, base:number=2){

//     return firstNumber*base;

// }

// console.log(addNumbreArrow(5,6));
// console.log(multiply(5,6));

interface Personaje{
    nombre: string;
    hp: number;
    showHp: () => void;
}

const healPersonaje = (personaje: Personaje, amountHeal: number)=>{
    personaje.hp+= amountHeal;
}

const strinder : Personaje ={
    nombre:'Strider',
    hp: 10,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strinder.showHp();
healPersonaje(strinder,6);
strinder.showHp();





export {};