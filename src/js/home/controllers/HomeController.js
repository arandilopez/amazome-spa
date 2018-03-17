// class HomeController
HomeController.$inject = ['$scope', 'productsService', 'cartService']

function HomeController ($scope, productsService, cartService) {
  $scope.products = []

  $scope.addToCart = function (product) {
    if (!$scope.isAuthenticated()) {
      return alert('Inicia sesión para añadir productos al carrito')
    }
    cartService.add(product).then(function (response) {
      if (response.status = 201) {
        alert(`${product.name} fue añadido al carrito`)
      }
    })
  }

  _fetchProducts()

  function _fetchProducts(limit = 21, filter = '') {
    productsService.all(limit, filter)
    .then(function (response) {
      $scope.products = response.data
    })
  }
}

module.exports = HomeController
