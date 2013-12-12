var Repeater =(function(){
        var count=1;


        var repeatString= function(str,num)
         {
                var i=0;
                var concat="";
                while(i<num)
                {
                        concat+=str;
                        i++;
                }
                return concat;

         };
    var repeatFunction=function(f,n)
         {
                  var i=0
                  while(i<n)
                  {
                          f();
                          i++
                  }
         };
        var repeatMore= function(str)
        {
                console.log("count outside"+count);
                var i=0;
                var concat="";

     while(i<count)
     {
      console.log("hello");
      concat+=str;
      i++;
     }
     count++;
     
     return concat;
        };
 var repeatFunctionTwice= function(f){
         var i=0;
         while(i<2)
         {
           f();
     i++
         }

 };

return{
        repeatString:repeatString,
        repeatFunction:repeatFunction,
        repeatMore:repeatMore,
        repeatFunctionTwice:repeatFunctionTwice
};
})();