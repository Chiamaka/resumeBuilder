Template.resume.helpers({
	entry: function(){
		Session.set('resume', Resumes.findOne());
		return Session.get('resume');
	},
	certification: function(){
		return Session.get('resume').education.certification;
	},
	workExperience: function(){
		return Session.get('resume').workExperience;
	},
	workExperienceCompany: function(){
		// if(Session.get('resume').workExperience.length > 1){
		// 	console.log("more than 1");
		// 	workExperience = Session.get('resume').workExperience
		// 	workExperience.forEach(function(work){
		// 	return work.company;
		// });
		// }else{
		// 	return 
		// }
	},
	
	leadershipExperience: function(){
		return Session.get('resume').leadershipExperience;
	},
	personalData: function(){
		return Session.get('resume').personalData;
	}
});

Template.resume.events({
	'click #pdfGenerator': function(){
		//var webshot = require('webshot');
		Meteor.call('webshot');

	}
});