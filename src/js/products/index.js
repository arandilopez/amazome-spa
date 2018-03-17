angular.module('app.products', [])
.config(['$stateProvider',
function Config($stateProvider) {
  $stateProvider
  .state({
    name: 'app.products',
    url: '/products',
    template: '<ui-view/>',
    abstract: true,
  })
  .state({
    name: 'app.products.show',
    url: '/{sku}',
    params: {
      id: null
    },
    templateUrl: '/views/products/show.html',
    controller: 'ProductShowController',
    onEnter: ['$stateParams', '$state',
    function _onEnter($stateParams, $state) {
      if (!$stateParams.id) {
        $state.go('app.home')
      }
    }]
  })
}])

.controller('ProductShowController', require('./controllers/ProductShowController'))
.factory('productsService', require('./services/ProductsService'))
