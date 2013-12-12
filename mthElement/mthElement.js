
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       var arr=line.split(" ");
       var index=+arr.pop();
      arr.reverse();
      if(index>arr.length){
        console.log();
      }else{
      	 console.log(arr[index-1]);
      }
    }
   
});