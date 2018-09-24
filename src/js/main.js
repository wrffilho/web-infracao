angular.module('mainApp', ['ngRoute']);


//Configuração das rotas

angular.module('mainApp').config(function($routeProvider) {
	
   $routeProvider
	.when('/infracao', {
		templateUrl : 'view/infracao/infracao-list.html',
		controller : "InfracaoCtrl",
    })
    .when('/infracao/form', {
		templateUrl : 'view/infracao/infracao-form.html',
		controller : "InfracaoFormCtrl",
    })
    .when('/home', {
		templateUrl : 'view/home.html'
    })
    .otherwise({
		redirectTo : '/home'
	});
	  
});

