// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var ctrlExampleScope = (function () {
        function ctrlExampleScope($scope) {
            this.$scope = $scope;
            $scope.title = "ctrlExampleScope";
            this.activate();
        }
        ctrlExampleScope.prototype.activate = function () {
        };
        ctrlExampleScope.$inject = ["$scope"];
        return ctrlExampleScope;
    }());
    angular.module("app").controller("ctrlExampleScope", ctrlExampleScope);
})(App || (App = {}));
