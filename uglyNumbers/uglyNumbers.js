var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var createNums=function(line1){
      var nums=line1.split("");
      var allNums=[];
      for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++)
        {
          if(nums.slice(i,j+1).join("")){
            allNums.push(+nums.slice(i,j+1).join(""));
          }
        }
      }
      	console.log(allNums);
        return allNums;
    };
  }
  createNums(line);


   


});