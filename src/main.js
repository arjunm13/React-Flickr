
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var SearchBar = require('./SearchBar');
var Photo = require('./Photo');
var List = require('./List');
var store = require('./store');

var App = React.createClass({

	getInitialState: function() {
		
		store.subscribe(function(){
			this.setState(store.getState());
		}.bind(this));

		return store.getState();
	},

	renderContent: function() {
		if(this.state.photoView) {
			return (<Photo photo={this.state.photo}/>);
		} else {
			return (<List photos={this.state.photos}/>);
		}
	},

	render: function() {
		return (
			<div className="container">
				<SearchBar/>
				{this.renderContent()}
			</div>
		);
	}

});

ReactDOM.render(
  <App/>,
  document.body
);