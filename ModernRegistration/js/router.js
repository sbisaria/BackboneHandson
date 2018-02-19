// var vent = _.extend({},Backbone.Events);

var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"about": "mypage",
		"contact": "contactpage",
		"catalog": "catalogs"
	},
	index: function() {
		console.log('Index page...');
	}
});
var router = new Router();
router.on("route:home",function(){
	
});
Backbone.history.start();