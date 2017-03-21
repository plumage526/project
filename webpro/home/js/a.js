var myapp = angular.module("myApp", ['ui.router']);
myapp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('expo1', {
			url: 'expo1',
			templateUrl: 'expo1.html'
		})
		.state('finish', {
			url: 'finish',
			templateUrl: 'finish.html'
		})
		.state('zuopinku', {
			url: 'zuopinku',
			templateUrl: 'zuopinku.html'
		})
		.state('return', {
			url: 'index',
			templateUrl: 'pro_index.html'
		})
		.state('shop_one', {
			url: 'shop_one',
			templateUrl: 'shop_one.html'
		})
		.state('finish2', {
			url: 'finish2',
			templateUrl: 'finish2.html'
		})
		.state('return1',{
			url: 'return1',
			templateUrl: 'expo1.html'
		})
		.state('shop_name', {
			url: 'shop_name',
			templateUrl: 'shop_name.html'
		})
		.state('return3', {
			url: 'return3',
			templateUrl: 'shop_one.html'
		})
		.state('shop_sex', {
			url: 'shop_sex',
			templateUrl: 'shop_sex.html'
		})
		.state('shop_seat', {
			url: 'shop_seat',
			templateUrl: 'shop_seat.html'
		})
		.state('shop_const', {
			url: 'shop_const',
			templateUrl: 'shop_const.html'
		})
		.state('shop_er', {
			url: 'shop_er',
			templateUrl: 'shop_er.html'
		})
		
})