// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var svcExample = (function () {
        function svcExample($http) {
            this.$http = $http;
        }
        svcExample.prototype.getData = function () {
            return "";
        };
        svcExample.$inject = ["$http"];
        return svcExample;
    }());
    angular.module("app").service("svcExample", svcExample);
})(App || (App = {}));
