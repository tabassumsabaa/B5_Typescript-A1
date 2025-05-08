"use strict";
{
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    console.log(processValue("Next Level"));
    console.log(processValue(2500));
}
