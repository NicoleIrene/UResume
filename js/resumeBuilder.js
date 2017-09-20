//bio information

var bio = {
  "name" : "Nicole Irene",
  "role" : "Front End Gladiator",
  "contacts" : {
    "mobile": "718-555-5555",
    "email": "nicoleirene89@gmail.com", 
    "github": "github.com/NicoleIrene",
    "twitter": "@NicoleIrene",
    "location": "New York City"
  },
  "welcomeMessage": "Some days, you just have to create your own sunshine.",
  "skills": [
  "HTML5", "CSS3", "JavaScript", "Wordpress"
    ],
  "biopic": "images/me.jpg",

//bio function to display information

"display":function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);


var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);


var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);


var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if (bio.skill.length > 0) {
  $("#header").append(HTMLskillStart);

  for (x = 0; x < bio.skills.length; x++) {
    var formattedSkills = HTMLskills.replace("%data", bio.skills[x]);
    $("#skills").append(formattedSkills);
  }
  }
}
};

//education information 

var education = {
  "schools": [
  {
    "name": "Queens College at The City University of New York",
    "location": "Flushing, NY",
    "degree": "Bachelor of Arts",
    "majors": ["Urban Studies"],
    "dates": "2013",
    "url": "http://www.qc.cuny.edu/Pages/home.aspx"
  },  
  {
    "name": "Queens College at The City University of New York",
    "location": "Flushing, NY",
    "degree": "Bachelor of Arts",
    "majors": ["Urban Studies"],
    "dates": "2013",
    "url": "http://www.qc.cuny.edu/Pages/home.aspx"
  }
 ],

  "onlineCourses": [
    {
    "title": "Front End Web Developer",
    "school": "Udacity",
    "dates": "May 2017 - Present",
    "url": "string"
  }
 ]
};
 // education function to display education info

function displayEducation() {
  for(school in education.schools) {
$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates); 
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
$(".education-entry:last").append(formattedSchoolName + formattedDegree);
$(".education-entry:last").append(formattedMajors);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedLocation);
} 
$("#education").append(HTMLonlineClasses);
  for(course in education.onlineCourses) {
$("#education").append(HTMLschoolStart);
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
$(".education-entry:last").append(formattedOnlineDates);
$(".education-entry:last").append(formattedOnlineUrl);
  }

 }
displayEducation(); // end of education function

// work information  

let work = {
  "jobs": [
  {
    "employer": "Udacity",
    "title": "Front End Web Developer",
    "location": "New York, NY",
    "dates": "2017",
    "description": "fill this in later"
  },
  {
    "employer": "Google",
    "title": "Data Analyst",
    "location": "Miami, FL",
    "dates": "2016",
    "description": "fill this in later"
  },
    {
    "employer": "Uncubed",
    "title": "Cyber Security Specialist",
    "location": "Miami, FL",
    "dates": "2016",
    "description": "fill this in later"
  }
 ]
};

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
console.log(locationizer(work));

//work function

function displayWork() {
  for(job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedWorkLocation);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$('.work-entry:last').append(formattedDescription); 
 }
}

displayWork(); //end of work function 


//projects information


let projects = {
  "projects": [
  {
    "title": "Project 1",
    "dates": "2017",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus eos voluptas illo voluptatum autem minus sint aspernatur adipisci sunt tempora, delectus officia optio suscipit. Neque dolor nobis enim, repudiandae?",
    "images": ["images/crab.jpeg"]
  },
  {
    "title": "Project 2",
    "dates": "2017",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptate quae praesentium quis dicta possimus sequi aliquid. Nulla sequi maxime voluptatem hic, quo sit voluptate, doloribus optio, sunt quaerat, assumenda.",
    "images": ["images/flamincos.jpeg"]

  }
 ]
};

//projects function
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    if (projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);

      }
    }    
  }
}
projects.display();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " "+name[1];
}
$("#main").append(internationalizeButton);

$('#mapDiv').append(googleMap);