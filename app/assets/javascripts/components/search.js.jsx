Search = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { filterParams: FilterParamsStore.filters() };
  },

  componentDidMount: function() {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    ApiUtils.fetchBenches(this.state.filterParams);
  },

  handleMapClick: function(coords){
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function (){
    return(
      <div>
        < Map handleClick={this.handleMapClick} />
        < Index />
        < SeatFilter />
      </div>
    );
  }
});
