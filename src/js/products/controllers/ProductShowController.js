ProductShowController.$inject = ['$stateParams', '$scope', 'productsService']
function ProductShowController($stateParams, $scope, productsService) {
  $scope.product = {}

  _fetchProduct($stateParams.id)

  function _fetchProduct(id = null) {
    let x = productsService
    if (id) {
      x.find(id)
      .then(function (response) {
        $scope.product = response.data
      })
    }
  }
}


module.exports = ProductShowController
