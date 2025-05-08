{
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }
      const movies = [
        { title: "Three Idiots", rating: 5 },
        { title: "DDLJ", rating: 4 },
        { title: "Bodyguard ", rating: 3.9 }
      ];
      
      console.log(filterByRating(movies));
}