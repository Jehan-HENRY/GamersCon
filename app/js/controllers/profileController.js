angular.module('app')
  .controller('ProfileController', function($scope, CurrentUser) {
    $scope.user = CurrentUser.user();

    $scope.originfos = false;
    $scope.newinfos = false;

    $scope.modifier = function () {
      $scope.originfos = true;
      $scope.newinfos = true;
    };

    $scope.pasmodifier = function () {
      $scope.originfos = false;
      $scope.newinfos = false;
    };
  });
