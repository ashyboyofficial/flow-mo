(function() {

	var MainController = function($scope) {
		$scope.areasArray = [];
		$scope.currentObject = { "idTag":"None", "img":"", "id":0 };
		$scope.objectImageMap = {
			"Black Box":"black-box.png",
			"Network Device":"nwrk-device.png",
			"Service":"nwrk-device.png",
		};
		$scope.toolbarObjects = [ {
			"id":1,
			"name":"Square",
			"idTag":"squ",
			"img":"square.png"
		}, {
			"id":2,
			"name":"Circle",
			"idTag":"cir1",
			"img":"circle.png"
		},{
			"id":3,
			"name":"Line",
			"idTag":"lin",
			"img":"line.png"
				
		},{
			"id":4,
			"name":"Circle",
			"idTag":"cir3",
			"img":"circle.png"
		},{
			"id":5,
			"name":"Circle",
			"idTag":"cir4",
			"img":"circle.png"
		},{
			"id":6,
			"name":"Circle",
			"idTag":"cir5",
			"img":"circle.png"
		}];
		
		$scope.selectObject = function(object) {
			$scope.currentObject.idTag = object.idTag;
			$scope.currentObject.img = object.img;
			$scope.currentObject.id = object.id;
		}
	};

	var injectParams = [ '$scope' ];
	MainController.$inject = injectParams;
	angular.module('DragDropEditor').controller('MainController',
			MainController);

}());