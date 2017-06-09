angular.module('app')
    .controller('MyeventsController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();
    });
