window.Popper = require('popper.js').default

// jQuery y Bootstrap
try {
  window.$ = window.jQuery = require('jquery')
  require('bootstrap')
} catch (e) {}

// Angular y sus dependencias
try {
  window.angular = require('angular')
  require('@uirouter/angularjs')
  require('ngstorage')
} catch (e) {}
