angular.module('mainApp', ['ngRoute','ngMessages','ui.bootstrap']);


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
		.when('/infracao/form/:id', {
			templateUrl : 'view/infracao/infracao-form.html',
			controller : "InfracaoFormCtrl",
			resolve: {
				infracao: function($route, InfracaoService) {
					return InfracaoService
                    .buscarPorId($route.current.params.id);
				}
			}
		})
    .when('/home', {
		templateUrl : 'view/home.html'
    })
    .otherwise({
		redirectTo : '/home'
	});
	  
});

