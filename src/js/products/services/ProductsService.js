ProductsService.$inject = ['$http', 'WEB_SERVICE']
function ProductsService($http, WEB_SERVICE) {

  return {
    all: function _all (limit = '', filter = '') {
      let url = encodeURI(`${WEB_SERVICE}/products?limit=${limit}&filter=${filter}`)
      return $http.get(url)
    },

    find: function _find (id) {
      return $http.get( encodeURI(`${WEB_SERVICE}/products/${id}`) )
    }
  }
}

module.exports = ProductsService
