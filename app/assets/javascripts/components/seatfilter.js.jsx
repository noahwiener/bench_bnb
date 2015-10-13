SeatFilter = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function(min, max) {
    return (
      {min: min || 0,
      max: max || 100}
    );
  },

  componentDidMount: function() {
    console.log(this);
  },

  _handleSubmit: function(event){
    event.preventDefault();
    // debugger;
    FilterActions.receiveSeats(this.seats());
    // ApiUtils.fetchBenches(this.state);
    history.pushState(null, "/");
  },

  _handleMin: function(event){
    this.setState({min: event.target.value});
  },

  _handleMax: function(event){
    this.setState({max: event.target.value});
  },

  seats: function(){
    return ({min: this.state.min, max: this.state.max});
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>Min Seats <br/>
            <input type="text" name="min" value={this.state.minSeats} onChange={this._handleMin}></input>
          </label>

          <br/><br/>

            <label>Max Seats <br/>
              <input type="text" name="max" value={this.state.maxSeats} onChange={this._handleMax}></input>
            </label>

            <br/><br/>

          <input type="submit"></input>
        </form>
      </div>
    );
  }

});
