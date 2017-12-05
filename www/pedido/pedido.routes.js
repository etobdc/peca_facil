(function(){
	'use strict';

  angular
    .module('app.pedido')
    .config(routes);

  function routes($stateProvider) {
  	$stateProvider
  		.state('listaPedido', {
        url: '/pedido',
        templateUrl: 'pedido/layouts/pedido.template.html',
        controller: 'PedidoController',
        controllerAs: 'vm',
        parent: 'main'
      })
  }

})();
