var btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
		e.preventDefault();
		var method = document.getElementById('converts').value;
		var input = document.getElementById('input').value;

			if (input == null || input == "") {
				alert('Please Enter A Value');
			}
			else {

		if ( method =='mToKm' ) {
			var answer = Number(input) / 1000;
			alert(answer + ' km');
		}

		else if ( method =='mToCm'){
			var answer = Number(input) * 100;
			alert(answer + ' Cm')
		}

		else if (method =='kmToM'){
			var answer = Number(input) * 1000;
			alert(answer + ' m')
		}

		else if (method =='kmToCm'){
			var answer = Number(input) * 100000;
			alert(answer + ' Cm');
		}

		else if (method =='CmToKm'){
			var answer = Number(input) / 100000;
			alert(answer + ' Km')
		}

		else if (method =='CmToM'){
			var answer = Number(input) / 100;
			alert(answer + ' M')
		}
		}
});
