module app {

    export class HomeController {

        self: HomeController = this;

        hospitalityLocation: any = [{ Text: "Text-1", Value: "Value-1" }, { Text: "Text-2", Value: "Value-2" }, { Text: "Text-3", Value: "Value-3" }];

        selected: any = [];

        toggle: any = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            }
            else {
                list.push(item);
            }
        };


        constructor(public $http: ng.IHttpService) {
            this.contactCache = [];
        }

        TravelTypes: any = [{ Text: "Client Purpose", Value: 1212 }, { Text: "Client Purpose - Chaperone", Value: 11212 }]

        filterSelected: boolean = true;

        allContacts = this.loadContacts();
        pendingSearch: any;
        cancelSearch = angular.noop;
        lastSearch: any;

        debounceSearch(): any {
            var now = new Date().getMilliseconds();
            this.lastSearch = this.lastSearch || now;

            return ((now - this.lastSearch) < 300);
        }


        delayedQuerySearch(query: string): any {
            var self = this;

            var result;
            if (query) {
                result = this.loadAndParseContacts(query).then(function (data) {
                    return data;//.filter(self.createFilterFor(query))
                })
            } else {
                result = []
            }
            return result


            //if (!this.pendingSearch || !this.debounceSearch()) {
            //    this.cancelSearch();

            //    return this.pendingSearch = this.$http.get("/contact.ashx?key=" + criteria).success(function (data) {
            //        return data;

            //    });


            //        $q(function (resolve, reject) {
            //        // Simulate async search... (after debouncing)
            //        this.cancelSearch = reject;
            //        $timeout(function () {

            //            resolve(this.self.querySearch(criteria));

            //            this.refreshDebounce();

            //        }, Math.random() * 500, true)
            //    });
            //}

            //return this.pendingSearch;
        }


        contactCache: any[];

        getParse(self: HomeController): any {



            function ee(data) {

                return data.data.map(function (c, index) {
                    var emailAddr = c.email;//c.name.toLowerCase().split(" ")[0][0] + '.' + c.name.toLowerCase().split(" ")[1] + '@example.com';

                    if (!!self.contactCache[emailAddr]) {
                        return self.contactCache[emailAddr];
                    } else {
                        //var contact = {
                        //    name: c.name,
                        //    email: emailAddr,
                        //    _lowername: '',
                        //    image: 'http://lorempixel.com/50/50/people?' + index
                        //};
                        //contact._lowername = contact.name.toLowerCase();
                        self.contactCache[emailAddr] = c;
                        return c;
                    }
                });
            }

            return ee;
        }


        loadAndParseContacts(query: string): any {
            return this.$http.get("/contact.ashx?Key=" + query).then(this.getParse(this));
        }

        //createFilterFor(query): any {
        //    var lowercaseQuery = angular.lowercase(query);

        //    return function filterFn(contact) {
        //        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
        //    };

        //}

        loadContacts(): any {
            var contacts = [
                'Marina Augustine',
                'Oddr Sarno',
                'Nick Giannopoulos',
                'Narayana Garner',
                'Anita Gros',
                'Megan Smith',
                'Tsvetko Metzger',
                'Hector Simek',
                'Some-guy withalongalastaname',
                'Pramod Sharma'
            ];

            return contacts.map(function (c, index) {
                var cParts = c.split(' ');
                var email = cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com';
                var hash = email;

                var contact = {
                    name: c,
                    email: email,
                    _lowername: '',
                    image: '//www.gravatar.com/avatar/' + hash + '?s=50&d=retro'
                };
                contact._lowername = contact.name.toLowerCase();
                return contact;
            });
        }

        querySearch(criteria: string): any {
            return criteria ? this.self.allContacts.filter(this.createFilterFor(criteria)) : [];
        }

        /**
        * Create filter function for a query string
        */
        createFilterFor(query: string): any {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(contact) {
                return (contact._lowername.indexOf(lowercaseQuery) != -1);
            };

        }


        contacts = [this.allContacts[0]];

        Countries: any = [{ Text: "Afghanistan", Value: 1 },
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
            { Text: "Cambodia", Value: 121 }]



        exists: any = function (item, list) {
            return list.indexOf(item) > -1;
        };

    }

    angular.module("BlankApp").controller("HomeController", HomeController);
}