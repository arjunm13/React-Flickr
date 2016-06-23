
var { createStore } = require('redux');

var initialState = {
    photos: [],
    photo: null,
    photoView: false
 };


///https://github.com/reactjs/redux/blob/master/docs/basics/Reducers.md
function appReducer(state = initialState, action) {
  switch (action.type) {
    // WHen the API returns the array of photos, 
    // still in  list view  
    case "COMPLETE_SEARCH":
        return Object.assign({}, state, { photos: action.photos || [], photoView: false });
    // When an image is clicked 
    //photo view is rendered with clicked image
    case "IMAGE_ON_CLICK":
    	return Object.assign({}, state, { photo: action.photo, photoView: true });
    // WHen the back button is clicked 
    //change view back to list view
    case "ON_BACK":
    	return Object.assign({}, state, { photoView: false });
    // initial / default state 
    // photos array and photo
    default:
      return state
  }
};


var store = createStore(appReducer);

module.exports = store;