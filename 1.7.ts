{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }

      function getDayType(day: Day): string {
        if (day >= Day.Monday && day <= Day.Friday) {
          return "Weekday";
        }
        return "Weekend";
      }
      console.log(getDayType(Day.Monday));   
      console.log(getDayType(Day.Friday)); 
      console.log(getDayType(Day.Wednesday)); 
      console.log(getDayType(Day.Sunday)); 
}