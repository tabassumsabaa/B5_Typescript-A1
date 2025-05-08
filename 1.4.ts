{
    class Vehicle {
        private make: string;
        private year: number;
      
        constructor(make: string, year: number) {
          this.make = make;
          this.year = year;
        }

        getInfo(): string {
          return `Make: ${this.make}, Year: ${this.year}`;
        }
      }
      
      class Car extends Vehicle {
        private model: string;
      
        constructor(make: string, year: number, model: string) {
          super(make, year); 
          this.model = model;
        }

        getModel(): string {
          return `Model: ${this.model}`;
        }
      }
 
      const myCar = new Car("BMW", 2023, "benz");
      
      console.log(myCar.getInfo());  
      console.log(myCar.getModel());
}