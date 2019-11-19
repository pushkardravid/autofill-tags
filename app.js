var app = angular.module('dummy', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {
  $scope.iata1 = [
  ];
   
  $scope.loadIATA = function(query) {
    return $http.get('iata.json').then(function(response) {
       var iata_numbers = response.data;
       return iata_numbers.filter(function(iata) {
       return iata.text.toLowerCase().indexOf(query.toLowerCase()) != -1;
      });
    });
  };

  $scope.loadCountry = function(query) {
    return $http.get('country.json').then(function(response) {
       var countries = response.data;
       return countries.filter(function(country) {
       return country.text.toLowerCase().indexOf(query.toLowerCase()) != -1;
      });
    });
  };

  $scope.loadState = function(query) {
    return $http.get('state.json').then(function(response) {
       var states = response.data;
       return states.filter(function(state) {
       return state.text.toLowerCase().indexOf(query.toLowerCase()) != -1;
      });
    });
  };

});
