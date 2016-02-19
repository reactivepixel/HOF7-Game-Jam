angular.module("jam",['youtube-embed'])
  .controller("MainCtrl", function($scope,DataAccess) {
    $scope.projects = DataAccess.getProjects();
})
.service("DataAccess",function(){
  var projects = [
    {
      id:"blank",
      teamName: '[Blank]',
      projectTitle: 'Project U.S.O.R',
      githubLink: '#',
      downloadLink: '#',
      youTubeID: 'IY8_ucCmQbs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc turpis, volutpat id feugiat eu, auctor ac leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tortor dolor, rhoncus ut nisl quis, malesuada efficitur ligula',
      members: [
        {
          name: 'Joe Slater',
          role: 'Audio Engineering'
        },
        {
          name: 'Rebecca Carroll',
          role: 'Back-End Dev'
        },
        {
          name: 'Jimmy Johnson',
          role: 'Programming'
        },
      ]
    },
    {
      id:"blank",
      teamName: '[Blank]',
      projectTitle: 'Project U.S.O.R',
      githubLink: '#',
      downloadLink: '#',
      youTubeID: 'IY8_ucCmQbs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc turpis, volutpat id feugiat eu, auctor ac leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tortor dolor, rhoncus ut nisl quis, malesuada efficitur ligula',
      members: [
        {
          name: 'Joe Slater',
          role: 'Audio Engineering'
        },
        {
          name: 'Rebecca Carroll',
          role: 'Back-End Dev'
        },
        {
          name: 'Jimmy Johnson',
          role: 'Programming'
        },
      ]
    },
    {
      id:"blank",
      teamName: '[Blank]',
      projectTitle: 'Project U.S.O.R',
      githubLink: '#',
      downloadLink: '#',
      youTubeID: 'IY8_ucCmQbs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc turpis, volutpat id feugiat eu, auctor ac leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tortor dolor, rhoncus ut nisl quis, malesuada efficitur ligula',
      members: [
        {
          name: 'Joe Slater',
          role: 'Audio Engineering'
        },
        {
          name: 'Rebecca Carroll',
          role: 'Back-End Dev'
        },
        {
          name: 'Jimmy Johnson',
          role: 'Programming'
        },
      ]
    }
  ];


  this.getProjects = function () {
    return projects;
  }

});
