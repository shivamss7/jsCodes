//given a array of sentences and queries find out whether the query is present in a string and also
//print out the index of the sentence and if present in multiple sentences then print all the indices 
//where it it is present else print -1

function printIndex(sentences, queries) {

	for(var i = 0; i < queries.length; i++) {
		var arr = queries[i].split(" ");
		var flag = 0;
		for(var j = 0; j < sentences.length; j++) {
			var flag2 = 0;
			for(var k of arr) {
				if(sentences[j].indexOf(k) == -1)
					flag2 = 1;
			}
			if(flag2 == 0) {
				flag = 1;
				process.stdout.write(j + " ");
			}
		}
		if(flag == 0)
			console.log(-1);
		console.log();
	}
}

function printIndex2(sentences, queries) {
	
	for(var i = 0; i < queries.length; i++) {
		var arr = queries[i].split(" ");
		var flag = 0; 
		for(var j = 0; j < sentences.length; j++) {
			var n = arr.every(function(val) {
				return sentences[j].includes(val);
			});
			if(n) {
				flag = 1;
				process.stdout.write(j + " ");
			}
		}
		if(flag == 0)
			process.stdout.write("-1");
		console.log();
	}
}

var sentences = ['hello bello mello', 'hello my name is likes', 'I think she likes you'];
var queries = ['hello mello', 'likes', "yolo", "name"];
printIndex2(sentences, queries);


