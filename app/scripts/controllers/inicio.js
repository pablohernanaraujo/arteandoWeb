'use strict';

angular.module('arteandoApp')
  .controller('InicioCtrl', function ($scope, $rootScope, $timeout) {
    
    $rootScope.PAGE = 'inicio';

    $timeout(function() {
	    var ancho = $( document ).width();

	    if(ancho>1280){
	        $('.slider').slider({'full_width': true, height:730});
	    }
	    if(ancho<=1280 && ancho>800){
	        $('.slider').slider({'full_width': true, height:640});
	    }
	    if(ancho<=800){
	        $('.slider').slider({'full_width': true, height:500});
	    }
	},0);

  });
