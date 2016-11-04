"use strict";

(function() {
  var resumeApp = angular.module('resumeApp', []);

  resumeApp.controller('resumeController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.data = null;
    $scope.init = function() {
      $http({
        method: "GET",
        url: "data/user.json"
      }).success(function(data, status) {
        $scope.description = $sce.trustAsHtml(data.basics.description);
        $scope.data = data;
      })
    }
    $scope.init();
  }])
}());