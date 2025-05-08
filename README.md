Typescript

1. What are some differences between interfaces and types in TypeScript?
 
 % Interface:
 
-> Supports declaration merging, meaning you can declare the same interface multiple times, and TypeScript will merge them into one.
-> You can extend another interface using the extends keyword to inherit properties and methods.
-> Ideal for defining the shape of objects, such as when you're describing the properties or methods of an object.
-> Defined using the interface keyword, like interface Person { name: string; age: number; }
-> Interfaces tend to perform better with larger codebases and more complex projects due to their specialized purpose.
-> Interfaces can extend other interfaces using the extends keyword, which is particularly useful for object hierarchies.

% Type:

-> Does not support declaration merging. If you declare a type multiple times, you will get an error.
-> Types use & (intersection) to combine multiple types into one, which allows the inclusion of different properties from multiple sources.
-> Types are more flexible and are commonly used for unions, tuples, and other advanced types. They offer more versatility compared to interfaces.
-> Defined using the type keyword, like type Person = { name: string; age: number; };.
-> Performance may vary depending on how types are used. While they offer more flexibility, they may be less efficient in some cases.
-> Types can combine multiple types using &, allowing different types to coexist within one structure, especially useful for complex data types.

2. Provide an example of using union and intersection types in TypeScript.

   A union type means a value can be one of several types. You use the pipe symbol (|) to separate the types. For example, if a variable can be a string or a number, you define it as string | number.
    Union types are useful when a value can be one of many types, and you want to handle each type separately.
   
     Example:
     let value: string | number;
     value = "Hello";
     value = 42;
   
   An intersection type combines multiple types into one. You use the ampersand symbol (&) to combine the types. The resulting type must include all the properties from each type.
   Intersection types are helpful when you want an object to have properties from multiple types.

    Example:
   interface Person {
      name: string;
   }

   interface Employee {
      jobTitle: string;
   }

   type EmployeePerson = Person & Employee;

   const employee: EmployeePerson = {
      name: "John",
     jobTitle: "Developer"
   };
   In TypeScript, union types and intersection types allow you to work with multiple types in a flexible way.

