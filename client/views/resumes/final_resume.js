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
	skills: function(){
		return Session.get('resume').skills;
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
	// 'click #pdfGenerator': function(){
	// 	//var webshot = require('webshot');
	// 	Meteor.call('webshot');

	// }
	// 'click #pdfGenerator': function(){
	// 	var imgData = canvas.toDataURL('image/jpeg');
	// 	console.log('Report Image URL: '+imgData);
	// 	var doc = new jsPDF('landscape');

	// 	doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
	// 	doc.save('sample-file.pdf');
	// }
	'click #editBtn': function(){
		Session.set('resume', Resumes.findOne());
	},
	'click #pdfGenerator': function(){
        var HTML2PDF = function demoFromHTML() {
    var pdf = new jsPDF();
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#page-wrap')[0];

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#pdfGenerator': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    // margins = {
    //     top: 80,
    //     bottom: 60,
    //     left: 40,
    //     width: 520
    // };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    
    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
    });
};
        return HTML2PDF();

      }
	});