Index = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
    // debugger;
    // this.state.benches.addListener('click', function(e){
    //   console.log("hi");
    // }.bind(this));
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all() });
  },

  _onClick: function(){
    console.log("hi");
      // this.props.history.pushState(null, "/");
  },

  render: function () {
    return (
      <div> {
        this.state.benches.map(function(bench) {
          return(
            <li key={bench.description} onClick={this._onClick}>
              description: {bench.description}, latitude: {bench.lat}, longitude: {bench.lng}, seats: {bench.seating}
            </li>
          );
        }.bind(this))
      } </div>
    );
  }
});




  // getInitialState: { benches: Benchstore.all() },

// jQuery select content div, pass it as second arg to render
