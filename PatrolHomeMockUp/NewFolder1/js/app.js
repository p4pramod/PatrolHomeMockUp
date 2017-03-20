angular.module('BlankApp', ['ngMaterial', "ngMdIcons"]);


function controller($scope, $mdBottomSheet, $mdMedia, $mdTheming, $mdSidenav, $window) {

    this._self = this;
    this._self.$window = $window;

    this.FormCategories = [
        {
            Name: 'Foreign Travell Request', Forms: [{
                Title: 'Submit Travel Request-1',
                Description: 'This is the description of the Form',
                Link: '/ftc/Add'
            },
            {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            },
            {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            }
            , {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            },
            {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            }
            , {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            },
            {
                Title: 'Submit Travel Request-2',
                Description: 'This is the description of the Form',
                Link: '/'
            }]
        },
        { Name: 'Anti Corruption Forms' }
    ];

    this.searchText = '';

    this.navigateToForms = function (form) {

        this._self.$window.location.href = "home.html";

    }

    this.showDetails = function (category) {
        this.selected = category;
    }

    this.selected = this.FormCategories[0];

    this.tooleSideNav = function () {
        $mdSidenav('left').toggle();
    }

    this.bigScreen = false;

    this.ff = function (_self) {
        return (function (big) {
            _self.bigScreen = big;
        });
    }
    this.Isshow = false;
    this.ShowSearch = function () {
        this.Isshow = this.Isshow === true ? false : true;
    }

    $scope.$watch(function () { return $mdMedia('lg'); }, this.ff(this));

    this.screenIsSmall = $mdMedia('sm');
    this.customQuery = $mdMedia('(min-width: 1234px)');
    this.anotherCustom = $mdMedia('max-width: 300px');

    this.name = $mdTheming.THEMES;

    this.openBottomSheet = function () {
        this.name = 'pramod sharma'
        this.bigScreen = ('lg');
        $mdBottomSheet.show({
            templateUrl: "dist/bottomList.html",
            controller: 'ListBottomSheetCtrl',
            controllerAs: 'vm'
        });
    }
}

function ListBottomSheetCtrl() {

    this.AdminActions = [{ name: "Forms Admin", di: "" }, { name: "Statement Tracker" }, { name: "Employee Group" }, { name: "Manage Announcement", name: "Manage Announcement" }];

}

angular.module('BlankApp').controller("AppCtrl", ["$scope", "$mdBottomSheet", "$mdMedia", "$mdTheming", "$mdSidenav", "$window", controller]);

angular.module('BlankApp').controller("ListBottomSheetCtrl", [ListBottomSheetCtrl]);



    angular.module('BlankApp').config(function ($mdThemingProvider, $mdIconProvider) {

        $mdIconProvider.iconSet('navigation', '../Content/angular-material-icons/navigation.svg', 24)
        .iconSet('action', '../Content/angular-material-icons/action.svg', 24)
        .iconSet('social', '../Content/angular-material-icons/social.svg', 24)

    });
