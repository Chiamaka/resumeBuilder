Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){
		return [Meteor.subscribe('resumes', Meteor.userId()), Meteor.subscribe('images')];
	}
});

Router.map(function(){
	this.route('/', {name: 'index'});

	this.route('/create', {name: 'createResume'});

	this.route('/final_resume', {name: 'resume'});

	this.route('/edit',{name: 'editResume'});
});