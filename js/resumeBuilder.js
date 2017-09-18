//bio information

let bio = {
    'name' : 'Nicole Irene',
    'role' : 'Front End Gladiator',
    'contacts' : {
          'mobile': '0123456789',
          'email': 'nicoleirene89@gmail.com', 
          'github': 'github.com/NicoleIrene',
          'twitter': '@NicoleIrene',
          'location': 'New York City',
    },

    'welcomeMessage': 'Some days, you just have to create your own sunshine.',
    'skills': ['HTML5', 'CSS3', 'JavaScript', 'Wordpress'],
    'biopic': 'images/me.jpg'
  };
  
//bio funtion to display information

bio.display=function(){
  let formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName);

  let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);

  let formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedMobile);
  $('#footerContacts').append(formattedMobile);

  let formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
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
  $('#footerContacts').append(HTMLlocation);

  let formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').prepend(formattedWelcomeMsg);

  let formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').prepend(formattedBioPic);

  if(bio.skills.length > 0) {
  $('header').append(HTMLskillsStart);

  let formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
  $('skills').append(formattedSkill);
  
  }


};
bio.display(); //end of bio function

//how to append HTMLskillsStart?


//education information

let education = {
      'schools': [{
        'name': 'Queens College at The City University of New York',
        'location': 'Flushing, NY',
        'degree': 'Bachelor of Arts',
        'majors': ['Urban Studies'],
        'dates': '2008-2013',
        'url': 'string (optional)'
      },{
        'name': 'Queens Coll at The City University of New York',
        'location': 'Flushing, NY',
        'degree': 'Bachelor of Arts',
        'majors': ['Urban Studies'],
        'dates': '2008-2013',
        'url': 'string (optional)'
      }
      ],

    'onlineCourses': [{
        'title': 'Front End Web Developer',
        'school': 'Udacity',
        'dates': 'May 2017 - Present',
        'url': 'string'
    }],

};

//education function to display information
education.display=function(){
  for (let x = 0; x < education.schools.length; x++) {
    $('#education').append(HTMLschoolStart);

    let formattedSchoolName = HTMLschoolStart.replace('%data%', education.schools[x].name);
   
    let formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[x].degree);
    
    let formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[x].majors);
    $('.education-entry:last').append(formattedMajors);

    let formattedDates = HTMLschoolDates.replace('%data%', education.schools[x].dates);
    $('.education-entry:last').append(formattedDates);


  }
  $('#education').append(HTMLonlineClasses);
  for (let x = 0; x < education.onlineCourses.length; x++) {
    $('#education').append(HTMLschoolStart);

  let onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[x].title);

  let onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[x].school);
    $('.education-entry:last').append(onlineTitle + onlineSchool);

  }
}
education.display();

// job history information
let work = {
  'jobs': [{
    'employer': 'Young Adult Institute', 
    'title': 'Counselor',
    'location': 'Queens, NY', 
    'dates': 'January 2014 - August 2014',
    'description': 'fill in later' 
  }],


  };

work.display=function() {
  for (x = 0; x < work.jobs.length; x++) {
    $('#workExperience').append(HTMLworkStart);

    let formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[x].employer);

    let formattedWorkTitle = HTMLworkTitle.replace('%data%', )
  }

}


