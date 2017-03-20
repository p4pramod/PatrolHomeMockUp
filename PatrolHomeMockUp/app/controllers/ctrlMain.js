// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var ctrlMain = (function () {
        function ctrlMain($scope, $route, $routeParams, $location) {
            $scope.title = "ctrlMain";
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            this.activate();
        }
        ctrlMain.prototype.activate = function () {
        };
        ctrlMain.$inject = ["$scope", "$route", "$routeParams", "$location"];
        return ctrlMain;
    }());
    angular.module("app").controller("ctrlMain", ctrlMain);
})(App || (App = {}));
