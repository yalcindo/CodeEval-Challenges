
		var checkPrime=function(num){
			var i=2;
			while(i<Math.sqrt(num))
			{
				if(num%i===0){
					return false;
				}
				i++;
			}

			return num;
		};
		var checkPalindrome=function(num){
			return num.toString().charAt(0)===num.toString().charAt(2) ? num : false;
		};

		var primePalindrome=function(x,y){
			var numLimit=1000;
			while(2<numLimit)
			{
				if(x(numLimit))
				{
					if(x(y(numLimit)))
					{
						console.log(numLimit);
						return numLimit;
					}

				}

				numLimit--;
		    }
        };
primePalindrome(checkPrime,checkPalindrome);

