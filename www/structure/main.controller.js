(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);

		function MainController($state,$rootScope){
			let vm = this;
			vm.state = $state.current.name;
			$rootScope.$on('$stateChangeSuccess', 
			function(event, toState, toParams, fromState, fromParams){ 
			    vm.state = $state.current.name;
			})
		}

})();
