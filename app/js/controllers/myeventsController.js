angular.module('app')
  .controller('MyeventsController', function($scope, CurrentUser) {
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
  });
