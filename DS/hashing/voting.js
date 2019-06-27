function result(votes) {
	votes = votes.sort().reverse();
	var obj = {};
	votes.forEach(function(vote) {
		if(obj[vote])
			obj[vote] = obj[vote] + 1;
		else
			obj[vote] = 1;
		//or 
		//obj[vote] = obj[vote] ? obj[vote] + 1 : 1;
	});

	var values = Object.values(obj).sort();
	var max = values[values.length - 1];
	for(let i in obj) {
		if(obj[i] == max)
			return i;
	}
}

var votes = ['Alex', 'Henry', 'Osama', 'Osama', 'Mendy', 'Osama', 'Alex', 'Alex', 'Zero'
, 'Zero', 'Zero', 'hero', 'hero', 'hero', 'hero'];
console.log(result(votes));