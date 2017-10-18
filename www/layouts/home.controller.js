(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(API){
    let vm = this;
    vm.btnLoginTexto = "Cadastrar";

    vm.logar = logar;
    vm.cadastroUser = cadastroUser;

    function logar(data){
    	console.log(data);
    }

    vm.$onInit = () => {
        getFromAPI();
    }

    function getFromAPI() {
      vm.domain = document.domain;
      API.get('usuarios').then(result => {
        vm.apiStatus = result.data;
      });
    }

    function cadastroUser(dados){
      vm.btnLogin = 1;
      vm.btnLoginTexto = "Cadastrando";
      API.post('usuarios',dados).then(result => {
        console.log(result.data);
      });
    }
  }

})();
