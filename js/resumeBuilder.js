
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
    'display': function () {

    }
  };
  



  let formattedName = HTMLheaderName.replace('%data', bio.name);
  $('#header').prepend(formattedName);

  let formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('#header').prepend(formattedRole);

  let formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $()
