/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append("Aakash");*/



var bio = {
	"name": "Aakash Sharan",
	"role": "Web Developer",
	"welcomeMessage": "Hello World",
	"contacts": {
		"mobile": "444-333-8899",
		"email": "example@johnynoob.com",
		"location": "Dallas",
		"github": "aakashsharan"
	},
	"bioPic": "https://dl.dropboxusercontent.com/u/51990736/IMG_1294.jpg",
	"skills": ["java", "javascript", "HTML", "CSS", "JQuery", "JSP", "Servlet"]
}

var work = {
	"jobs": [
				{
					"employer": "Micromax",
					"title": "Software Engineer",
					"location": "Gurgaon",
					"dates": "2010 - 2011",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat."
				},

				{
					"employer": "TAISTech",
					"title": "Programmer Analyst",
					"location": "Dallas",
					"dates": "2013 - Present",
					"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat."
				}
			]
}

var projects = {
	"projects": [
					{
						"title": "Lorem ipsum dolor sit amet",
						"dates": "2010-2011",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat.",
						"images": ["https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg", "https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg"]
					},

					{
						"title": "Lorem ipsum dolor sit amet",
						"dates": "2011-2012",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat.",
						"images": ["https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg"]
					},

					{
						"title": "Lorem ipsum dolor sit amet",
						"dates": "2012-2013",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat.",
						"images": ["https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg"]
					},

					{
						"title": "Lorem ipsum dolor sit amet",
						"dates": "2013-2014",
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iure quod consequatur quasi veritatis delectus, eum provident consectetur sit! Nobis perspiciatis tenetur doloribus temporibus aut quidem consequatur consectetur veniam repellat.",
						"images": ["https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg", "https://dl.dropboxusercontent.com/u/51990736/UdacityProject1/LearnImage.jpg"]
					}

				]
}


var education = {
	"schools" : [
		{
			"name": "SRM University",
			"location": "Chennai",
			"degree": "Bachelors",
			"majors": ["Electronics", "Communications"],
			"dates": "2006-2010",
			"url": "http://www.srmuniv.ac.in/index.html"
		},

		{
			"name": "Brown University",
			"location": "Providence",
			"degree": "Masters",
			"majors": ["Computer Engineering", "Electrical Engineering"],
			"dates": "2011-2013",
			"url": "https://www.brown.edu/"
		}

	]
,
	"onlineCourses" :[
		{
			"title": "Front End",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com"
		},

		{
			"title": "Business",
			"school": "Udacity",
			"dates": "2013",
			"url": "https://www.udemy.com"
		}
	]
}

bio.nameChanger =  function(oldName) {

    var namesArray = oldName.trim().split(" ");
    var nameFirst = namesArray[0];
    var nameSecond = namesArray[1];

    nameSecond = nameSecond.toUpperCase();
    var name1 = nameFirst.slice(0,1).toUpperCase();
    var name2 = nameFirst.slice(1).toLowerCase();

    nameFirst = name1 + name2;

    var finalName = nameFirst + " " + nameSecond;



    // Don't delete this line!
    //console.log(finalName);
    return finalName;
}


bio.display = function() {
    "use strict";
	var myName = bio.nameChanger("Aakash Sharan");

	var formattedName = HTMLheaderName.replace("%data%", myName);
	var formattedRole = HTMLheaderRole.replace("%data%", "web developer");

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	if (typeof bio.contacts.mobile !== "undefined") {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
	}

	if (typeof bio.contacts.email !== "undefined") {
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
	}

	if (typeof bio.contacts.twitter !== "undefined") {
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
	}

	if (typeof bio.contacts.github !== "undefined") {
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
	}

	if (typeof bio.contacts.blog !== "undefined") {
		var formattedBlog = HTMLgithub.replace("%data%", bio.contacts.blog);
		$("#topContacts").append(formattedBlog);
	}

	if (typeof bio.contacts.location !== "undefined") {
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
	}

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcMsg);


	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	/*$("#header:last").append('<hr/>');*/
}




work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	$(".work-entry:last").append('<hr/>');
}



$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


work.locationizer = function (work_obj) {
    var locationArray = [];
    for (var job in work_obj.jobs) {

    		var newLocation = work_obj.jobs[job].location;
            locationArray.push(newLocation);
    }
    return locationArray;
}

// console.log(locationizer(work));



bio.inName = function(name) {
	nameArray = name.trim().split(" ");
	// console.log(nameArray);
	nameSecond= nameArray[1].toUpperCase();

	name1 = nameArray[0].slice(0,1).toUpperCase();
	name2 = nameArray[0].slice(1);
	nameFirst = name1 + name2;

	return nameFirst + " " + nameSecond;
}

// $("#main").append(internationalizeButton);

// console.log(inName("aakash sharan"));

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
	$(".project-entry:last").append('<hr/>');

}

education.display = function() {

 	for(var school in education.schools) {
 		$("#education").append(HTMLschoolStart);

 		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
 		// $(".education-entry").append(formattedName);

 		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 		// $(".education-entry").append(formattedDegree);

 		var finalSchool = formattedName + formattedDegree;
 		$(".education-entry:last").append(finalSchool);

 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 		$(".education-entry:last").append(formattedDates);

 		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 		$(".education-entry:last").append(formattedLocation);

 		if (education.schools[school].majors.length > 0) {
 			for (var major in education.schools[school].majors) {
 				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
 				$(".education-entry:last").append(formattedMajor);
 			}
 		}
 	}

 	if (education.onlineCourses.length > 0) {

 		$(".education-entry:last").append('<br><br>');
 		$(".education-entry:last").after(HTMLonlineClasses);

 		for (course in education.onlineCourses) {
	 		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	 		// $("#education h3:last").append(formattedTitle);

	 		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	 		// $("#educationTags").append(formattedSchool);

	 		var finalSchool = formattedTitle + formattedSchool;
	 		$("#education h3:last").append(finalSchool);

	 		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	 		$("#education h3:last").append(formattedDates);

	 		/*var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	 		$("#education h3:last").append(formattedURL);*/
	 		$("#education h3:last").append('<br>');
 		}

 	}

 	$("#education h3:last").append('<hr/>');

 }
 // lets connect

bio.showContactDetails = function() {
	if (typeof bio.contacts.mobile !== "undefined") {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
	}

	if (typeof bio.contacts.email !== "undefined") {
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
	}

	if (typeof bio.contacts.twitter !== "undefined") {
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
	}

	if (typeof bio.contacts.github !== "undefined") {
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGithub);
	}

	if (typeof bio.contacts.location !== "undefined") {
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);
	}
}

bio.inName(bio.name);
bio.display();
work.display();
projects.display();
education.display();
bio.showContactDetails();

$("#mapDiv").append(googleMap);
