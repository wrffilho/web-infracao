angular.module('mainApp')
    .controller('InfracaoCtrl', function ($scope, InfracaoService) {


        function listar() {

            InfracaoService.listar().then(
                function (response) {

                    $scope.infracoes = response.data;
                }, function (error) {
                    console.log(error);
                });
        }

        $scope.remover = function (infracao) {
            InfracaoService.remover(infracao.id)
                .then(
                function (response) {
                    var retorno = response.data;
                    listar();
                    alert(retorno.msg);
                }, function (error) {
                    console.log(error);
                });

        };




        listar();
    });