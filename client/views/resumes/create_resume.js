AutoForm.hooks({
	createResume:{
		onSuccess: function(operation, result, argument) {
			console.log("hello from onSuccess....");
			Router.go('/');
		},
		onError: function(formType, error) {
			console.log(error);
		}
	}
})