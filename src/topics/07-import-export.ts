import {Product,taxCalculation} from './06-function-destructuring'
// import './06-function-destructuring'

const shoppingCart :Product[] = [
    {
        description: "Nokia A1",
        price: 150   
    },
    {
        description: "Ipad Air",
        price: 250.0
    }
];

const tax: number = 0.15;
const result = taxCalculation({
    products:shoppingCart,
    tax
});

console.log(result);
