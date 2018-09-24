angular.module('mainApp')
            .controller('InfracaoFormCtrl', function ($scope, InfracaoService) {

             
            $scope.salvar = function(infracao) {
                 InfracaoService.salvar(infracao)
                    .then(
                    function (response) {
                        var retorno = response.data;
                        $scope.infracao = {};
                        alert(retorno.mensagem);
                    }, function (error) {
                        console.log(error);
                    }); 
            };
});