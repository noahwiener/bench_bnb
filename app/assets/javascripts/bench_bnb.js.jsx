$(document).ready(function(){

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/benches/new" component={BenchForm} />
      <Route path="/show/:id" component={Show} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);

});
