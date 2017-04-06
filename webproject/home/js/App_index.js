var myApp = angular.module("myApp", ["ui.router"]);
//循环
myApp.controller('siteCtrl', function($scope, $http) {
	$http.get("http://localhost:3000/users/shop_order")
		.success(function(response) {
			console.log(response);
			$scope.names = response;
		});
});
//跳转
myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	//   $urlRouterProvider.when("", "/PageTab");

	$stateProvider

		.state("register", {
			url: "register",
			templateUrl: "register.html"
		})
		.state("index_more", {
			url: "index_more",
			templateUrl: "index_more.html"
		})
		.state("login_fi", {
			url: "login_first",
			templateUrl: "login_first.html"
		})
		.state("login", {
			url: "login",
			templateUrl: "login.html"
		})
		.state("password", {
			url: "password",
			templateUrl: "pwd.html"
		})
		.state("index", {
			url: "index",
			templateUrl: "index.html"
		})
		.state("help", {
			url: "help",
			templateUrl: "help.html"
		})
		.state("shop_order", {
			url: "shop_order",
			templateUrl: "shop_order.html"
		})
		.state("return", {
			url: "index",
			templateUrl: "index.html"
		})
		.state("wallet", {
			url: "wallet",
			templateUrl: "wallet.html"
		})
		.state("wallet_more", {
			url: "wallet_more",
			templateUrl: "wallet_more.html"
		})
		.state("wallet_pay", {
			url: "wallet_pay",
			templateUrl: "wallet_pay.html"
		})
		.state("wallet_pay2", {
			url: "wallet_pay2",
			templateUrl: "wallet_pay2.html"
		})
		.state("wallet_money", {
			url: "wallet_money",
			templateUrl: "wallet_money.html"
		})
		.state("wallet_bind", {
			url: "wallet_bind",
			templateUrl: "wallet_bind.html"
		})
		.state("wallet_detail", {
			url: "wallet_detail",
			templateUrl: "wallet_detail.html"
		})
		.state("address", {
			url: "help_mess",
			templateUrl: "help_mess.html"
		})
		.state("review", {
			url: "review",
			templateUrl: "review.html"
		})
		.state("shop_order_detail", {
			url: "shop_order_detail",
			templateUrl: "shop_order_detail.html"
		})
		.state("webpro_index", {
			url: "pro_index",
			templateUrl: "../../webpro/home/pro_index.html"
		})

	.state('expo1', {
			url: 'expo1',
			templateUrl: '../../webpro/home/expo1.html'
		})
		.state('finish', {
			url: 'finish',
			templateUrl: '../../webpro/home/finish.html'
		})
		.state('zuopinku', {
			url: 'zuopinku',
			templateUrl: '../../webpro/home/zuopinku.html'
		})
		.state('return4', {
			url: 'pro_index',
			templateUrl: '../../webpro/home/pro_index.html'
		})
		.state('shop_one', {
			url: 'shop_one',
			templateUrl: '../../webpro/home/shop_one.html'
		})
		.state('finish2', {
			url: 'finish2',
			templateUrl: '../../webpro/home/finish2.html'
		})
		.state('return1', {
			url: 'return1',
			templateUrl: '../../webpro/home/expo1.html'
		})
		.state('shop_name', {
			url: 'shop_name',
			templateUrl: '../../webpro/home/shop_name.html'
		})
		.state('return3', {
			url: 'return3',
			templateUrl: '../../webpro/home/shop_one.html'
		})
		.state('shop_sex', {
			url: 'shop_sex',
			templateUrl: '../../webpro/home/shop_sex.html'
		})
		.state('shop_seat', {
			url: 'shop_seat',
			templateUrl: '../../webpro/home/shop_seat.html'
		})
		.state('shop_const', {
			url: 'shop_const',
			templateUrl: '../../webpro/home/shop_const.html'
		})
		.state('shop_er', {
			url: 'shop_er',
			templateUrl: '../../webpro/home/shop_er.html'
		})
}]);