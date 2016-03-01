angular.module("jam", ['youtube-embed'])
  .controller("MainCtrl", function($scope, DataAccess) {
    $scope.projects = DataAccess.getProjects();
  })
  .service("DataAccess", function() {
    var projects = [

      {
        id: "guard",
        teamName: 'Guardians of the Realm',
        projectTitle: 'YaSuMi',
        githubLink: 'https://github.com/TjayCargle/YaSuMi.git',
        downloadLink: 'https://drive.google.com/file/d/0B80rXRuIDot2TDRhY1NoT2d5Q2s/view?usp=sharing',
        youTubeID: 'ZR6NieeT8D0',
        description: 'Cooperative puzzle game meant to be played alone or with a friend, solving puzzles in each world to move your ship to the next one. Each character is controlled by a joystick and have different abilities so they will need to work together to make it through the game. The controller is just two arcade joysticks, nothing else is needed, so CECO will be able to have small kids with all the varying levels of Cerebral Palsy help the small aliens on their earth vacation!',
        members: [{
          name: 'Vishwajeet Kale',
          role: 'Level Layouts/Presentation'
        }, {
          name: 'Lexie Rood',
          role: 'Level Layouts/Presentation'
        }, {
          name: 'Rusty Swain',
          role: 'Unity Gameplay Programming'
        }, {
          name: 'TJay Cargle',
          role: 'Unity UI Programming'
        }, {
          name: 'Nicolas Riley',
          role: 'Level and Character Assets/Textures/Level and Character Designs'
        }, {
          name: 'Khoa Phan',
          role: 'Level Assets/Materials/Level Designs'
        }, {
          name: 'John Hughes',
          role: 'Music and Sound Design'
        }, ]
      },

      {
        id: "vow",
        teamName: 'Underrated Vow',
        projectTitle: 'Word Adventurez',
        githubLink: 'https://github.com/bearbos/HoFGameJam.git',
        downloadLink: 'https://drive.google.com/folderview?id=0BzDTL6kkM7d9OWtaRkU5RlVyMVk&usp=sharing_eid&ts=56c48658',
        youTubeID: 'Uwav8iGlmAk',
        description: '"Word Adventurez" is an educational side scroller adventure game. It is designed around the theme of "It\'s okay to make mistakes." We have incorporated and built a program that is suited and designed around the comfort level of the player. Knowing cerebral palsy affects everyone differently we have allowed the settings and difficulty of the level to be changed to meet the standards of the player. The calibration will represent this theme by allowing to other interact by tilting the tablet or through touch. The large buttons and simple art style will allow an easy visualization and large target for those who have Cerebral Palsy to comprehend and react accordingly to the stimuli. ',
        members: [{
          name: 'Jonathan Long',
          role: 'Programmer'
        }, {
          name: 'Phillip Simpson',
          role: 'Programmer'
        }, {
          name: 'Blaine Sprague',
          role: 'Programmer'
        }, {
          name: 'Austen Seeberg',
          role: 'Artist'
        }, {
          name: 'Gilberto Vacelle',
          role: 'Artist'
        }, {
          name: 'Frank Ruiz',
          role: 'Audio Engineer'
        }, {
          name: 'Elliot Battle',
          role: 'Designer'
        }, ]
      },
      {
        id: "left",
        teamName: 'Leftovers',
        projectTitle: 'Takeover',
        githubLink: 'https://drive.google.com/folderview?id=0B7ReMDLGCLolNWl2OUgyeE45c00&usp=sharing',
        downloadLink: 'https://drive.google.com/open?id=0B7ReMDLGCLolV29VNVA5aDVMZHc',
        youTubeID: '5XQUeDhWSPg',
        description: 'Robot third-person shooter, where the player is protecting the city from the opposing robot. The game was meant to give players who have disabilities to have the advantage in playing. This was done by the control scheme planned to use facial recognition and head movement and winking to shoot.',
        members: [{
          name: 'Desmon Fields',
          role: 'Developer'
        }, {
          name: 'Mike Manahan',
          role: 'Developer'
        }, {
          name: 'Christopher Gonzalez',
          role: 'Developer'
        }, {
          name: 'Chad Fields',
          role: 'Artist'
        }, {
          name: 'Daze Davison',
          role: 'Artist'
        }, {
          name: 'Javier Tellez',
          role: 'Developer'
        }, ]
      },



      {
        id: "yes",
        teamName: 'Yes, Kurtis',
        projectTitle: 'Fish Fish',
        githubLink: 'https://github.com/Masakurt/HoFPublicRepo.git',
        downloadLink: 'https://drive.google.com/folderview?id=0B3dh_oNafeeHUDlBbnh3MVdYMHc&usp=sharing',
        youTubeID: '8uVLmeJGwUs',
        description: '',
        members: [{
          name: 'Brittany Ball',
          role: 'Game Design'
        }, {
          name: 'Noel Teros',
          role: 'Game Design'
        }, {
          name: 'Courtney Stephens',
          role: 'Art'
        }, {
          name: 'Chase Maldonado',
          role: 'Art'
        }, {
          name: 'Christine Dietz',
          role: 'Sound Design'
        }, {
          name: 'Kurtis Vernier',
          role: 'Programming'
        }, {
          name: 'Ricky Martinez',
          role: 'Programming'
        }, ]
      },



      {
        id: "proj",
        teamName: 'USOR',
        projectTitle: 'Operation U.S.O.R',
        githubLink: 'https://github.com/bjsvochak/hof16.git',
        downloadLink: 'https://drive.google.com/file/d/0B1Jwrx7FeCR0Vld2WDhkNUE2Mnc/view?usp=sharing',
        screenImg: 'img/ship.jpg',
        description: 'Operation U.S.O.R (Unity, Space, Opera, Rail) is a rail based space shooter. The game focuses on ease of use with one button mechanics and the use of VR headsets. The target audience is Gamers with certain disabilities that hinder physical movement and dexterity.',
        members: [{
          name: 'Andrew Harvey ',
          role: 'Game Design'
        }, {
          name: 'Wei-Wei Lin',
          role: 'Game Design'
        }, {
          name: 'Gerard Vega',
          role: 'Game Dev'
        }, {
          name: 'Brandon Svochak',
          role: 'Game Dev'
        }, {
          name: 'Mike Naulls',
          role: 'Game Dev'
        }, {
          name: 'Omar Maldonado',
          role: 'Audio'
        }, {
          name: 'Zefang lin',
          role: 'Game Art'
        }, {
          name: 'Jose Castillo',
          role: 'Game Art'
        }, {
          name: 'Levi Eads',
          role: 'Game Art'
        }, {
          name: 'Steven Durr',
          role: 'Game Art'
        }, ]
      }
    ];


    this.getProjects = function() {
      return projects;
    }

  });
