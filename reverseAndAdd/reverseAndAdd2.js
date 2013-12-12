var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
      var reverseAdd=(function(){
         var iteration=0;
        var reverseAdd=function(num2){
          var reverseNum = +num2.toString().split("").reverse().join("");
          return reverseNum + num2;
        };
        var checkPalindrome=function(num){
          var reverse =+num.toString().split("").reverse().join("");

          if(reverse===num){

            console.log(iteration,reverse);
            return reverse;
          }else{
            iteration++;
            checkPalindrome(reverseAdd(num));
        }
      }
    
      return{
        checkPalindrome:checkPalindrome
      }

      })();
      var num=+line;
      reverseAdd.checkPalindrome(num);
    }
   
});