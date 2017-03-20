var app;
(function (app) {
    var HomeController = (function () {
        function HomeController() {
            this.hospitalityLocation = [{ Text: "Text-1", Value: "Value-1" }, { Text: "Text-2", Value: "Value-2" }, { Text: "Text-3", Value: "Value-3" }];
            this.selected = [];
            this.toggle = function (item, list) {
                var idx = list.indexOf(item);
                if (idx > -1) {
                    list.splice(idx, 1);
                } else {
                    list.push(item);
                }
            };
            this.TravelTypes = [{ Text: "Client Purpose", Value: 1212 }, { Text: "Client Purpose - Chaperone", Value: 11212 }];
            this.Countries = [
                { Text: "Afghanistan", Value: 1 },
                { Text: "Albania", Value: 2 },
                { Text: "Algeria", Value: 3 },
                { Text: "Andorra", Value: 5 },
                { Text: "Angola", Value: 6 },
                { Text: "Angola", Value: 7 },
                { Text: "Antigua and Barbuda", Value: 8 },
                { Text: "Argentina", Value: 9 },
                { Text: "Armenia", Value: 10 },
                { Text: "Aruba", Value: 11 },
                { Text: "Australia", Value: 12 },
                { Text: "Austria", Value: 13 },
                { Text: "Azerbaijan", Value: 14 },
                { Text: "Bahamas", Value: 44 },
                { Text: "Bahrain", Value: 115 },
                { Text: "Bangladesh", Value: 151 },
                { Text: "Barbados", Value: 311 },
                { Text: "Belarus", Value: 1561 },
                { Text: "Belgium", Value: 1134 },
                { Text: "Belize", Value: 1231 },
                { Text: "Benin", Value: 1134 },
                { Text: "Bhutan", Value: 23411 },
                { Text: "Bolivia", Value: 3211 },
                { Text: "Bosnia and Herzegovina", Value: 1153 },
                { Text: "Botswana", Value: 1331 },
                { Text: "Brazil", Value: 1553341 },
                { Text: "Brunei", Value: 1176 },
                { Text: "Bulgaria", Value: 1188 },
                { Text: "Burkina Faso", Value: 1196 },
                { Text: "Burma", Value: 11456 },
                { Text: "Burundi", Value: 1132 },
                { Text: "Cambodia", Value: 121 },
                { Text: "Cameroon", Value: 1551 },
                { Text: "Canada", Value: 4511 },
                { Text: "Cabo Verde", Value: 14521 },
                { Text: "Central African Republic", Value: 11234 },
                { Text: "Chad", Value: 12342321 },
                { Text: "Chile", Value: 12341 },
                { Text: "China", Value: 123461 },
                { Text: "Colombia", Value: 11345 },
                { Text: "Comoros", Value: 11345 },
                { Text: "Congo, Democratic Republic of the", Value: 1165 },
                { Text: "Congo, Republic of the", Value: 23121 },
                { Text: "Costa Rica", Value: 1112378 },
                { Text: "Cote d'Ivoire", Value: 15731 },
                { Text: "Croatia", Value: 1631 },
                { Text: "Cuba", Value: 11 },
                { Text: "Curacao", Value: 11 },
                { Text: "Cyprus", Value: 11 },
                { Text: "Czechia", Value: 11 },
                { Text: "Denmark", Value: 11 },
                { Text: "Djibouti", Value: 11 },
                { Text: "Dominica", Value: 11 },
                { Text: "Dominican Republic", Value: 11 },
                { Text: "East Timor (see Timor- Leste)", Value: 11 },
                { Text: "Ecuador", Value: 11 },
                { Text: "Egypt", Value: 11 },
                { Text: "El Salvador", Value: 11 },
                { Text: "Equatorial Guinea", Value: 11 },
                { Text: "Eritrea", Value: 11 },
                { Text: "Estonia", Value: 11 },
                { Text: "Ethiopia", Value: 11 },
                { Text: "Gabon", Value: 11 },
                { Text: "Gambia, The", Value: 11 },
                { Text: "Georgia", Value: 11 },
                { Text: "Germany", Value: 11 },
                { Text: "Ghana", Value: 11 },
                { Text: "Greece", Value: 11 },
                { Text: "Grenada", Value: 11 },
                { Text: "Guatemala", Value: 11 },
                { Text: "Guinea", Value: 11 },
                { Text: "Guinea - Bissau", Value: 11 },
                { Text: "Guyana", Value: 11 }];
            this.exists = function (item, list) {
                return list.indexOf(item) > -1;
            };
        }
        return HomeController;
    })();
    app.HomeController = HomeController;

    angular.module("BlankApp").controller("HomeController", HomeController);
})(app || (app = {}));
//# sourceMappingURL=home.js.map
