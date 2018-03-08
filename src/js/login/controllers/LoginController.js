LoginController.$inject = ['$scope', '$http', 'WEB_SERVICE', '$localStorage', '$state']
function LoginController($scope, $http, WEB_SERVICE, $localStorage, $state) {
  $scope.auth = { email: '', password: '' }

  $scope.login = function () {
    $http.post(WEB_SERVICE + '/login', {auth: $scope.auth})
    .then(function (response) {
      let data = response.data
      if (data.jwt) {
        $localStorage.api_key = data.jwt
        $state.go('app.home')
      }
    })
  }
}

module.exports = LoginController
