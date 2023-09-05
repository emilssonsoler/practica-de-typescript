export interface Product {
description:string;
price:number;
}

// const phone:Product = {
//     description: "Nokia A1",
//     price: 150
// }


// const tablet:Product = {
//     description: "Ipad Air",
//     price: 250.0
// }

interface TaxCalculationOptions{
    tax: number;
    products: Product[]

}

export function taxCalculation(options: TaxCalculationOptions):[number,number]{
    let total: number = 0;
    const {tax,products: productos} = options;
    productos.forEach(({price}) =>{
        total+=price;
    })
    return [total, total*tax];
}


// const shoppingCart :Product[] = [phone,tablet];
// const tax: number = 0.15;

// const result = taxCalculation({
//     products:shoppingCart,
//     tax
// });

// const [total,totalTax] = result;

// console.log('total', total);
// console.log('tax',totalTax);







