(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(API,$mdToast){
    let vm = this;
    vm.btnLoginTexto = "Entrar";
    vm.btnCadastroTexto = "Cadastrar";
    vm.btnLogin = 0;
    vm.btnCadastro = 0;
    vm.logar = logar;
    vm.cadastroUser = cadastroUser;


    vm.showSimpleToast = function(msg) {
      $mdToast.show(
          $mdToast.simple()
          .textContent(msg)
          .position('top right')
          .hideDelay(10000)
      );
    };



    function logar(dados){
      vm.btnLogin = 1;
      vm.btnLoginTexto = "Entrando";
      API.post('login',dados).then(result => {              
        console.log(result.data);
        vm.btnLogin = 0;
        vm.btnLoginTexto = "Entrar";
        if(result.data.password != undefined){
          vm.showSimpleToast('Senha de no minimo 6 caracteres');
        }
        if(result.data.email != undefined){
          vm.showSimpleToast('E-mail inválido');
        }
        if(!result.data){
          vm.showSimpleToast('Usuário não encontrado');
        }
      }).catch(error =>{
        vm.btnLogin = 0;
        vm.btnLoginTexto = "Entrar";
        if(error.data.password != undefined){
          vm.showSimpleToast('Senha de no minimo 6 caracteres');
        }
        if(error.data.email != undefined){
          vm.showSimpleToast('E-mail inválido');
        }
        if(error.data == ''){
          vm.showSimpleToast('Usuário não encontrado');
        }
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
        if(error.data.password != undefined){
          vm.showSimpleToast('Senha de no minimo 6 caracteres');
        }
        if(error.data.email != undefined){
          vm.showSimpleToast('E-mail inválido');
        }
      });
    }
  }

})();
