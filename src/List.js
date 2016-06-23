
var React = require('react');
var store = require('./store');

module.exports = React.createClass({
	// Initial state
	getInitialState: function() {
		return {
			photos: this.props.photos
		};
	},
	// When received set photo values to that which was recieved
	componentWillReceiveProps: function(nextProps) {
		this.setState({
			photos: nextProps.photos
		});
	},
	// OnCLick Show large image, switch states and pass photo object
	onClick: function(photo) {
		store.dispatch({ type: 'IMAGE_ON_CLICK', photo: photo});
	},
	//
	renderPhoto: function(photo) {
		// consruct image url
		var img_url = "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg";
		return (
			// for each photo should have an onclick function associated with each photo
			<a onClick={function(){ this.onClick(photo) }.bind(this)}>
				<img key={photo.id} src={img_url} className="imageItem"/>
			</a>
		);
	},

	render: function() {
		return (
			<div>
				{	// render photo once for each element in photos
					this.state.photos.map(function(photo){
						return this.renderPhoto(photo);
					}.bind(this))
				}
			</div>
		);
	}
});