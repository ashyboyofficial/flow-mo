/**
*   Copyright 2017 Ashish Gundewad
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/

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