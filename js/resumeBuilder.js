//Bio Information-------------------

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

//Bio Function-----------------------

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

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (x = 0; x < bio.skills.length; x++) {
    var formattedSkills = HTMLskills.replace("%data", bio.skills[x]);
    $("#skills").append(formattedSkills);
      }
    }
  }
};

//Education Information------------------

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
    "url": "https://www.udacity.com/"
  }
 ],
 // Education Function--------------------

"display":function() {
  for (x = 0; x < education.schools.length; x++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
    var formattedDegreeName = formattedDegree + formattedSchoolName; 
    $(".education-entry:last").append(formattedDegreeName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates); 
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
    $(".education-entry:last").append(formattedMajors);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
    $(".education-entry:last").append(formattedLocation);
}
  for (x = 0; x < education.onlineCourses.length; x++) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
    var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineTitleSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
    $(".education-entry:last").append(formattedOnlineUrl);
    }
  } 
};

// Work Information--------------------

var work = {
  "jobs": [
  {
    "employer": "Udacity",
    "title": "Front End Web Developer",
    "location": "New York, NY",
    "dates": "2017",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus sed veritatis. Harum quas illo veniam nobis, impedit necessitatibus libero optio suscipit, voluptates, inventore eos facere quo, eius praesentium dolor!"
  },
  {
    "employer": "Google",
    "title": "Data Analyst",
    "location": "Miami, FL",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ad harum eum, atque maiores ratione, reprehenderit optio omnis hic commodi. Ipsum ipsa, impedit odit aut sit vero tempora ratione dignissimos."
  },
    {
    "employer": "Uncubed",
    "title": "Cyber Security Specialist",
    "location": "Miami, FL",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deleniti id facere explicabo iure odio quam illum et aliquid est quo consequatur autem, necessitatibus officia! Enim iusto, laudantium unde est."
  }
 ],

//Work Function-----------------------

"display": function() {
  for (x = 0; x < work.jobs.length; x++) {
    $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
  var formattedTitleEmployer = formattedTitle + formattedEmployer;
  $(".work-entry:last").append(formattedTitleEmployer);
  
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
  $(".work-entry:last").append(formattedWorkLocation);
  
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
  $(".work-entry:last").append(formattedDates);
  
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
  $('.work-entry:last').append(formattedDescription); 
    }  
  }
};

//Project Information-------------------

var projects = {
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
 ],

//Project Function--------------------

"display": function() {
  for (x = 0; x <projects.projects.length; x++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[x].images.length > 0) {
      for (y = 0; y < projects.projects[x].images.length; y++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].images[y]);
        $(".project-entry:last").append(formattedImage);

        }
      }
    }
  }
};
    
//Calling display:functions()--------

bio.display();
education.display();
work.display();
projects.display();

//Calling work Locations for Google Map------

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}
console.log(locationizer(work));
$('#mapDiv').append(googleMap);

// Internationalize resume button-------

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " "+name[1];

}

$("#main").append(internationalizeButton);