Template.editResume.helpers({
	selectedResume: function(){
		var id=Meteor.userId();
		return Resumes.findOne({owner: id});
	}
});

AutoForm.hooks({
	editResume: {
		onSuccess: function(operation, result, argument) {
			console.log("hello from onSuccess....");
			Router.go('/final_resume');
		},
		onError: function(formType, error) {
			console.log(error);
		}
	}
});