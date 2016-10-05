/*var result = process.argv.slice(2).reduce(function(sum, n) {
  return sum + parseInt(n, 10);
}, 0);

console.log(result);

*/


     var result = 0  
       
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i])  
       
     console.log(result)  

