document.addEventListener('DOMContentLoaded', () => {
	var hex = document.getElementById("hex");
	var box1 = document.getElementById("1");
	var box2 = document.getElementById("2");
	var box3 = document.getElementById("3");

	var char1 = document.getElementById("char1");
	var char2 = document.getElementById("char2");
	var char3 = document.getElementById("char3");
	
	happyColours();

	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	function happyColours() {
		setTimeout(() => {
			var mainColor = getRandomColor();
			
			hex.style.color = mainColor;
			document.getElementById("catcher").style.color = mainColor;

			var color1 = getRandomColor();
			var color2 = getRandomColor();
			var color3 = getRandomColor();

			box1.style.backgroundColor = color1;
			box2.style.backgroundColor = color2;
			box3.style.backgroundColor = color3;

			char1.style.color = color1;
			char2.style.color = color2;
			char3.style.color = color3;

			happyColours();
		}, 1300);
	}
});