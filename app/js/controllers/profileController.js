angular.module('app')
  .controller('ProfileController', function($scope, CurrentUser, UserService, LocalService) {
    $scope.user = CurrentUser.user();
    delete $scope.user.password;
    console.log($scope.user);

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

    $scope.editer = function () {
      UserService.update($scope.user._id, $scope.user).then(function (res) {
        console.log(res.data);
        LocalService.set("user", JSON.stringify(res.data.user));
        $scope.pasmodifier();
      }, function (err) {

      });
    };
  });
