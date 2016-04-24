var SkillController = function($scope){
    $scope.navIsActive = "skills";
        $scope.options = {
             skin: {
    type: 'tron',
    width: 2,
    color: '#494B52',
    spaceWidth: 3
    },
                startAngle: 240,
                endAngle: 480,
                readOnly: true,
                size: 100,
                displayPrevious: true,
                trackWidth: 0,
                barWidth: 10,
                barColor: '#0af258',
                textColor: '#eee'
                } ; 
        
       //
        $scope.backend =[
            { 
              tecnologia:"ASP.NET",
              value: 80
            },
            { 
              tecnologia:"C#",
              value: 70
            },
            { 
              tecnologia:"SQL SERVER",
              value: 40
            },
            { 
              tecnologia:"PHP",
              value: 60,
            }
        ]
        
        $scope.frontend =[
            { 
              tecnologia:"HTML5",
              value: 90
            },
            { 
              tecnologia:"CSS",
              value: 80
            },
            { 
              tecnologia:"JAVASCRIPT",
              value:  60
            },
            { 
              tecnologia:"JQUERY",
              value: 80,
            }
        ]
        
        
       
        
        
};
app.controller('SkillsCtrl', SkillController );