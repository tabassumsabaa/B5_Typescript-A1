{
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          if (n < 0) {
            reject(new Error("Negative number not allowed"));
          } else {
            setTimeout(() => {
              resolve(n * n); 
            }, 1000); 
          }
        });
      }
      squareAsync(4).then(console.log).catch(console.error);

   //squareAsync(-8).then(console.log).catch(console.error);
}