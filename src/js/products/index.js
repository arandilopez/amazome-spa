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
  })
}])

.controller('ProductShowController', require('./controllers/ProductShowController'))
