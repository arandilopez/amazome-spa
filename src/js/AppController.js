AppController.$inject = ['$rootScope', '$localStorage', '$state']
function AppController($rootScope, $localStorage, $state) {
  $rootScope.$storage = $localStorage.$default({
    user: null,
    api_key: null
  })

  $rootScope.isAuthenticated = function () {
    return ($rootScope.$storage.api_key && $rootScope.$storage.user)
  }

  $rootScope.logOut = function () {
    delete $rootScope.$storage.api_key
    delete $rootScope.$storage.user
    $state.go('app.login')
  }

}
module.exports = AppController
