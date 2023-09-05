export class Person {
    constructor(
        public name: string, 
        public address: string) {
    }
}
            

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string, 
//         public realName: string, 
//         public address: string) {
//         super(realName, address);
//     }

// }

export class Hero{
    constructor(
        public alterEgo: string, 
        public realName: string, 
        public address: string,
        public person: Person
        ) {
            
    }

}

    // const person: Hero = new Hero('superman','juan', 'new yorck');

        

// console.log(person);
