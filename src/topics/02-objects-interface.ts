
interface Personaje{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Strider: Personaje = {
    name: 'strider',
    hp: 12,
    skills: ['correr','volar'],
};

Strider.hometown='venecia';

console.table(Strider);



export{};