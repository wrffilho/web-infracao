angular.module("mainApp").factory("InfracaoService",function($http, constants){

      var BASE_URL = constants.BASE_URL + "/infracao";


    function listar() {
        return $http.get(BASE_URL);
    }

    function remover(id) {
        return  $http.delete(BASE_URL+'/'+id);
    }

    function buscarPorId(id) {
        return  $http.get(BASE_URL+'/'+id);
    }

    function salvar(infracao) {
        return  $http.post(BASE_URL,infracao);
    }

    function atualizar(infracao) {
        return $http.put(BASE_URL+'/'+infracao.id,infracao);
    }

    function salvarOuAtualizar(infracao) {
        if (infracao.id) {
            return atualizar(infracao);
        } else {
            return salvar(infracao);
        }
    }

    return {
        listar: listar,
        remover: remover,
        salvar: salvar,
        atualizar: atualizar,
        buscarPorId: buscarPorId,
        salvarOuAtualizar: salvarOuAtualizar
    };

});
