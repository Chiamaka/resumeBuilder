Resumes = new Meteor.Collection('resumes');

Resumes.allow({
	insert: function(){
		return true;
	}
});
Resumes.attachSchema(new SimpleSchema({
	emailAddress: {
		type: String,
		label: "Email Address",
		max: 200
	},
	phoneNumber: {
		type: String,
		label: "Phone Number"
	},
	twitterHandle: {
		type: String,
		label: "Twitter Handle",
		optional: true
	},
	linkedInName: {
		type: String,
		label: "LinkedIn Name"
	},
	homeAddress: {
		type: String,
		label: "Home Address"
	},
	personalSummary: {
		type: String,
		label: "Personal Summary",
		max: 500
	},
	education: {
		type: Object
	},
	'education.secondarySchool': {
		type: String
	},
	'education.yearOfGraduation': {
		type: String
	},
	'education.certification': {
		type: Array
	},
	'education.certification.$' :{
		type: Object
	},
	'education.certification.$.certificate': {
		type: String
	},
	'education.certification.$.year': {
		type: String
	},
	'education.university': {
		type: String
	},
	'education.yearOfGraduation': {
		type: String
	},
	'education.courseOfStudy': {
		type: String
	},
	'education.yearOfGraduation': {
		type: String
	},
	'education.MSC': {
		type: Array,
		optional: true
	},
	'education.MSC.$' :{
		type: Object,
		label: "MSC? Leave empty if not applicable to you"
	},
	'education.MSC.$.courseOfStudy': {
		type: String
	},
	'education.MSC.$.year': {
		type: String
	},
	'education.workExperience':{
		type: Array,
		optional: true
	},
	'education.workExperience.$':{
		type: Object
	},
	'education.workExperience.$.company':{
		type: String
	},
	'education.workExperience.$.position':{
		type: String
	},
	'education.workExperience.$.timeSpent':{
		type: String
	},
	'education.workExperience.$.roles':{
		type: String
	},
	'education.leadershipExperience':{
		type: Array,
		optional: true
	},
	'education.leadershipExperience.$':{
		type: Object
	},
	'education.leadershipExperience.$.position':{
		type: String
	},
	'education.leadershipExperience.$.yearHeld':{
		type: String
	},
	'education.leadershipExperience.$.roles':{
		type: String
	},
	personalData: {
		type: Array
	},
	'personalData.$': {
		type: Object
	},
	'personalData.$.sex': {
		type: String
	},
	'personalData.$.age': {
		type: String
	},
	'personalData.$.maritalStatus': {
		type: String
	},
	'personalData.$.nationality': {
		type: String
	},
	'personalData.$.stateOfOrigin': {
		type: String
	},
	'personalData.$.religion': {
		type: String
	},
	'personalData.$.languages': {
		type: String
	},
	'personalData.hobbies.$': {
		type: Array
	},
	'personalData.hobbies.$': {
		type: Object
	},
	'personalData.hobbies.$.hobbies': {
		type: String
	},

	// 'workExperience.$.timeSpent':{
	// 	type: String
	// },
	// 'workExperience.$.roles':{
	// 	type:String
	// },
	owner: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		autoValue: function(){
			if(this.isInsert){
				return Meteor.userId();
			}
		}
	}
}));