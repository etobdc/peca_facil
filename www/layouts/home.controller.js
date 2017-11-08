(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(API){
    let vm = this;
    vm.btnLoginTexto = "Entrar";
    vm.btnCadastroTexto = "Cadastrar";
    vm.btnLogin = 0;
    vm.btnCadastro = 0;
    vm.logar = logar;
    vm.cadastroUser = cadastroUser;

    function logar(dados){
      vm.btnLogin = 1;
      vm.btnLoginTexto = "Entrando";
      API.post('login',dados).then(result => {
        if (result.data != '') {
          vm.apiStatus = true;
        }        
        console.log(result.data);
      }).catch(error =>{
        vm.btnLogin = 0;
         vm.btnLoginTexto = "Entrar";
        console.log(error);
      });
    }

    function cadastroUser(dados){
      vm.btnCadastro = 1;
      vm.btnCadastroTexto = "Cadastrando";
      
      API.post('register',dados).then(result => {
        console.log(result.data);
      }).catch(error =>{
        vm.btnCadastro = 0;
        vm.btnCadastroTexto = "Cadastrar";
        console.log(error);
      });
    }
  }

})();
