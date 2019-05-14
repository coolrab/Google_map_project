function initMap(){
let options = {
  zoom:6,
  center:{lat:60.3913,lng:5.3221}
}
// New map instance is created.
let map = new google.maps.Map(document.querySelector('#map'), options);
/*
// Add marker to the maps
let marker = new google.maps.Marker({
  position:{lat:60.3810,lng:5.2593},
  map:map
});
// add infoWindow for the imformation of the location
let infoWindow = new google.maps.InfoWindow({
  content:`<h1>Laksevåg</h1>`
});
// add a eventlistener to open the infoWindow.
marker.addListener('click', function(){
  infoWindow.open(map,marker)
})
*/

let markers =[
  {
    coords:{lat:60.3913,lng:5.3221},
    // iconImage: 'link',
    content: `<h1 class='location'>Bergen</h1>`
  },
  {
    coords:{lat:60.6585,lng:6.4653},
    content: `<h1 class='location'>Voss</h1>`
  },
  {
    coords:{lat:60.0676,lng:6.5473},
    content: `<h1 class='location'>Odda</h1>`
  },
  {
    coords:{lat:58.9700,lng:5.7331},
    content: `<h1 class='location'>Stavanger</h1>`
  },
  {
    coords:{lat:59.9139,lng:10.7522},
    content: `<h1 class='location'>Oslo</h1>`
  }
];

// Loop through markers
for (let i = 0; i<markers.length; i++){
// add markers
  addMarker(markers[i]);
}



/*
addMarker({
  coords:{lat:60.3810,lng:5.2593},
  // iconImage: 'link',
  content: `<h1>Laksevåg</h1>`
});
addMarker({
  coords:{lat:60.6585,lng:6.4653},
  content: `<h1>Voss</h1>`
});
addMarker({coords:{lat:60.0676,lng:6.5473}});
addMarker({coords:{lat:58.9700,lng:5.7331}});
addMarker({coords:{lat:59.9139,lng:10.7522}});
*/


// add marker function
function addMarker(props){
  let marker = new google.maps.Marker({
    position:props.coords,
    map:map
    // iconImage:props.iconImage
  });

  /*
   check for customicon
   if(props.iconImage){
     set icon image
     marker.setIcon(props.iconImage);

  }*/
  // check content
  if (props.content){
    // add infoWindow for the imformation of the location
    let infoWindow = new google.maps.InfoWindow({
      content:props.content
    });
    // add a eventlistener to open the infoWindow.
    // add a eventlistener to open the infoWindow.
    marker.addListener('click', function(){
      infoWindow.open(map,marker)
    });
  }

}
}
