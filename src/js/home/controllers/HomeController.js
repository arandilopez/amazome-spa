// class HomeController
HomeController.$inject = ['$scope', 'WEB_SERVICE', '$http']

function HomeController ($scope, WEB_SERVICE, $http) {
  $scope.products = []

  _fetchProducts()

  function _fetchProducts(limit = 21, filter = '') {
    let url = encodeURI(`${WEB_SERVICE}/products?limit=${limit}&filter=${filter}`)
    console.log(url);
    $http.get(url).then(function (response) {
      $scope.products = response.data
    })
  }
}

module.exports = HomeController
