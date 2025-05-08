{
    function formatString(input: string, convertToUpper: boolean = true): string {
        return convertToUpper ? input.toUpperCase() : input.toLowerCase();
      }
      console.log(formatString("ich bin saba"));         
      console.log(formatString("ich kommen auch bd", true));   
      console.log(formatString("ich bin studentin", false));  
}