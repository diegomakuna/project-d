var SkillController = function($scope){
        $scope.value = 65;
        $scope.options = {
            displayPrevious: true,
            barCap: 25,
            trackWidth: 30,
            barWidth: 20,
            trackColor: 'rgba(255,0,0,.1)',
            prevBarColor: 'rgba(0,0,0,.2)',
            textColor: 'rgba(255,0,0,.6)'
        };
};
app.controller('SkillsCtrl', SkillController );