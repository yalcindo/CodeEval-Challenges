var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var limitNum=+line;
      var checkPrime=function(num){
        var i=2;
        var reduction=Math.ceil(Math.sqrt(num));
        while(i<=reduction)
        {

          if(num%i===0){
            return false;
          }
          i++;
        }
        return num;
      };

      var printPrimes=function(limitNum){
        var j=2;
        var primes=[2];
        while(j<limitNum)
        {
          if(checkPrime(j)){
          primes.push(checkPrime(j));
           }
          j++;
        }
        console.log(primes.join());
      }
      printPrimes(limitNum);
    }
    

});