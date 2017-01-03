'use strict';
var App = angular.module('clientApp', ['ngResource', 'App.filters']);
App.controller('ClientCtrl', ['$scope', function ($scope) {
    $scope.selectedCompany = [];
    $scope.companyList = [{
        id: 1,
        name: 'RFQ'
    }, {
        id: 2,
        name: 'PO'
    }, {
        id: 3,
        name: 'User Activity'
    }];

    $scope.clients = [{
        date: '21/12/2016',
		detail:'You have got new Request from Quote from...',
		stat:'Seen',
		action:'View',
        company: {
            id: 1,
            name: 'RFQ'
        }
    }, {
        date: '18/12/2016',
		detail:'You have got new Purchase Order from...',
		stat:'Seen',
		action:'View',
        company: {
            id: 2,
            name: 'PO'
        }
    }, {
        date: '15/12/2016',
		detail:'You have got new Purchase Order from...',
		stat:'Pending',
		action:'View',
        company: {
            id: 2,
            name: 'PO'
        }
    }, {
        date: '10/12/2016',
		detail:'Your profile hass been updated..',
		stat:'Seen',
		action:'View',
        company: {
            id: 3,
            name: 'User Activity'
        }
    }, {
        date: '22/11/2016',
		detail:'You have got new Request from Quote from...',
		stat:'Pending',
		action:'View',
        company: {
            id: 1,
            name: 'RFQ'
        }
    }, {
        date: '18/11/2016',
		detail:'You have got new Purchase Order from...',
		stat:'Seen',
		action:'View',
        company: {
            id: 2,
            name: 'PO'
        }
    }];

    $scope.setSelectedClient = function () {
        var id = this.company.id;
        if (_.contains($scope.selectedCompany, id)) {
            $scope.selectedCompany = _.without($scope.selectedCompany, id);
        } else {
            $scope.selectedCompany.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedCompany, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
        $scope.selectedCompany = _.pluck($scope.companyList, 'id');
    };
}]);

angular.module('App.filters', []).filter('companyFilter', [function () {
    return function (clients, selectedCompany) {
        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
            var tempClients = [];
            angular.forEach(selectedCompany, function (id) {
                angular.forEach(clients, function (client) {
                    if (angular.equals(client.company.id, id)) {
                        tempClients.push(client);
                    }
                });
            });
            return tempClients;
        } else {
            return clients;
        }
    };
}]);