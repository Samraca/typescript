import {createProduct, calcStock, products} from './product.service';

createProduct({
  name: 'Product 1',
  createdAt: new Date(1993, 1 ,1),
  stock: 5
});

createProduct({
  name: 'Product 2',
  createdAt: new Date(1992, 1 ,1),
  stock: 6,
  size: 'XL'
});

console.log(products);
const total = calcStock();
console.log(total);
