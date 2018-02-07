var RegisterModel = Backbone.Model.extend({
	default:{
		firstName : null,
		lastName: null,
		email:null,
		password:null,
		cpassword:null
	},
	validate: function(obj){
		var errors=[],
		inValid = false;
		if(obj.firstName==""){
			errors.push({type: 'firstName', msg:'First name should not be empty'});
			inValid=true;
		}
		  if(obj.lastName==""){
			errors.push({type: 'lastName', msg:'Last name should not be empty'});	
			inValid=true;
		}
		 if(obj.email=="" ){
			errors.push({type: 'email', msg:'Email should not be empty'});
			inValid=true;
		}
		 if(obj.password==""){
			errors.push({type: 'password', msg:'Password should not be empty'});
			inValid=true;
		}
		 if(obj.cpassword == "" || (obj.password!=obj.cpassword)){
			errors.push({type: 'cpassword', msg:'Confirm password should match password'});
			inValid=true;
		}
		if(inValid){
			this.trigger('failure',errors);
		}else{
			var registerModel = new RegisterModel();
			registerModel.set({
			firstName : $("#first-name").val(),
			lastName : $("#last-name").val(),
			email : $("#email").val(),
			password : $("#password").val(),
			cpassword:$("#cpassword").val()
		});
		this.trigger('success',registerModel);
		}
    }
});
var RegistrationView = Backbone.View.extend({
	initialize : function(){
		this.model.on('failure',this.renderError);
		this.model.on('success',this.renderDetails);
	},
	render: function () {
		var template = _.template($("#registration-template").html());
		this.$el.html(template);
	},
	events :{
		"click #js-submit" : "saveDetails"
	},
	saveDetails : function(){
		
		this.model.validate({
			firstName : this.$("#first-name").val(),
			lastName : this.$("#last-name").val(),
			email : this.$("#email").val(),
			password : this.$("#password").val(),
			cpassword:this.$("#cpassword").val()
		});
	},
	renderError :function(errors){
		for(var i=0;i<errors.length;i++){
			var currentDiv= errors[i].type;
			$("li").find('.'+currentDiv);
			$('.'+currentDiv+ ' .help-block').text((errors[i]).msg);
		}
	},
	renderDetails : function(newModel){
		var updatedView = new DetailsView({
			el : "#container",
			model : newModel
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