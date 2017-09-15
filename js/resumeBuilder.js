/*Start of Resume 
bio information*/
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
  $('#footerContacts').append(HTMLlocation);
}
bio.display(); //end of bio function

//education information

let education = {
      'schools': [{
        'name': 'Queens College at The City University of New York',
        'location': 'Flushing, NY',
        'degree': 'Bachelor of Arts',
        'majors': ['Urban Studies'],
        'dates': '2008-2013',
        'url': string (optional)
      }],

    'onlineCourses': [{
        'title': 'Front End Web Developer',
        'school': 'Udacity',
        'dates': 'May 2017 - Present',
        'url': string
    }],

};

//education function to display information
education.display=function(){
  let formattedName

}
education.display();
