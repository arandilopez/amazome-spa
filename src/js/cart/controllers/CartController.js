CartController.$inject = ['$scope', 'cartService']
function CartController($scope, cartService) {
  $scope.products = []

  if ($scope.isAuthenticated()) {
    _fetchCartProducts()
  }

  $scope.delete = function (product) {
    cartService.delete(product).then(function (response) {
      if (response.status == 204) {
        _fetchCartProducts()
      }
    })
  }

  $scope.total = function () {
    return $scope.products.reduce(function (sum, product) {
      return sum + parseFloat(product.price)
    }, 0)
  }

  function _fetchCartProducts() {
    cartService.get().then(function (response) {
      $scope.products = response.data
    })
  }
}

module.exports = CartController
