function staircase(n) {
    // Write your code here
    // variable that contains staircase for return
    let stairs = [];
    
    //for loop that creates staircase
    for (let i = 0; i < n; i++) {
      let row = [];
      
      for (let j = 1; j < (n - i); j++) {
        row.push(" ");
      }
      
      for (let k = 0; k <= i; k++) {
        row.push("#");
      }
      if (i < n - 1) {
        row.push("\n");
      }

      // console.log(staircase);
      stairs.push(row.join(""));
    }
    
    //return staircase
    console.log(stairs.join(""));
    return stairs.join("");
}

staircase(8);