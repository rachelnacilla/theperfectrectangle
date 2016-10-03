//To calculate the perfect height from width


			function calcPerfectRectangle () {

				var theInput = document.getElementById("enterMeasurement").value;
				var unit = document.getElementById("theUnit").value;
				var dimensions = document.getElementById("theDimension").value;
				//If user selects 'width'
				if (dimensions === 'Width') {

					document.getElementById("theAnswer").innerHTML = 'Height: ' + (theInput/1.618).toFixed(2) + ' ' + unit;
					document.getElementById("errorMessage").innerHTML = "<p style='display: none;'>"

				}
				//If user selects 'height'
				else {

					document.getElementById("theAnswer").innerHTML = 'Width: ' + (theInput/1.618).toFixed(2) + ' ' + unit;
					document.getElementById("errorMessage").innerHTML = "<p style='display: none;'>"

				}



			}

			//If user inputs a non-number
			function warningMessage() {

				var theInput = document.getElementById("enterMeasurement").value;

				
				if (isNaN(theInput)) {

					document.getElementById("theAnswer").innerHTML = "<p style='display: none;'></p>";
					document.getElementById("errorMessage").innerHTML = "<div style='background-color: yellow; padding: 10px; border-radius: 5px;'>Warning: please make sure you only enter numbers in the 'Enter measurement' field. It isn't necessary to enter units. Please try again.</div>";


				}

			}


//Remove query string in URL
function getPathFromUrl(url) {
  return url.split("?")[0];
}
