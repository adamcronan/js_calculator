
function addText(btn) { 
	var toCalc = $("#calc_screen").text();
	toCalc += btn.value;  
	$("#calc_screen").text(toCalc); 
};

function calculate() {
	var calculation = eval($("#calc_screen").text()); 
	$("#calc_screen").text(calculation.toString());
}; 

function clearScreen() {
	$("#calc_screen").text("");
}; 

function backSpace() {
	var entry = $("#calc_screen").text();
	if ( entry.length > 0 ) {
		var newEntry = entry.substring(0, entry.length - 1);
		$("#calc_screen").text(newEntry); 
	} else {
		return;
	}; 
};