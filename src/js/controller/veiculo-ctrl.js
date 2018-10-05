angular.module('mainApp')
    .controller('VeiculoCtrl', function ($scope, VeiculoService, dialogs) {
        $scope.isSelected = false;
        //$scope.lista=false;
        function listar() {

            VeiculoService.listar().then(
                function (response) {
                    $scope.veiculos = response.data;
                }, function (error) {
                    console.log(error);
                });
        }

        function removerDefinitivo(veiculo) {
            console.log(veiculo);
            console.log(veiculo.id);
            VeiculoService.remover(veiculo.id)
                .then(
                    function (response) {
                        var retorno = response.data;
                        listar();
                        //$route.reload();
                        alert(retorno.mensagem);
                    }, function (error) {
                        console.log(error);
                    });

        }

        $scope.removerVeiculo = function (veiculo) {
            var dlg =  dialogs.confirm('Confirmação','Deseja realmente remover o veículo?');                               

            dlg.result.then(function(){
                 removerDefinitivo(veiculo);
            });

        };

        $scope.removerVeiculos = function (veiculos) {
            if(veiculos.length>1){
                var dlg =  dialogs.confirm('Confirmação','Deseja realmente remover os veículos selecionados?');  
            }else{
                var dlg =  dialogs.confirm('Confirmação','Deseja realmente remover o veículo?');
            }                               

            dlg.result.then(function(){
                 removerVeiculosDefinitivo(veiculos);
            });           
        };

        $scope.selecionarTodos = function(){
             $scope.veiculos.forEach((veiculo) => {
                veiculo.selected = $scope.todos;
                $scope.isSelected = $scope.todos;
             });
            
            /*for (let index = 0; index < $scope.veiculos.length; index++) {
                veiculo = $scope.veiculos[index];
                veiculo.selected=!veiculo.selected;
                $scope.isSelected = veiculo.selected;
                console.log($scope.veiculo);              
            }*/

            
          };            

        function removerVeiculosDefinitivo(veiculos){
            var selecionados = veiculos.filter(function (veiculo) {
                return veiculo.selected;
            }).map(function (veiculo) {
                return veiculo.id;
            });

            console.log(">>"+selecionados);
            

            VeiculoService.deletarVeiculos(selecionados).then(
                function (response) {
                var retorno = response.data;
                listar();
                $scope.isSelected = false;
                alert(retorno.mensagem);
            }, function (error) {
                console.log(error);
            });
        }

        $scope.atualizarVeiculo = function (veiculos) {
            var selecionados = veiculos.filter(function (veiculo) {
                return veiculo.selected;
            })

            if (selecionados.length > 1) {
                alert("Só é possível atualizar um cadastro de veículo por vez!");
            }

            if (selecionados.length <= 0) {
                alert("Selecione um veículo para atualização");
            }

        };


        $scope.selecionar = function () {
            $scope.isSelected = $scope.veiculos.some(function (veiculo) {
                return veiculo.selected;
            })
        }

        $scope.ordenarPor=function(campo){            
            $scope.criterio = campo;
            $scope.direcao = !$scope.direcao;
        }

       
        listar();
    });