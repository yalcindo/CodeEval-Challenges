
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
     
      var nums=line.split(" ");
      for(var i=0;i<nums.length;i++){
           nums[i]=+nums[i];

      }
     
     var repeatedNums= function(arr){
      var reIndex=[];
      for(var i=0;i<arr.length;i++){
        for(var j=(arr.length-2);i<j;j--){
          if(arr[i]===arr[j]){
            
            reIndex.push(arr[i]);
          }

        }
      }
     
     return reIndex;
     };
    var makeUnique=function(arr)
    { 
      var obj={};
      for(var i=0;i<arr.length;i++){
        obj[arr[i]]=arr[i];
      }
      var newArr=[];
      for (var key in obj)
      {
        newArr.push(+key);
      }
     return newArr;
    };
    var checkSquence=function(arr){
       var temp=[];
      for(var i=0;i<arr.length;i++){
        temp.push(nums.indexOf(arr[i]));
      }
        
         temp.sort(function(a,b){return a-b});
         

       

         var result="";
         for(var i=0;i<temp.length;i++)
         {
          var result= result +" "+ nums[temp[i]];
         }



         console.log(result);

    };


      checkSquence(makeUnique(repeatedNums(nums)));
    }
  
});