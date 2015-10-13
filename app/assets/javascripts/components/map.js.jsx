Map = React.createClass({


  _updateMarkers: function(){

    this.markers.forEach(function(marker){
      marker.setMap(null);
    }.bind(this));

      var current_markers = [];

      BenchStore.all().forEach( function(bench){
        var pos = new google.maps.LatLng(bench.lat, bench.lng);

        var marker =  new google.maps.Marker({
          position: pos,
          title: bench.description
        });

        current_markers.push(marker);
      }.bind(this));


    this.markers = current_markers;


    this.markers.forEach(function(marker){
      marker.setMap(this.map);
    }.bind(this));
},

  bounds: function(){
    var top = this.map.getBounds().getNorthEast().lat();
    var bottom = this.map.getBounds().getSouthWest().lat();
    var left = this.map.getBounds().getSouthWest().lng();
    var right = this.map.getBounds().getNorthEast().lng();

    return (
            {
               northEast: { lat: top, lng: right } ,
               southWest: { lat: bottom, lng: left }
            }
          );
  },

  componentDidMount: function(){
    this.markers = [];
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', function(){
      // ApiUtils.fetchBenches(this.bounds());
      FilterActions.receiveBounds(this.bounds());
    }.bind(this));

    BenchStore.addChangeListener(this._updateMarkers);

    this.map.addListener('click', function(e){
      var coords = {lat: e.latLng.J, lng: e.latLng.M};
      this.props.handleClick(coords);
    }.bind(this));

  },

  render: function(){
    return (
      <div className="map" ref="map">

      </div>);
  }
});
