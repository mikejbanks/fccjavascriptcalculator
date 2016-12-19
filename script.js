$(document).ready(function(){
var allInputs=[""];

var displayString;

var operators=["+","-","/","*","%"];

var decimalPoint=["."];

var numInput=[0,1,2,3,4,5,6,7,8,9];

/*Function to determine what to do with input depending on operator or decimal place.*/
function getValue(input){
	if(decimalPoint.includes(allInputs[allInputs.length-1])===true && input==="."){
		console.log("Two decimal points not allowed input");
	}
	else if(allInputs.length===1 && operators.includes(input)===false){
		allInputs.push(input);
	}
else if(operators.includes(allInputs[allInputs.length-1])===false){
	allInputs.push(input);
}
else if(numInput.includes(Number(input))){
	allInputs.push(input);
}
update();
}

function update(){
	displayString=allInputs.join("");
	$("#display").val(displayString);
}

/*Evaluates all the inputs to get answer.*/
function getTotal(){
	displayString=allInputs.join("");
	$("#display").val(eval(displayString));
}

/*Clears all or part of allInputs array or gets the total.*/
$(":button").on("click", function(){
	
	if(this.value==="AC"){
		allInputs=[""];
		update();
	}
else if(this.value==="CE"){
	allInputs.pop();
	update();
}
else if(this.value==="="){
	getTotal();
}
else{
if(allInputs[allInputs.length-1].indexOf("+","-","/","*","%")===-1){
	getValue(this.value);
}
else{
	getValue(this.value);
}
}
});

});
