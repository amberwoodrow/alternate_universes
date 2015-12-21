angular.module('alternateUniverses', [])

.controller('mainController', function($scope, $http) {

  $scope.formData = {};
  $scope.alternateUniverseData = {};
  
    // Get all alternateUniverses
  $http.get('/')
    .success(function(data) {
      // $scope.alternateUniverseData;
      // console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });


    // Delete a alternateUniverse
  $scope.deleteUniverse = function(alternateUniverseID) {
    $http.delete('/' + alternateUniverseID)
      .success(function(data) {
        $scope.alternateUniverseData = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Create a new alternateUniverse
  $scope.createUniverse = function() {
    // must contain the word universe
    $http.post('/', $scope.alternateUniverseData)
    .success(function(data) {
      console.log(data);
      $scope.gifs = data;
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  };

});

// universe has many gifs
// render errors
// use directives
// if universe exists get it and it's description and tell the user the universe already exists

function unique(str) {

}

