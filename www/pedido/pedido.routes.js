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
      .state('showPedidoLocal', {
        url: '/pedido/local/:slug',
        templateUrl: 'pedido/layouts/pedidoLocal.template.html',
        controller: 'PedidoLocalController',
        controllerAs: 'vm',
        parent: 'main'
      })
  }

})();
