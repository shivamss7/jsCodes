function check(data) {
	data = data.split(",");

	for(var item of data) {
		if(item.length < 6)
			console.log("Failure Password must be at least 6 characters long");

		else if(item.length > 12)
			console.log("Failure Password must not be greater than 12 characters");
		
		else if(item.match(/[%!)(]/))
			console.log("Failure Password cannot contain %!)(");

		else if(item.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*$_#=@])[A-Za-z\d*$_#=@]{6,12}$/) == null) {
			if(item.match(/[a-z]/) == null)
				console.log("Failure Password must contain at least one letter from a-z");
			else if(item.match(/[A-Z]/) == null)
				console.log("Failure Password must contain at least one letter from A-Z");
			else if(item.match(/[\d]/) == null)
				console.log("Failure Password must contain at least one letter from 0-9");
			else if(item.match(/[*$_#=@]/) == null)
				console.log("Failure Password must contain at least one letter from *$_#=@");	
		}

		else
			console.log("Successful");
	}
}

var arr = 'Abcd@123,1234,fjdklfjd&7';
check(arr);