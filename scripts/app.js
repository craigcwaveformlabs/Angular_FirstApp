angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello World! This is the hello-world controller function in the mainCtrl!");
    };
  });
