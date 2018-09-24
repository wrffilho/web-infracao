angular.module('mainApp').filter('tipoInfrator',function() {
    
            return function(valor) {
                return valor === 'P' ? "Proprietario" : "Condutor";
            };

});