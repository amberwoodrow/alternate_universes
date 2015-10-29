angular.module('nodeTodo', [])

.controller('mainController', function($scope, $http) {

  $scope.formData = {};
  $scope.todoData = {};

    // Get all todos
  $http.get('/alternate_universes')
    .success(function(data) {
      $scope.todoData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
});