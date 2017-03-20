var App;
(function (App) {
    angular.module("app").config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Example/:Id', {
            templateUrl: 'app/views/viewExample.html',
        })
            .otherwise({
            templateUrl: 'app/views/viewExample.html',
        });
        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);
    });
})(App || (App = {}));
