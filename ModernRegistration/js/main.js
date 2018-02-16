// FirstView = Backbone.View.extend({
// 	el : ("#container"),
// 	initialize: function(){
// 		this.render();
// 	},
// 	render: function(){
// 		var template = _.template($("#first-template").html(),{});
// 		this.$el.html(template);
// 	}
// });
// SecondView = Backbone.View.extend({
// 	el : $("#container"),
// 	initialize: function(){
// 		this.render();
// 	},
// 	render: function(){
// 		var template = _.template($("#second-template").html());
// 		this.$el.html(template);
// 	}
// });
var MyRouter = Backbone.Router.extend({
	routes:{
		"foo/bar" : "test",
		"*action" : "func",
		// "show/5" : "show"
		"show/:id" : "show"
		// "" : "firstPage",
		// "first" : "firstPage",
		// "second" : "secondPage"
	},
	func : function(action){
		console.log(action);
	},
	test : function(p){
		console.log(p);
	},
	show : function(id){
		console.log("Show route with correct id : " + id);
		// model/view/event
	}
	// firstPage: function(){
	// 	// console.log("action performed");
	// 	new FirstView();
	// },
	// secondPage: function(){
	// 	new SecondView();
	// }
	
});
var router  = new MyRouter();
Backbone.history.start();
