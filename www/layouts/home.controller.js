(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(API,$mdToast){
    let vm = this;
    vm.selectedIndex = 0;
    vm.btnLoginTexto = "Entrar";
    vm.btnCadastroTexto = "Cadastrar";
    vm.btnLogin = 0;
    vm.btnCadastro = 0;
    vm.logar = logar;
    vm.cadastroUser = cadastroUser;


    vm.onSwipeRight = function(){
      if(vm.selectedIndex == 0){
        vm.selectedIndex = 1;
      }
    }
    vm.onSwipeLeft = function(){
      console.log('test');
      if(vm.selectedIndex == 1){
        vm.selectedIndex = 0;
      }
    }

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
        if(Array.isArray(result.data.email)){
          vm.showSimpleToast('E-mail inválido');
        }
        if(!result.data){
          vm.showSimpleToast('Login ou senha inválidos');
        }
      }).catch(error =>{
        vm.btnLogin = 0;
        vm.btnLoginTexto = "Entrar";
        if(error.data.password != undefined){
          vm.showSimpleToast('Senha de no minimo 6 caracteres');
        }
        if(Array.isArray(error.data.email)){
          vm.showSimpleToast('E-mail inválido');
        }
        if(error.data == ''){
          vm.showSimpleToast('Login ou senha inválidos');
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
