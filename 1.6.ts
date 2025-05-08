{
    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {

        if (products.length === 0) {
          return null;
        }

        products.sort((x, y) => y.price - x.price);
        return products[0];
      }

      const products = [
        { name: "mac", price: 10000000 },
        { name: "Notebook", price: 50000 },
        { name: "iPhone", price: 2000000 }
      ];
      
      console.log(getMostExpensiveProduct(products));
}