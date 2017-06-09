angular.module('app')
    .controller('GamepageController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();
    });
