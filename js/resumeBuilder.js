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
display:function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedName, formattedRole);
  $("ul#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);
  bio.skills.forEach(bioSkills);
  $("ul#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  }
};

function bioSkills(item,index) {
  var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[index]);
  $("#skills").append(formattedHTMLskills);
}
bio.display(); //end of bio function

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
 // education function

function displayEducation() {
  for(x in education.schools) {
$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools[x].dates); 
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
$(".education-entry:last").append(formattedSchoolName + formattedDegree);
$(".education-entry:last").append(formattedMajors);
$(".education-entry:last").append(formattedDates);
$(".education-entry:last").append(formattedLocation);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
$(".education-entry:last").append(formattedOnlineDates);
$(".education-entry:last").append(formattedOnlineUrl);
  } 
 }
displayEducation();

// end of education function

// beginning of work function 

let work = {
  "jobs": [
  {
    "employer": "Udacity",
    "title": "Front End Web Developer",
    "location": "NYC",
    "dates": "2017",
    "description": "fill this in later"
  },
  {
    "employer": "Google",
    "title": "Data Analyst",
    "location": "NYC",
    "dates": "2016",
    "description": "fill this in later"
  }
 ]
};

//beginning of work function

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


//beginning of projects function 


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
    "images": ["images/flaminco.jpeg"]

  }
 ]
};

$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pageY;
console.log(logClicks(x,y));
});
