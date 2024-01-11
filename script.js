const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let d=false;
	let x= Object.keys(sampleObject);
	x.forEach((e)=>{
		if(e===key){
			d=true
		}
	});
	return d;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
