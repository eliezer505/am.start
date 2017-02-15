(function() {

	var club = angular.module("app", ['ngMaterial', 'ui.router']);

club.config(function($mdBiDirectionalProvider) {
 $mdBiDirectionalProvider.rtlMode(true);
 });

})();

