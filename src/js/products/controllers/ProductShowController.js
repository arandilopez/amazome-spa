ProductShowController.$inject = ['$stateParams', '$scope', '$http', 'WEB_SERVICE']
function ProductShowController($stateParams, $scope, $http, WEB_SERVICE) {
  $scope.product = {}
  _fetchProduct($stateParams.id)
  function _fetchProduct(id = null) {
    if (id) {
      $http.get(WEB_SERVICE + '/products/' + id)
      .then(function (response) {
        $scope.product = response.data
      })
    }
  }
}


module.exports = ProductShowController
