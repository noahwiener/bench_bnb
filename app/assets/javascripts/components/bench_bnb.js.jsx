Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all() });
  },

  render: function () {
    return (
      <div> {
        this.state.benches.map(function(bench) {
          return(
            <li>
              description: {bench.description}, latitude: {bench.lat}, longitude: {bench.lng}
            </li>
          );
        })
      } </div>
    );
  }
});

$(document).ready(function(){
  React.render(
    < Search />,
    document.getElementById("content")
  );
});



  // getInitialState: { benches: Benchstore.all() },

// jQuery select content div, pass it as second arg to render
