var name = 'manju'; //store the namw in one variable

var arrayOfName = name.split(''); // Convert string to array

arrayOfName.forEach(function(value, index) {

	if (index % 2 === 0) {// find only alternative values
		console.log(value);

	}


}
);

