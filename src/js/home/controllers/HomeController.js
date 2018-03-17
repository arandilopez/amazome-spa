// class HomeController
HomeController.$inject = ['$scope', 'productsService']

function HomeController ($scope, productsService) {
  $scope.products = []

  _fetchProducts()

  function _fetchProducts(limit = 21, filter = '') {
    productsService.all(limit, filter)
    .then(function (response) {
      $scope.products = response.data
    })
  }
}

module.exports = HomeController
