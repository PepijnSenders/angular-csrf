var csrfApp = angular.module('csrfApp', []);
csrfApp.factory('csrfToken', function() {

  var metaTags = document.getElementsByTagName('meta');

  for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute('name') === 'csrf') {
      return metaTags[i].getAttribute('content');
    }
  }

});