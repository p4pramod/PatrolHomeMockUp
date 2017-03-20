// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var ctrlExample = (function () {
        function ctrlExample($scope) {
            this.$scope = $scope;
            this.title = "ctrlExample";
            this.activate();
        }
        ctrlExample.prototype.activate = function () {
        };
        ctrlExample.$inject = ["$scope"];
        return ctrlExample;
    }());
    angular.module("app").controller("ctrlExample", ctrlExample);
})(App || (App = {}));
