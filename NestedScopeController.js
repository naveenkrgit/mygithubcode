
var nestedScopeApp = angular.module('nestedScope', []);

nestedScopeApp.controller('NestedScopeController', ['$scope', function($scope) {
    $scope.randomPeople = [
        'Jim',
        'Steven',
        'Emily',
        'Nina'
    ];

    $scope.person = 'Sarah';
}]);
