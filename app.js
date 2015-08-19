var sap = angular.module('myApp', ['ngRoute']);

sap.config(['$routeProvider', function($routeProvider){

    'use strict';

    $routeProvider.when("/newCustomer", {templateUrl: "views/customer_new.html"});
    $routeProvider.when("/listCustomer", {templateUrl: "views/customer_list.html"});
    $routeProvider.when("/newPurchaseOrder", {templateUrl: "views/po_new.html"});
    $routeProvider.when("/listPurchaseOrder", {templateUrl: "views/po_list.html"});    
    
    $routeProvider.otherwise({redirectTo: "/"});

}]);