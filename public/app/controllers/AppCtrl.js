angular
  .module('app')
  
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('orange')
    .accentPalette('orange'); // specify primary color, all
                            // other color intentions will be inherited
                            // from default
})
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('right');
    $scope.toggleRight = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  });
  