angular.module('app')
    .service('TournoiService', function($http) {
        return {
            getAll: function() {
                return $http.get('/tournois');
            },
            getOne: function(id) {
                return $http.get('/tournois/' + id);
            },
            update: function(id, game) {
                return $http.put('/tournois/' + id, game);
            },
            delete: function(id) {
                return $http.delete('/tournois/' + id);
            }
        };
    });
