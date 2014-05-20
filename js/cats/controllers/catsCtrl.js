cats.controller('catsController', function ($scope, $http) {
  $http.get('/json/cats').success(function (result) {
    $scope.cats = (function() {
      return result.nodes;
    })();
  });
});
