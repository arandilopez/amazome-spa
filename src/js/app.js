require('./dependencias')
// Registrar nuevo modulo
// Modulos de la aplicacion
require('./home')
require('./login')
require('./products')
require('./cart')

angular.module('app', [
  'ui.router',
  'ngStorage',

  'app.home',
  'app.login',
  'app.products',
  'app.cart',
]) // <- si tiene el arreglo de dependencias es la creacion
.constant('WEB_SERVICE', 'https://amazome.herokuapp.com')
.config(Config)
.controller('AppController', require('./AppController'))

Config.$inject = ['$stateProvider']
function Config ($stateProvider) {
  $stateProvider
    .state({
      name: 'app',
      url: '',
      template: '<ui-view></ui-view>',
      abstract: true
    })

}
