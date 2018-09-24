angular.module("mainApp").factory("InfracaoService",function($http, constants){

      var BASE_URL = constants.BASE_URL + "/infracao";


    function listar() {
        return $http.get(BASE_URL);
    }

    function remover(id) {
        return  $http.delete(BASE_URL+'/'+infracao.id);
    }

    function buscarPorId(id) {
        return  $http.get(BASE_URL+'/'+infracao.id);
    }

    function salvar(infracao) {
        return  $http.post(BASE_URL,infracao);
    }

    function atualizar(id,infracao) {
        return $http.put(BASE_URL+'/'+infracao.id,infracao);
    }

    return {
        listar: listar,
        remover: remover,
        salvar: salvar,
        atualizar: atualizar,
        buscarPorId: buscarPorId
    };

});
