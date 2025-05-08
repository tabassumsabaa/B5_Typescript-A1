{
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((req, res) => req.concat(res), []);
  }
  type Me = {
    "first name"?: string;
    "middle name"?: string;
    "last name"?: string;
    address?: string;
  };
 const aboutMe = concatenateArrays<Me>(
        [{ "first name": "Sabiha" }, { "middle name": "Tabassum" },{ "last name": "Saba" }], [{ address: "Germany" }]
      );
      
      console.log(aboutMe);


}