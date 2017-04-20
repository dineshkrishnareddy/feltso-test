angular.module('MainService', ['MainFactory']).factory('MainService', ['MainFactory', function(MainFactory) {

    return {
        get: function () {
            return MainFactory.httpService({
                method: 'GET',
                url: '/api/displayData'
            });
        }
    }
}]);