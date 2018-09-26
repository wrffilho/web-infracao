angular.module('mainApp')
            .controller('InfracaoFormCtrl', function ($scope, InfracaoService,infracao) {


            
            function init() {
                $scope.infracao = infracao.data;
                /*if ($routeParams.id) {
                    InfracaoService
                    .buscarPorId($routeParams.id)
                    .then(function(response){
                        $scope.infracao = response.data;
                    });
                }*/
            }    

            function limparCampos(form,infracao) {
                if (!infracao.id) {
                    $scope.infracao = {};
                }
                form.$setPristine();
            }

             
            $scope.salvar = function(form,infracao) {

                if (form.$valid) {

                   InfracaoService.salvarOuAtualizar(infracao)
                    .then(
                    function (response) {
                        limparCampos(form,infracao);
                        alert(response.data.mensagem);
                    }, function (error) {
                       if (error.data.mensagem) {
                            alert(error.data.mensagem);
                       }                  
                   
                    }); 
                }

                 
            };

            init();
});