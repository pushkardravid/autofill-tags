var app = angular.module('dummy', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {
  $scope.iata1 = [
  ];
   
  $scope.loadIATA = function(query) {
    return $http.get('iata.json');
  };

  $scope.loadCountry = function(query) {
    return $http.get('country.json');
  };

  $scope.loadState = function(query) {
    return $http.get('state.json');
  };

});
