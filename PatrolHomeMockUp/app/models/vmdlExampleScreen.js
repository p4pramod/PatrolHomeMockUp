var App;
(function (App) {
    var vmdlExampleScreen = (function () {
        function vmdlExampleScreen() {
            this.DataModel = [];
        }
        vmdlExampleScreen.create = function () {
            var ret = new vmdlExampleScreen();
            ret.Greeting = "Welcome ";
            ret.DataModel.push({
                Id: 0,
                Name: "Kazuo"
            });
        };
        return vmdlExampleScreen;
    }());
    App.vmdlExampleScreen = vmdlExampleScreen;
})(App || (App = {}));
