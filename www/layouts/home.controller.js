(function(){
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController(API){
    let vm = this;
    vm.logar = logar;


    function logar(data){
    	console.log(data);
    }

    vm.$onInit = () => {
        getFromAPI();
    }

    function getFromAPI() {
      vm.domain = document.domain;
      API.get('teste').then(result => {
        vm.apiStatus = result.data;
      });
    }
  }

})();
