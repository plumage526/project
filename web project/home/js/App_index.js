var myApp = angular.module("myApp", ['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

//   $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("index", {
            url: "index",
            templateUrl: "index.html"
        })
        .state("help", {
            url:"help",
            templateUrl: "help.html"
        })
        .state("shop_order", {
            url:"shop_order",
            templateUrl: "shop_order.html"
        })
        .state("return", {
            url:"index",
            templateUrl: "index.html"
        })
        .state("wallet", {
            url:"wallet",
            templateUrl: "wallet.html"
        })
        .state("wallet_more", {
            url:"wallet_more",
            templateUrl: "wallet_more.html"
        })
        .state("wallet_pay", {
            url:"wallet_pay",
            templateUrl: "wallet_pay.html"
        })
        .state("wallet_pay2", {
            url:"wallet_pay2",
            templateUrl: "wallet_pay2.html"
        })
        .state("wallet_money", {
            url:"wallet_money",
            templateUrl: "wallet_money.html"
        })
         .state("wallet_bind", {
            url:"wallet_bind",
            templateUrl: "wallet_bind.html"
        })
        .state("wallet_detail", {
            url:"wallet_detail",
            templateUrl: "wallet_detail.html"
        })
        .state("address", {
            url:"help_mess",
            templateUrl: "help_mess.html"
        })
        .state("review", {
            url:"review",
            templateUrl: "review.html"
        })
        .state("shop_order_detail", {
            url:"shop_order_detail",
            templateUrl: "shop_order_detail.html"
        })
         .state("webpro_index", {
            url:"webpro_index",
            templateUrl: "../../../webpro/home/pro_index.html"
        })
         
         
        
}]);