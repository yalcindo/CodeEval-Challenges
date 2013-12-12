
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
     
      var numsString=line.split(" ").join("");
      var allStrings=[];
    	for(var i=0;i<=numsString.length;i++){
        for(var j=i+2;j<=numsString.length;j++){
          var temp=numsString.substring(i,j);
          allStrings.push(temp);
        }
      }
      var compArr=[]
   
    for(var i=0;i<allStrings.length;i++){
      for(var j=allStrings.length;i<j;j--){

        if(allStrings[i]===allStrings[j])
        {

             compArr.push(allStrings[i]);
        }
      }
    }
    var newArr=[];
  
  for(var i=0;i<compArr.length;i++){
    for(var j=compArr.length;i<j;j--){
      if(compArr[i]===compArr[j]){
          
          newArr.push(compArr[i]);
      }
    }
  }
  
   }

});