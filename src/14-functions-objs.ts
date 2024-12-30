(()=> {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  };

  //login('samsam@sam.co', '1212121212');

  login({
    email: 'samsam@sam.co',
    password: '1212121212'
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1993, 1 ,1),
    stock: 12
  });

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1993, 1 ,1),
    stock: 12,
    size: 'XL'
  });

  console.log(products);
})();
