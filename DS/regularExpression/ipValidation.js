.//to check wehether the given ip address is ipv4 or not

function ipValid(input) {
	//var ipv4 = new RegExp('^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$');
	var length = input[0];
	var ipv4 = /^(?!\.)((^|\.)([1-9]?\d|1\d\d|2(5[0-5]|[0-4]\d))){4}$/;
	var ipv6 = /^(?!\:)((^|\:)([A-Fa-f0-9]{1,4})){8}$/;
	
	for (var i = 1; i <= length; i++) {
        if (ipv4.test(input[i]))
            console.log("IPv4");
        else if (ipv6.test(input[i]))
            console.log("IPv6");
        else
            console.log("Neither");
    } 
}

var input = [7, 
			"1050:1000:1000:a000:5:600:300c:326b",
			"1050:1000:2000:ab00:5:600:300c:326a",
			"1050:1000:3000:abc0:5:600:300c:326c",
			"1051:1000:4000:abcd:5:600:300c:326b",
			"22.231.113.64",
			"22.231.113.164",
			"222.231.113.64"];

var input2 = [35,
			"1050:0:0:0:5:600:300c:326b",
			"1050:0:0:0:5:600:300c:326a",
			"1050:0:0:0:5:600:300c:326c",
			"1051:0:0:0:5:600:300c:326b",
			"22.231.113.64",
			"22.231.113.164",
			"255.231.111.64",
			"253.231.111.64",
			"1050:10:0:0:5:600:300c:326b",
			"1050:10:0:0:5:600:300c:326a",
			"1050:10:0:0:5:600:300c:326c",
			"1051:10:0:0:5:600:300c:326b",
			"22.21.113.61",
			"22.21.113.162",
			"255.21.111.6",
			"253.21.111.69",
			"1050:10:0:0:15:600:300c:326b",
			"1050:10:0:10:5:600:300c:326a",
			"1050:10:10:0:5:600:300c:326c",
			"1051:110:0:0:5:600:300c:326b",
			"22.211.113.64",
			"22.212.113.164",
			"255.213.111.64",
			"253.214.111.64",
			"1050:10:0:0:15:600:300c:326k",
			"1050:10:0:0:15:600:300c:326g",
			"1050:10:0:0:15:600:300c:326h",
			"1050:10:0:0:15:600:300c:326i",
			"22.211.113.364",
			"22.212.113.3164",
			'255.213.111.464',
			'253.214.111.564',
			'not an ip address',
			'not an ipv4 Address',
			'Not an IPv5 Address']

ipValid(input2);