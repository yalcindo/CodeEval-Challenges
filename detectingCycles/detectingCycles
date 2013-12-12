
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var nums= line.split(",");
           nums[0]=+nums[0];
           nums[1]=+nums[1];
         
        var stopCondition=true;
        var multipNum=2;
        var tempNum=nums[1];
        while(stopCondition)
        {
           if(nums[0]<=tempNum){
           	stopCondition=false;

           }else
           {
           	// console.log("multiNum",multipNum)
           	tempNum=nums[1]*multipNum;
           	multipNum++;
           }
        }
       console.log(tempNum);
    }
});