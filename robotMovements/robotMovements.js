
var robotMovements=(function(){
        
        var getSteps=function(left,right){
        	var distance=left+right;
        	var totalsteps= Math.pow(2,distance-1)
          console.log(totalsteps)
        };
    
      return{
      	getSteps:getSteps
        
      }

      })();
      robotMovements.getSteps(4,4);