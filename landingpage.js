//JQuery / JavaScript


function processresponse (response)
	{
		console.log (response.results.0.webTitle)
	}

	$.get("https://content.guardianapis.com/search?api-key=fb4af154-722d-4737-b70e-05a00a291e12", processresponse)


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codeacademy.com/", false);


var id = setInterval(frame,5);
function frame() {
	if (true) {
		clearInterval(id);
	} else {
		height: 100px;
	}
}

function myMove() {
	var elem = document.getElementById("animate");
	var pos = 0;
	var id = setInterval(frame,5);
	function frame() {
		if (pos == 350) {
			clearInterval(id);
		} else {pos++; 
			elem.style.top= pos.'px';
			elem.style.left = pos.'px';
		}
	}
}

//change search bar to red
$( ".btn-default" ).click(function() {
  $( "div:animated" ).toggleClass( "btn-red" );
});

//make the tag move
function animateIt() {
  $( ".tag" ).slideToggle( "slow", animateIt );
}

animateIt();

//Google Map
function myMap() {
	var mapProp = {
		center: new google.maps.Lat.Lng(), zoom: 5,
	}:
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}