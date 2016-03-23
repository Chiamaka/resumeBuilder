Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){
		return [Meteor.subscribe('resumes', Meteor.userId())];
	}
});

Router.map(function(){
	this.route('/', {name: 'index'});

	this.route('/create', {name: 'createResume'});
});