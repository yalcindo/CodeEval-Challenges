	var checkPrime=function(num){
			var i=2;
			
			
              var reduction=Math.ceil(Math.sqrt(num));
              
			
			while(i<=reduction)
			{
				
				if(num%i===0){
					return false;
				}
				i++;
			}
			return num;
		};

	var sumOfPrimes=function(funct){
		var total=2;
		var counter=1;
		var stopCondition=true;
		var num=2;
		while(stopCondition)
		{
			if(funct(num))
			{
                
				total=total+num;
				
				counter++;

				if(counter===1000) 
				{
					stopCondition=false;
				} 
		    }
			num++;   
		}
      
		console.log(total);
		return total;
	};
	sumOfPrimes(checkPrime);
	