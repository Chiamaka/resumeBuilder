//var phantomjs = Npm.require('phantomjs');
// var webshot = Npm.require('webshot');

Meteor.methods({
	'webshot': function(){
			var phantomjs = Npm.require('phantomjs')
			webshot('htpp://google.com', '/public/google.png',function(err){
			if(err){
				console.log(err);
			}else{
				console.log("done");
			}
		});
	}
});