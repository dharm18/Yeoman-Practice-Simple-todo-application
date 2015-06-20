'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
//(function(){

  angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    
    $scope.addTodo = function () {
      if (typeof $scope.todo !== 'undefined' || $scope.todo !== null) {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };
    
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
  });


//}());

