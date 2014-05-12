$(function(){


// Write our base functions
console.log(data);

//the loop      
for(var i=0;i<data.length;i++){
	var graph= data[i];
	var person= $("<div class='person'>");


var fullName = data[i][8];
var salary = data[i][18] /200;


var fullNameParagraph = $("<p>").text(fullName);
var salaryParagraph = $("<p>").text(salary);
var div= $("<div class='bar'></div>").css("width", salary);

person.append(fullNameParagraph);
person.append(salary);
person.append(div);

$("#graph").append(person);
}

});