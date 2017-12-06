(function(){
  'use strict';

  angular
    .module('app.pedido')
    .controller('PedidoLocalController', PedidoLocalController);

  function PedidoLocalController($state) {
    let vm = this;
    let slug = $state.params.slug;
    vm.lanches = [
		{
			"id":1,
			"nome":"Refrigerante Coca-cola 350ml",
			"valor": "5.00",
			"imagem":"coca.png"
		},
		{
			"id":2,
			"nome":"Hamburger de costela",
			"valor": "20.00",
			"imagem":"hamburger.png"
		},
		{
			"id":3,
			"nome":"Batata frita",
			"valor": "10.00",
			"imagem":"fritas.png"
		},
		{
			"id":4,
			"nome":"Tradicional caseiro",
			"valor": "16.00",
			"imagem":"tradicional_caseiro.jpg"
		},
		{
			"id":5,
			"nome":"Tradicional",
			"valor": "11.00",
			"imagem":"tradicional.jpg"
		}
	]

	vm.lanchonetes = [
		{
			"nome":"koba",
			"slug": "koba",
			"imagem":"koba.png"
		},
		{
			"nome":"ciro",
			"slug": "ciro",
			"imagem":"ciro.png"
		},
		{
			"nome":"galpao",
			"slug": "galpao",
			"imagem":"galpao.png"
		},
		{
			"nome":"vegas",
			"slug": "vegas",
			"imagem":"vegas.png"
		}
	]
	vm.search = function(){
		for (var i = 0; i < vm.lanchonetes.length; i++) {
			if(vm.lanchonetes[i].slug == slug){
				vm.lanchonete = vm.lanchonetes[i];
			}
		}
	}
	vm.search();
  }

})();
