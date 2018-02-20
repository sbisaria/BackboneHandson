var RegisterModel = Backbone.Model.extend({
	default:{
		firstName : null,
		lastName: null,
		address:null,
		city:null,
		pin:null,
		age:null,
		gender:null,
		email:null,
		mobile1:null,
		mobile2:null,
		country:null,
		nationality:null,
		password:null,
		cpassword:null
	},
	validate: function(obj){
		var errors = [],
		inValid = false,
		emailPattren = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(obj.firstName == ""){
			errors.push({name: 'firstName', msg:'First name should not be empty'});
			inValid = true;
		}
		if(obj.lastName == ""){
			errors.push({name: 'lastName', msg:'Last name should not be empty'});
			inValid = true;
		}
		if(obj.address == ""){
			errors.push({name: 'address', msg:'Address should not be empty'});
			inValid = true;
		}
		if(obj.city == ""){
			errors.push({name: 'city', msg:'City should not be empty'});
			inValid = true;
		}
		if(obj.pin == ""){
			errors.push({name: 'pin', msg:'Pin should not be empty'});
			inValid = true;
		}
		if(obj.age == ""){
			errors.push({name: 'age', msg:'Age should not be empty'});
			inValid = true;
		}
		if(obj.gender == ""){
			errors.push({name: 'gender', msg:'Gender should not be empty'});
			inValid = true;
		}
		if(!emailPattren.test(obj.email)){
			errors.push({name: 'email', msg:'Email should be valid'});
			inValid = true;
		}
		if(obj.email == ""){
			errors.push({name: 'email', msg:'Email should not be empty'});
			inValid = true;
		}
		if(obj.mobile1 == ""){
			errors.push({name: 'mobile1', msg:'Mobile 1 should not be empty'});
			inValid = true;
		}
		if(obj.mobile2 == ""){
			errors.push({name: 'mobile2', msg:'Mobile 2 should not be empty'});
			inValid = true;
		}
		if(obj.country == ""){
			errors.push({name: 'country', msg:'Country should not be empty'});
			inValid = true;
		}
		if(obj.nationality == ""){
			errors.push({name: 'nationality', msg:'Nationality should not be empty'});
			inValid = true;
		}
		if(obj.password == ""){
			errors.push({name: 'password', msg:'Password should not be empty'});
			inValid = true;
		}
		if(obj.cpassword == ""){
			errors.push({name: 'cpassword', msg:'Confirm password should not be empty'});
			inValid = true;
		}
		if(obj.password != obj.cpassword){
			errors.push({name: 'cpassword', msg:'Confirm password should match password'});
			inValid = true;
		}
		if(inValid){
			this.trigger('failure',errors);
		}else{
			this.set({
				firstName : $("#first-name").val(),
				lastName : $("#last-name").val(),
				address : $("#address").val(),
				city : $("#city").val(),
				pin : $("#pin").val(),
				age : $("#age").val(),
				gender : $("#gender").val(), 
				email : $("#email").val(),
				mobile1 : $("#mobile1").val(),
				mobile2 : $("#mobile2").val(),
				country : $("#country").val(),
				nationality : $("#nationality").val(),
				password : $("#password").val(),
				cpassword:$("#cpassword").val()
			});
			this.trigger('success',this);
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
			address : this.$("#address").val(),
			city : this.$("#city").val(),
			pin : this.$("#pin").val(),
			age : this.$("#age").val(),
			gender : this.$("#gender").val(),
			email : this.$("#email").val(),
			mobile1 : this.$("#mobile1").val(),
			mobile2 : this.$("#mobile2").val(),
			country : this.$("#country").val(),
			nationality : this.$("#nationality").val(),
			password : this.$("#password").val(),
			cpassword:this.$("#cpassword").val()
		});
	},
	renderError :function(errors){
		$('.error-box').empty();
		errors.forEach(function(element){
			var currentDiv = element.name,
			    errEle = document.createElement('h2');
			$(errEle).addClass('has-error').text('*' + element.msg);
			$('.' + currentDiv).empty().append(errEle);
		});
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