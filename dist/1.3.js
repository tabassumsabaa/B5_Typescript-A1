"use strict";
{
    function concatenateArrays(...arrays) {
        return arrays.reduce((req, res) => req.concat(res), []);
    }
    const aboutMe = concatenateArrays([{ "first name": "Sabiha" }, { "middle name": "Tabassum" }, { "last name": "Saba" }], [{ address: "Germany" }]);
    console.log(aboutMe);
}
