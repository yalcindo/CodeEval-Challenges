var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
      	var reverseAdd= function(num2){
      		var reverseNum = +num2.toString().split("").reverse().join("");
      		return reverseNum + num2;
      	};
      	var iteration=0;
     	var checkPalindrome=function(num){
	     	var reverse =+num.toString().split("").reverse().join("");
	     	
	     	if(reverse===num){

	     		console.log(reverse,iteration);
	     		return reverse;
	     	}else{
	     		iteration++;
	     		checkPalindrome(reverseAdd(reverse));
	     	}
     	}
    	var num=+line;
    	checkPalindrome(num);
    }
   
});