Meteor.publish('images', function(){
	return Images.find();
});

Meteor.publish('resumes', function(){
	return Resumes.find({owner: this.userId});
});