var BenchForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function(lat, lng, description) {
    return (
      {lat: this.props.location.query.lat || "",
      lng: this.props.location.query.lng  || "",
      description: "",
      maxSeats: ""}
    );
  },

  _handleSubmit: function(event){
    event.preventDefault();
    ApiUtils.createBench({bench: this.state});
    this.props.history.pushState(null, "/");
  },

  _handleLat: function(event){
    this.setState({lat: event.target.value});
  },

  _handleLng: function(event){
    this.setState({lng: event.target.value});
  },

  _handleDesc: function(event){
    this.setState({description: event.target.value});
  },

  _handleSeats: function(event){
    this.setState({maxSeats: event.target.value});
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Latitutde <br/>
            <input type="text" name="lat" value={this.state.lat} onChange={this._handleLat}></input>
          </label>

          <br/><br/>

          <label>Longitude <br/>
            <input type="text" name="lng" value={this.state.lng} onChange={this._handleLng}></input>
          </label>

          <br/><br/>

          <label>Description <br/>
            <input type="text" name="description" value={this.state.description} onChange={this._handleDesc}></input>
          </label>

          <br/><br/>

            <label>Max Seating <br/>
              <input type="text" name="maxSeats" value={this.state.maxSeats} onChange={this._handleSeats}></input>
            </label>

            <br/><br/>

          <input type="submit"></input>
        </form>
      </div>
    );
  }
});
