var NavController = function($scope, $location){
  $scope.getClass = function (path) {
    console.log($location.path(),path);
  return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  
  };
  
};
app.controller('NavCtrl', NavController );