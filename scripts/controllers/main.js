'use strict';

angular.module('todoListApp')

  .controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.helloConsole;

    $scope.addToDo = function() {
      var todo = {name: "This is a new todo."};
      $scope.todos.push(todo);
    };

    dataService.getTodos(function(response) {
      $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };

  });
