// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    dirExample.$inject = ["$window"];
    function dirExample($window) {
        return {
            restrict: "EA",
            link: link,
            templateUrl: "app/views/viewExample.html"
        };
        function link(scope, element, attrs) {
        }
    }
    angular.module("app").directive("dirExample", dirExample);
})(App || (App = {}));
