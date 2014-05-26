cats.controller('catsController', function ($scope, $http) {
  $scope.currentPage = 1;
  $scope.itemsPerPage = 2;

  $http.get('/json/cats').success(function (result) {
    $scope.allCats = (function() {
      return result.nodes;
    })();

    $scope.totalItems = $scope.allCats.length;

    $scope.cats = $scope.allCats.slice(0, $scope.itemsPerPage);
  });

  $scope.pageChanged = function (currentPage) {
    var start = (currentPage - 1) * $scope.itemsPerPage;
    var end = start + $scope.itemsPerPage;
    $scope.cats = $scope.allCats.slice(start, end);
  };
});
