
var React = require('react');
var store = require('./store');

module.exports = React.createClass({
	// photo passed to class
	getInitialState: function() {
		return {
			photo: this.props.photo
		};
	},
	// set state of photo
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			photo: nextProps.photo
		});
	},
	// When back button is clicked, change state 
	onClick: function() {
		store.dispatch({ type: 'ON_BACK' });
	},
	//Show big image
	render: function() {
		var photo = this.state.photo;
		var img_url = "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +".jpg";
		return (
			<div>	

				<img src={img_url} onClick={this.onClick} className="photo"/>
			</div>
		);
	}
});