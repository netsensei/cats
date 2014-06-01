cats.controller('catsController', function ($scope, search) {
  $scope.currentPage = 1;
  $scope.itemsPerPage = 2;
  $scope.cats = [];

  $scope.launchSearch = function () {
    var promise = search.getResults({
      'page' : $scope.currentPage,
      'items_per_page' : $scope.itemsPerPage
    });

    promise.then(function (result) {
      $scope.cats = result.nodes;
      $scope.totalItems = result.total;
    });
  };

  $scope.launchSearch();

  $scope.pageChanged = function () {
    $scope.launchSearch();
  };
});
