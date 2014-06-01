/**
 * Cats 'search' service
 */
cats.service('search', ['$http', '$q' ,function($http, $q){

  var url = '/json/custom-api/cats';

  var getResults = function (query){
    var deferred = $q.defer();
    var config = {
      params : query
    };
    var getUrl = url;
    $http.get(getUrl ,config).success(function(result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  };
  return {
    getResults: getResults
  };
}]);
