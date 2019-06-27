var t = {
	data : 3,
	next : {
		data : 4,
		next : {
			data : 5,
			next : null
		}
	}
}

var p= t.next.next;
console.log(p);
p= null;
console.log(t);
console.log(p);