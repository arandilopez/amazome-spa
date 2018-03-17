CartService.$inject = ['$http', 'WEB_SERVICE']
function CartService($http, WEB_SERVICE) {
  return {
    get: function _get() {
      return $http.get( encodeURI(`${WEB_SERVICE}/cart`) )
    },

    add: function _add (product) {
      return $http.post( encodeURI(`${WEB_SERVICE}/cart`), {
        product: {
          id: product.id
        }
      })
    },

    delete: function _delete (product) {
      return $http.delete( encodeURI(`${WEB_SERVICE}/cart/${product.id}`) )
    }
  }
}

module.exports = CartService
