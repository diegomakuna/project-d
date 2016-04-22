var SkillController = function($scope){
        $scope.value = 20;
        $scope.options = {
            readOnly: true,
            size: 100,
            displayPrevious: true,
            bgColor: '#2C3E50',
            trackWidth: 0,
            barWidth: 10,
            barColor: '#0af258',
            textColor: '#eee'
        };
};
app.controller('SkillsCtrl', SkillController );