/** REGISTER TEMPLATE **/
Template.register.events({
	'submit form': function(e){
		e.preventDefault();
		var userEmail = e.target.email.value;
		var userPassword = e.target.password.value;

		Accounts.createUser({email: userEmail, password: userPassword}, function(err){
			if(err){
				Session.set('registerErrorMessage', "Email has been taken");
			}else{
				Router.go('/create');
			}
		});
	}
});

Template.register.helpers({
	errorMessage: function(){
		return Session.get('registerErrorMessage');
	}
});

/** LOGIN TEMPLATE **/
Template.login.events({
	'submit form': function(e){
		e.preventDefault();
		var userEmail = e.target.email.value;
		var userPassword = e.target.password.value;

		console.log('login activity');
		Meteor.loginWithPassword(userEmail, userPassword, function(err){
			if(err){
				Session.set('loginErrorMessage', "Your email address or password is wrong!");
			}else{
				Router.go('/create');
			}
		});
	}
});

Template.login.helpers({
	errorMessage: function(){
		return Session.get('loginErrorMessage');
	}
});

/** INDEX TEMPLATE **/
Template.index.events({
	'click .logout': function(e){
		e.preventDefault();
		Meteor.logout(function(){
			Router.go('/');
		});
	}
});

Template.index.helpers({
	currentUserEmail: function(){
		return Meteor.user().emails[0].address;
	}
});