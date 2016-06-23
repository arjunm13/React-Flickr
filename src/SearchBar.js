
// import modules
var React = require('react');
var store = require('./store');
var $ = require('jquery');


// On data return from API Call , dispatch Completed search action with photos
window.jsonFlickrApi = function(data) {
    store.dispatch({ type: 'COMPLETE_SEARCH', photos: data.photos.photo });
};

//SearchBar class 
module.exports = React.createClass({

    onClick: function() {
        if (this.refs.text.value == "") {
            alert("Please Enter a Search Word");
        }
        // Text search value
        var text = encodeURIComponent(this.refs.text.value);
        //Sort type, defined in api
        var sort = encodeURIComponent(this.refs.sort.value);
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1182a6e44c43fb78c2bd559719ec6a51&sort=' + sort + '&text=' + text + '&per_page=10&format=json'
            // Make api call , returns JSON object passed to jsonFlickrAPI()
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: window.jsonFlickrApi
        });
    },

    render: function() {
        return ( < div className = "dark" >
            < input type = "text"
            ref = "text"
            className = "search rounded"
            placeholder = "Search..." / >
            < select className = "select rounded"  ref = "sort" > < option value = "date-posted-asc" > Date Posted(ASC) < /option > < option value = "date-posted-desc" > Date Posted(DESC) < /option > < option value = "date-taken-asc" > Date Taken(ASC) < /option > < option value = "date-taken-desc" > Date Taken(DESC) < /option > < /select > <br /> < button className = "greenButton rounded"
            type = "button"
            onClick = { this.onClick } > Search < /button> < /div >
        );
    }
});