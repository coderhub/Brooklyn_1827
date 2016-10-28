    $(function() {
      $( "#draggable" ).draggable();
    });

    var zoomCount = 1;
    $( document ).ready(function() {

    $(function() {
    $( "#slider1,#slider2" ).slider({
    	min: 1,
    	max: 9
	});
    //Show or hide Original Map image
    $("#hmap").click( function() {
	if($("#hmap").prop("checked") == false) {
		
		$( ".maporg" ).removeClass( "visible" );
		$( ".maporg" ).addClass( "hidden" );
	} else {
		$( ".maporg" ).removeClass( "hidden" );
		$( ".maporg" ).addClass( "visible" );
	}
    });
    //Show or hide 3D Map image
	$("#dmap").click( function() {
	if($("#dmap").prop("checked") == false) {	
		$( ".map3d" ).removeClass( "visible" );
		$( ".map3d" ).addClass( "hidden" );
	} else {
		$( ".map3d" ).removeClass( "hidden" );
		$( ".map3d" ).addClass( "visible" );
	}
    });


  });

   //Change map size
    $(".zoom-plus").click( function() {
    	
	  	 if (zoomCount === 1) {
	  	 	$("#draggable").css("transform","Scale(1)");
	  	 	zoomCount++;
	  	 } else if(zoomCount === 2){
	  	 	$("#draggable").css("transform","Scale(2)");
	  	 	zoomCount++;
	  	 } else if(zoomCount === 3) {
	  	 	$("#draggable").css("transform","Scale(3)");
	  	 	zoomCount++;
	  	 } else {
	  	 	$("#draggable").css("transform","Scale(4)");
	  	 }

    });

    $(".zoom-minus").click( function() {
    
	  	
	  	 if (zoomCount === 1) {
	  	 	$("#draggable").css("transform","Scale(1)");
	  	 } else if(zoomCount === 2){
	  	 	$("#draggable").css("transform","Scale(1)");
	  	 	zoomCount--;
	  	 } else if(zoomCount === 3) {
	  	 	$("#draggable").css("transform","Scale(2)");
	  	 	zoomCount--;
	  	 } else {
	  	 	$("#draggable").css("transform","Scale(3)");
	  	 	zoomCount--;
	  	 }
    });

// Change transparency of 3D Map
$("#slider1").click(function(){
	var value = $("#slider1").slider("value");
	

	$(".map3d").css("opacity","0.4");

	switch(value) {
		case 1: $(".map3d").css("opacity", "1");
		break;
		case 2: $(".map3d").css("opacity", "0.9");
		break;
		case 3: $(".map3d").css("opacity", "0.8");
		break;
		case 4: $(".map3d").css("opacity", "0.7");
		break;
		case 5: $(".map3d").css("opacity", "0.6");
		break;
		case 6: $(".map3d").css("opacity", "0.5");
		break;
		case 7: $(".map3d").css("opacity", "0.4");
		break;
		case 8: $(".map3d").css("opacity", "0.3");
		break;
		case 9: $(".map3d").css("opacity", "0.2");
		break;
	}

});
// Change transparency of Original Map
$("#slider2").click(function(){
	var value = $("#slider2").slider("value");
	

	switch(value) {
		case 1: $(".maporg").css("opacity", "1");
		break;
		case 2: $(".maporg").css("opacity", "0.9");
		break;
		case 3: $(".maporg").css("opacity", "0.8");
		break;
		case 4: $(".maporg").css("opacity", "0.7");
		break;
		case 5: $(".maporg").css("opacity", "0.6");
		break;
		case 6: $(".maporg").css("opacity", "0.5");
		break;
		case 7: $(".maporg").css("opacity", "0.4");
		break;
		case 8: $(".maporg").css("opacity", "0.3");
		break;
		case 9: $(".maporg").css("opacity", "0.2");
		break;
	}

  });

});
