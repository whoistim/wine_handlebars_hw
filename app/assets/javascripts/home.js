var wineList = {};

$(document).ready(function(){
	$(".wine_button").on("click", function(e)  {
        e.preventDefault();
		$.get("http://daretodiscover.net/wine").done(function(wines){
	  var ul = $("<ul>").attr("id", "wines");//create a ul element with id = "wines"
		  wines.forEach(function(wine){
  	   var wineHTML = HandlebarsTemplates["wines/wine"](wine);
		   ul.append(wineHTML);
		  });
	 $(".wineData").append(ul);


		});



	// var template = HandlebarsTemplates["wine"];
	// var html = template(wineResultsJSON);
// render that html to the page (w/ jQuery?)



    });





});