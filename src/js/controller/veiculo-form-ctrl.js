angular.module('mainApp')
    .controller('VeiculoFormCtrl', function ($scope, VeiculoService, veiculo,$location, dialogsResposta, Upload) {

        function init(){
            if(veiculo!=null){
                $scope.veiculo=veiculo.data;
            }
        }

        function limparCampos(form, veiculo){
            if(!veiculo.id){
                $scope.veiculo = {};
            }
            form.$setPristine();
          }

        $scope.converter = function(){
           Upload.base64DataUrl($scope.picFile)
            .then(function (value){
                $scope.veiculo.foto = value;
                console.log(value)
                return value;     
            }, function(error){
                console.log(error);
                return error;  
            })}

        $scope.salvar = function (form, veiculo) {           
            VeiculoService.salvar(veiculo)            
                .then(function (response) {
                        var retorno = response.data;
                        if(veiculo.id){
                            $location.path('/veiculo');
                        }else{                           
                            limparCampos(form,veiculo);
                        }

                        dialogsResposta.confirm('Confirmação',retorno.mensagem);
                       
                    }, function (error) {

                        if(error.data.mensagem)  {
                            alert(error.data.mensagem);
                        }
                        console.log(error);
                    });
        };       
        init();
    });
    