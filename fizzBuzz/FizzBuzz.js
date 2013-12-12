
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {    

        var arr = line.split(" "); // Splits the string by space
        // arr[0]--Fizz Number
        //arr[1]---Buzz Number
        //arr[2]---The counter number
        var i=1;
        var result="";

        while(i<=arr[2]){

        	if(i%arr[0]===0 && i%arr[1]=== 0)
        	{
                result= result + " FB";
        	}else if(i%arr[0]===0)
        	{
        		result = result+" F";
        	}else if(i%arr[1]===0)
        	{
        		result=result +" B";
        	}else{
        		result=result +" "+ i;
        		
        	}


        i++;
        }
        console.log(result);
    }
});