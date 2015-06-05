angular.module('rangular.services', [])
  .factory('Question', ['$resource', function ($resource) {
    return $resource('/api/questions/:id', { id: '@id' })
    // this $resource function exposes all 5 RESTful methods/routes
    // { 'get':    {method:'GET'},
    //   'save':   {method:'POST'},
    //   'query':  {method:'GET', isArray:true},
    //   'remove': {method:'DELETE'},
    //   'delete': {method:'DELETE'} };
  }]);