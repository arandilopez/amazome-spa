angular.module('app.login', [])

.config(['$stateProvider', '$httpProvider',
function Config($stateProvider, $httpProvider) {
  $stateProvider
  .state({
    url: '/login',
    name: 'app.login',
    templateUrl: '/views/login.html',
    controller: 'LoginController'
  })

  // $httpProvider.interceptors.push('AuthInterceptor')
}])
.controller('LoginController', require('./controllers/LoginController'))
// .factory('AuthInterceptor', require('./AuthInterceptor'))
