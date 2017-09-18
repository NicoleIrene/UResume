//bio information

let bio = {
  "name" : "Nicole Irene",
  "role" : "Front End Gladiator",
  "contacts" : {
    "mobile": "0123456789",
    "email": "nicoleirene89@gmail.com", 
    "github": "github.com/NicoleIrene",
    "twitter": "@NicoleIrene",
    "location": "New York City",
  },
  "welcomeMessage": "Some days, you just have to create your own sunshine.",
  "skills": ["HTML5", "CSS3", "JavaScript", "Wordpress"],
  "biopic": "images/me.jpg"
};

//bio function to display information

bio.display=function(){
  let formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName);

  let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);

  let formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedMobile);
  $('#footerContacts').append(formattedMobile);

  let formattedEmail = HTMLemail.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedEmail);
  $('#footerContacts').append(formattedEmail);

  let formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  $('#topContacts').append(formattedGithub);
  $('#footerContacts').append(formattedGithub);

  let formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  $('#topContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedTwitter);

  let formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts').append(formattedLocation);
  $('#footerContacts').append(formattedLocation);
};

bio.display(); //end of bio function

if(bio.skills.length > 0) {
$("header").append(HTMLskillsStart);

let formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("skills").append(formattedSkill);
};

let education = {
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

for(job in work.jobs) {
$("#workExperience").append(HTMLworkStart);

let formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
let formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
let formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);

 }

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
