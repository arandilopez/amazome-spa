require('./dependencias')
// Registrar nuevo modulo
// Modulos de la aplicacion
require('./home')
require('./login')
angular.module('app', [
  'ui.router',
  'ngStorage',

  'app.home',
  'app.login',
]) // <- si tiene el arreglo de dependencias es la creacion
.constant('WEB_SERVICE', 'https://amazome.herokuapp.com')
.config(Config)

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
