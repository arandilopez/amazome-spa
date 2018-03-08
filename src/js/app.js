require('./dependencias')
// Registrar nuevo modulo
// Modulos de la aplicacion
require('./home')
angular.module('app', [
  'ui.router',
  'ngStorage',

  'app.home',
]) // <- si tiene el arreglo de dependencias es la creacion
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
