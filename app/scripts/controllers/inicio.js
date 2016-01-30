'use strict';

angular.module('arteandoApp')
  .controller('InicioCtrl', function ($scope, $rootScope, $timeout) {
    
    $rootScope.PAGE = 'inicio';

    

    $timeout(function() {
	    var ancho = $(window).width();

	    $scope.ancho = function(){

	    	if(ancho>1280){
		        $('.slider').slider({'full_width': true, height:730});
		    }
		    if(ancho>800 && ancho<=1280){
		        $('.slider').slider({'full_width': true, height:640});
		    }
		    if(ancho<=800){
		        $('.slider').slider({'full_width': true, height:500});
		    }
	    };
	    
	    $scope.ancho();
	    
	},0);



  });
