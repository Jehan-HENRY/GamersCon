angular.module('app')
    .controller('MygamesController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();
    });
