var club = angular.module("app").config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/main");
	//
	// Now set up the states
	$stateProvider.state('main', {
		url : "/main",
		templateUrl : "app/pages/main.html"
	}).state('main.clubes', {
		url : "/clubes",
		templateUrl : "app/pages/main.clubes.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('main.history', {
		url : "/history",
		templateUrl : "app/pages/main.history.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('main.favorites', {
		url : "/favorites",
		templateUrl : "app/pages/main.favorites.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('space', {
		url : "/space",
		templateUrl : "app/pages/space.html"
		//      controller: mainClubesCtrl
		//              function($scope) {
		//        $scope.items = ["A", "List", "Of", "Items"];
		//      }
	}).state('space.gallery', {
		url : "/space.gallery",
		templateUrl : "app/pages/space.gallery.html"

		//
		//      }
	}).state('club', {
		url : "/club",
		templateUrl : "app/pages/club.html",
		params : {
			obj : null
		}
	});

}); 