angular.module("todoListApp", [])

  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello World! This is the hello-world controller function in the mainCtrl!");
    };

    $scope.todos = [
      {"name": "clean the house"},
      {"name": "water the dog"},
      {"name": "feed the lawn"},
      {"name": "pay bills"},
      {"name": "run"},
      {"name": "swim"},
    ];

  });
