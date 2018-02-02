var RegisterModel = Backbone.Model.extend({
	default:{
		firstName : null,
		lastName: null,
		email:null,
		password:null,
		cpassword:null
	}
});
var RegistrationView = Backbone.View.extend({
	initialize : function(){
	},
	render: function () {
		var template = _.template($("#registration-template").html());
		this.$el.html(template);
	},
	events :{
		"click #js-submit" : "saveDetails"
	},
	saveDetails : function(){
		this.model.set({
			firstName : this.$("#first-name").val(),
			lastName : this.$("#last-name").val(),
			email : this.$("#email").val(),
			password : this.$("#password").val(),
			cpassword:this.$("#cpassword").val()
		});
		this.renderDetails();
	},
	renderDetails : function(){
		var self = this;
		var updatedView = new DetailsView({
			el : "#container",
			model : self.model
		}).render();
	}
});
var DetailsView = Backbone.View.extend({
	initialize : function(){
	},
	render: function() {
	  	var template = _.template($("#detail-template").html());
		this.$el.html(template(this.model.toJSON()));
	}
});
$(document).ready(function(){
	var defaultView = new RegistrationView({
		el : "#container",
		model : new RegisterModel
	}).render();
});