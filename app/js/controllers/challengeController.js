angular.module('app')
    .controller('ChallengeController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();
    });
