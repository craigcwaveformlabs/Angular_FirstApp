angular.module("todoListApp", [])

  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello World! This is the hello-world controller function in the mainCtrl!");
    };
  })

  .controller('coolCtrl', function($scope) {
    $scope.whoAmI = function() {
      console.log("hello there, this is the coolCtrl function!");
    };

    $scope.helloWorld = function() {
      console.log("This is not the main ctrl!");
    };

  })

  .controller('imASibling', function($scope) {

    $scope.foobar = 1234;

    //do other stuff

  });
