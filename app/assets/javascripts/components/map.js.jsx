Map = React.createClass({
  getInitialState: function(){
    return {markers: []};
  },

  _updateMarkers: function(){

    this.state.markers.forEach(function(marker){
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


    this.setState({ markers: current_markers });


    this.state.markers.forEach(function(marker){
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
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', function(){
      ApiUtils.fetchBenches(this.bounds());
    }.bind(this));

    BenchStore.addChangeListener(this._updateMarkers);
  },

  render: function(){
    return (
      <div className="map" ref="map">

      </div>);
  }
});
