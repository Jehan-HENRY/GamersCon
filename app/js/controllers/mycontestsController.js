angular.module('app')
  .controller('ContestsController', function($scope, CurrentUser) {
    $scope.user = CurrentUser.user();
    $(document).ready(function() {
      $(".cancelbtn").click(function() {
        $(".cancel").hide();
      });
    });
    $(document).ready(function() {
      $(".cancelbtn2").click(function() {
        $(".cancel2").hide();
      });
    });
    $(document).ready(function() {
      $(".cancelbtn3").click(function() {
        $(".cancel3").hide();
      });
    });

    $scope.create = function() {
      Tournoi.create().then(function(res) {
        console.log(res.data);
      });
    };
  });
