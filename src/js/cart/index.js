angular.module('app.cart', [])
.config(['$stateProvider',
function Config($stateProvider) {
  $stateProvider
  .state({
    name: 'app.cart',
    url: '/cart',
    templateUrl: '/views/cart/index.html',
    controller: 'CartController'
  })
}])
.controller('CartController', require('./controllers/CartController'))
.factory('cartService', require('./services/CartService'))
