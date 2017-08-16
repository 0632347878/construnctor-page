 // begin tabs
 function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}			
 // end tabs
// begin range sliders
$( function() {
	$( "#slider-range" ).slider({
	range: true,
	step:0.5,
	min: 0,
	max: 10,
	values: [0 , 0.5 ],
	slide: function( event, ui ) {
		$( "#amount" ).val( "CARAT" + ui.values[ 0 ] + " - CARAT" + ui.values[ 1 ] );
	}
	});
	$( "#amount" ).val( "CARAT" + ' ' + $( "#slider-range" ).slider( "values", 0 ) +
	" - CARAT" + ' '  + $( "#slider-range" ).slider( "values", 1 ) );
} );
$( function() {
	$( "#slider-range2" ).slider({
	range: true,
	step:0.5,
	min: 0,
	max: 10,
	values: [0 , 0.5 ],
	slide: function( event, ui ) {
		$( "#amount2" ).val( "CARAT" + ui.values[ 0 ] + " - CARAT" + ui.values[ 1 ] );
	}
	});
	$( "#amount2" ).val( "CARAT" + ' ' + $( "#slider-range2" ).slider( "values", 0 ) +
	" - CARAT" + ' '  + $( "#slider-range2" ).slider( "values", 1 ) );
} );
$( function() {
	$( "#slider-range3" ).slider({
	range: true,
	step:0.5,
	min: 0,
	max: 10,
	values: [0 , 0.5 ],
	slide: function( event, ui ) {
		$( "#amount3" ).val( "CARAT" + ui.values[ 0 ] + " - CARAT" + ui.values[ 1 ] );
	}
	});
	$( "#amount3" ).val( "CARAT" + ' ' + $( "#slider-range3" ).slider( "values", 0 ) +
	" - CARAT" + ' '  + $( "#slider-range3" ).slider( "values", 1 ) );
} );
$( function() {
	$( "#slider-range4" ).slider({
	range: true,
	step:0.5,
	min: 0,
	max: 10,
	values: [0 , 0.5 ],
	slide: function( event, ui ) {
		$( "#amount4" ).val( "CARAT" + ui.values[ 0 ] + " - CARAT" + ui.values[ 1 ] );
	}
	});
	$( "#amount4" ).val( "CARAT" + ' ' + $( "#slider-range4" ).slider( "values", 0 ) +
	" - CARAT" + ' '  + $( "#slider-range4" ).slider( "values", 1 ) );
} );
// end range sliders

// begin checkbox

 // checkbox
	var firstBox = document.querySelector("#slider1-1");
	var secondBox = document.querySelector("#slider1-2");
	var thirdBox = document.querySelector("#slider1-3");
	var fourthBox = document.querySelector("#slider1-4"); 

	// sliders

	var slider1 =  document.querySelector(".slider-rangeDn1");
	var slider2 =  document.querySelector(".slider-rangeDn2");
	var slider3 =  document.querySelector(".slider-rangeDn3");
	var slider4 =  document.querySelector(".slider-rangeDn4");

	//events

	firstBox.addEventListener('click', myBox1);
	secondBox.addEventListener('click', myBox2);
	thirdBox.addEventListener('click', myBox3);
	fourthBox.addEventListener('click', myBox4);

	function myBox1() {
		if(slider1.className =='slider-rangeDn1 disabled-range') {
			slider1.classList.remove('disabled-range');
		}
		else {
		slider1.classList.add('disabled-range');
		}
	}

	function myBox2() {
		if(slider2.className =='slider-rangeDn2 disabled-range') {
			slider2.classList.remove('disabled-range');
		}
		else {
		slider2.classList.add('disabled-range');
		}
	}

	function myBox3() {
		if(slider3.className =='slider-rangeDn3 disabled-range') {
			slider3.classList.remove('disabled-range');
		}
		else {
		slider3.classList.add('disabled-range');
		}
	}
function myBox4() {
		if(slider4.className =='slider-rangeDn4 disabled-range') {
			slider4.classList.remove('disabled-range');
		}
		else {
			slider4.classList.add('disabled-range');
		}
	}
// end checkbox	

// begin zoom effect for images
		if (window.matchMedia('(min-width: 1200px)').matches) {
			window.addEventListener('DOMContentLoaded', zoomGallery);
		}
		function zoomGallery() {
		

				var demoTrigger = document.querySelector('.tabDn-images-item1 .zoom__img');
				var paneContainer = document.querySelector('.tabDn-images-item .zoom-show');
				
				var demoTrigger2 = document.querySelector('.tabDn-images-item2 .zoom__img2');
				var paneContainer2 = document.querySelector('.tabDn-images-item .zoom-show2');

				var demoTrigger3 = document.querySelector('.tabDn-images-item3 .zoom__img3');
				var paneContainer3 = document.querySelector('.tabDn-images-item .zoom-show3');

				var demoTrigger4 = document.querySelector('.tabDn-images-item4 .zoom__img4');
				var paneContainer4 = document.querySelector('.tabDn-images-item .zoom-show4');

					new Drift(demoTrigger, {
							paneContainer: paneContainer,
							inlinePane: false
					});

					new Drift(demoTrigger2, {
							paneContainer: paneContainer2,
							inlinePane: false
					});

					new Drift(demoTrigger3, {
							paneContainer: paneContainer3,
							inlinePane: false
					});

					new Drift(demoTrigger4, {
							paneContainer: paneContainer4,
							inlinePane: false
					});
				
		}
// end zoom effect for images
	
