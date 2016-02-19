angular.module("jam",['youtube-embed'])
  .controller("MainCtrl", function($scope,DataAccess) {
    $scope.projects = DataAccess.getProjects();
})
.service("DataAccess",function(){
  var projects = [

    {
      id:"guard",
      teamName: 'Guardians of the Realm',
      projectTitle: 'YaSuMi',
      githubLink: 'https://github.com/TjayCargle/YaSuMi.git',
      downloadLink: 'https://drive.google.com/file/d/0B80rXRuIDot2TDRhY1NoT2d5Q2s/view?usp=sharing',
      youTubeID: 'ZR6NieeT8D0',
      description: 'Cooperative puzzle game meant to be played alone or with a friend, solving puzzles in each world to move your ship to the next one. Each character is controlled by a joystick and have different abilities so they will need to work together to make it through the game. The controller is just two arcade joysticks, nothing else is needed, so CECO will be able to have small kids with all the varying levels of Cerebral Palsy help the small aliens on their earth vacation!',
      members: [
        {
          name: 'Vishwajeet Kale',
          role: 'Level Layouts/Presentation'
        },
        {
          name: 'Lexie Rood',
          role: 'Level Layouts/Presentation'
        },
        {
          name: 'Rusty Swain',
          role: 'Unity Gameplay Programming'
        },
        {
          name: 'TJay Cargle',
          role: 'Unity UI Programming'
        },
        {
          name: 'Nicolas Riley',
          role: 'Level and Character Assets/Textures/Level and Character Designs'
        },
        {
          name: 'Khoa Phan',
          role: 'Level Assets/Materials/Level Designs'
        },
        {
          name: 'John Hughes',
          role: 'Music and Sound Design'
        },
      ]
    },

    {
      id:"vow",
      teamName: 'Underrated Vow',
      projectTitle: 'Word Adventurez',
      githubLink: 'https://github.com/bearbos/HoFGameJam.git',
      downloadLink: 'https://drive.google.com/folderview?id=0BzDTL6kkM7d9OWtaRkU5RlVyMVk&usp=sharing_eid&ts=56c48658',
      youTubeID: 'Uwav8iGlmAk',
      description: 'Cooperative puzzle game meant to be played alone or with a friend, solving puzzles in each world to move your ship to the next one. Each character is controlled by a joystick and have different abilities so they will need to work together to make it through the game. The controller is just two arcade joysticks, nothing else is needed, so CECO will be able to have small kids with all the varying levels of Cerebral Palsy help the small aliens on their earth vacation!',
      members: [
        {
          name: 'Vishwajeet Kale',
          role: 'Level Layouts/Presentation'
        },
        {
          name: 'Lexie Rood',
          role: 'Level Layouts/Presentation'
        },
        {
          name: 'Rusty Swain',
          role: 'Unity Gameplay Programming'
        },
        {
          name: 'TJay Cargle',
          role: 'Unity UI Programming'
        },
        {
          name: 'Nicolas Riley',
          role: 'Level and Character Assets/Textures/Level and Character Designs'
        },
        {
          name: 'Khoa Phan',
          role: 'Level Assets/Materials/Level Designs'
        },
        {
          name: 'John Hughes',
          role: 'Music and Sound Design'
        },
      ]
    },


    {
      id:"left",
      teamName: 'Leftovers',
      projectTitle: 'Takeover',
      githubLink: 'https://drive.google.com/folderview?id=0B7ReMDLGCLolNWl2OUgyeE45c00&usp=sharing',
      downloadLink: 'https://drive.google.com/open?id=0B7ReMDLGCLolV29VNVA5aDVMZHc',
      youTubeID: '5XQUeDhWSPg',
      description: 'Robot third-person shooter, where the player is protecting the city from the opposing robot. The game was meant to give players who have disabilities to have the advantage in playing. This was done by the control scheme planned to use facial recognition and head movement and winking to shoot.',
      members: [
        {
          name: 'Desmon Fields',
          role: 'Developer'
        },
        {
          name: 'Mike Manahan',
          role: 'Developer'
        },
        {
          name: 'Christopher Gonzalez',
          role: 'Developer'
        },
        {
          name: 'Chad Fields',
          role: 'Artist'
        },
        {
          name: 'Daze Davison',
          role: 'Artist'
        },
        {
          name: 'Javier Tellez',
          role: 'Developer'
        },
      ]
    },



        {
          id:"yes",
          teamName: 'Yes, Kurtis',
          projectTitle: 'Fish Fish',
          githubLink: 'https://github.com/Masakurt/HoFPublicRepo.git',
          downloadLink: 'https://drive.google.com/folderview?id=0B3dh_oNafeeHUDlBbnh3MVdYMHc&usp=sharing',
          youTubeID: '8uVLmeJGwUs',
          description: 'Cooperative puzzle game meant to be played alone or with a friend, solving puzzles in each world to move your ship to the next one. Each character is controlled by a joystick and have different abilities so they will need to work together to make it through the game. The controller is just two arcade joysticks, nothing else is needed, so CECO will be able to have small kids with all the varying levels of Cerebral Palsy help the small aliens on their earth vacation!',
          members: [
            {
              name: 'Brittany Ball',
              role: 'Game Design'
            },
            {
              name: 'Noel Teros',
              role: 'Game Design'
            },
            {
              name: 'Courtney Stephens',
              role: 'Art'
            },
            {
              name: 'Chase Maldonado',
              role: 'Art'
            },
            {
              name: 'Christine Dietz',
              role: 'Sound Design'
            },
            {
              name: 'Kurtis Vernier',
              role: 'Programming'
            },
            {
              name: 'Ricky Martinez',
              role: 'Programming'
            },
          ]
        }
  ];


  this.getProjects = function () {
    return projects;
  }

});
