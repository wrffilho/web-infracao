angular.module('mainApp', ['ngRoute', 'ngMessages', 'ui.bootstrap']);


//Configuração das rotas

angular.module('mainApp').config(function ($routeProvider) {

	$routeProvider
		.when('/infracao', {
			templateUrl: 'view/infracao/infracao-list.html',
			controller: "InfracaoCtrl",
		})
		.when('/infracao/form', {
			templateUrl: 'view/infracao/infracao-form.html',
			controller: "InfracaoFormCtrl",
			resolve: {
				infracao: function () {
					return null;
				}
			}
		})
		.when('/infracao/form/:id', {
			templateUrl: 'view/infracao/infracao-form.html',
			controller: "InfracaoFormCtrl",
			resolve: {
				infracao: function ($route, InfracaoService) {
					return InfracaoService
						.buscarPorId($route.current.params.id);
				}
			}
		})
		.when('/home', {
			templateUrl: 'view/home.html'
		})
		.when('/veiculo', {
			templateUrl: 'view/veiculo/veiculo-list.html',
			controller: "VeiculoCtrl",
		})

		.when('/veiculo/form', {
			templateUrl: 'view/veiculo/veiculo-form.html',
			controller: "VeiculoFormCtrl",
			resolve: {
				veiculo: function () {
					return null;
				}
			}
		})

		.when('/veiculo/form/:id', {
			templateUrl: 'view/veiculo/veiculo-form.html',
			controller: "VeiculoFormCtrl",
			resolve: {
				veiculo: function ($route, VeiculoService) {
					return VeiculoService
						.buscarPorId($route.current.params.id);
				}
			}
		})

		.when('/modal', {
			templateUrl: 'view/modal/btModal.html',
			controller: "InfracaoCtrl",
		})

		.otherwise({
			redirectTo: '/home'
		});

		

});

