{
    function formatString(input, convertToUpper) {
        if (convertToUpper === void 0) { convertToUpper = true; }
        return convertToUpper ? input.toUpperCase() : input.toLowerCase();
    }
    console.log(formatString("ich bin saba"));
    console.log(formatString("ich kommen auch bd", true));
    console.log(formatString("ich bin studentin", false));
}
