(function() {

	var injectParams = [ '$scope' ];
	var CanvasController = function($scope) {
		
		$scope.onChangeAreas = function(event, id, areas, area) {
			console.log(event);
			console.log(id);
			console.log(areas);
			console.log(area);
		}
		
		$scope.onAddArea = function(event, id, areas, area) {
			console.log(event);
			console.log(id);
			console.log(areas);
			console.log(area);
		}
		
		$scope.getCurrentObject = function() {
			return $scope.objectImageMap[$scope.currentObject];
		}
		
	};

	CanvasController.$inject = injectParams;
	angular.module('DragDropEditor').controller('CanvasController',
			CanvasController);

}());



/*
 * Sample Object Model
 * {
      "x" : 557,
      "y" : 35,
      "z" : 100,
      "height" : 130,
      "width" : 925,
      "name" : "Menu Options",
      "cssClass" : "class_red",
      "id" : 37,
      "description" : "Menu"
  }
 * 
 */