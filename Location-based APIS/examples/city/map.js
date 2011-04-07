var map, bounds, markers = [];

(function() {

  plotdata = function( data ) {
    // reset places array
    for (var i = 0; i < markers.length; i += 1) {
      markers[i].setMap(null);
    }
    markers = [];

    var places = [];
    if( data.listings ) {
      $.each( data.listings, function(index, value) {
        console.log( index );
        console.log( value );
        if( null !== value.geoCode ) {
          places.push(
            [ new google.maps.LatLng(
                value.geoCode.latitude,
                value.geoCode.longitude
              )
              , value.name
            ]
          );
        }
      });
    } else {
      var categories = '';

      if( data.categories ) {
        $.each( data.categories, function( index, value ) {
          categories += value.name;
        });
      };
      places.push(
        [ new google.maps.LatLng( 
            data.geoCode.latitude,
            data.geoCode.longitude
          )
          , data.name + ' ' + categories
        ]
      );
    }

    for (var i = 0; i < places.length; i += 1) {
      var marker = new google.maps.Marker({
        position: places[i][0],
        map: map,
        title: places[i][1]
      });

      markers.push(marker);

      bounds.extend(places[i][0]);
   }

   map.fitBounds(bounds)

   
  }

  window.onload = function(){
    var options = {
      zoom: 14,
      center: new google.maps.LatLng(43.402179,-80.446444),  
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    };

    map = new google.maps.Map(document.getElementById('map'), options);
    bounds = new google.maps.LatLngBounds();


    document.getElementById( 'search' ).onclick = function() {
      url = "http://localhost/passthrough/?endpoint=FindBusiness&what=pizza&where=Kitchener&UID=127.0.0.1&apikey=ew9z6gwchf59naa7ntsczubk&fmt=json";
      $.get( url, plotdata );

      document.title = 'City Search';      
    };

    document.getElementById( 'radius' ).onclick = function() {
      url = "http://localhost/passthrough/?endpoint=FindBusiness&what=pizza&where=cZ-80.446444,43.402179&UID=127.0.0.1&apikey=ew9z6gwchf59naa7ntsczubk&fmt=json";
      $.get( url, plotdata );

      document.title = 'Lat/Lng Search';
    };


    document.getElementById( 'ginos' ).onclick = function() {
      // http://api.yellowapi.com/GetBusinessDetails/?prov=Ontario&city=Kitchener&bus-name=Gino-s-Pizza&listingId=5863684&lang=en&apikey=ew9z6gwchf59naa7ntsczubk&UID=127.0.0.1
      url = "http://localhost/passthrough/?endpoint=GetBusinessDetails&prov=Ontario&city=Kitchener&bus-name=Gino-s-Pizza&listingId=5863684&lang=en&apikey=ew9z6gwchf59naa7ntsczubk&UID=127.0.0.1&fmt=json";
      $.get( url, plotdata );

      document.title = 'Gino\'s Pizza';
    };

 
  };

})();


