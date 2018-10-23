function table(){
	function addition(x){
		var content = "";
		for(var i = 0; i < 10; i++){
			var result = x + i;
			content += x+" + "+i+" = "+result+" \n"; 
		}
		document.frm.result.value = content;
	}
	function subtraction(x){
		var content = "";
		for(var i = 0; i < 10; i++){
			var result = x - i;
			content += x+" - "+i+" = "+result+" \n"; 
		}
		document.frm.result.value = content;
	}
	function multiplication(x){
		var content = "";
		for(var i = 0; i < 10; i++){
			var result = x * i;
			content += x+" * "+i+" = "+result+" \n"; 
		}
		document.frm.result.value = content;
	}
	var number   = parseInt(frm.number.value),
		operator = document.getElementById('operator').value;

		switch(operator){
			case "+":
				addition(number);
				break;
			case "-":
				subtraction(number);
				break;
			case "*":
				multiplication(number);
				break;
		}
	return false;
}