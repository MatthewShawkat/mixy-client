'use strict';

angular.module('tabbitApp')
.directive('carousel', function () {
	return {
		templateUrl: '/templates/carousel.html',
		restrict: 'E',
		replace: true,
		scope: {
			mypics: '=',
			location: '=',
			moveUp: '&',
			moveDown: '&'
		},
		controller: function($scope, $element) {
			$scope.showAdd = false;

			$scope.next = function(){
				var ul = $element.find('ul');
				ul.animate({left:'190px'},function(){

					var last = $scope.mypics.pop();
					$scope.mypics.unshift(last);
					$scope.$apply();

					ul.css('left','0');
				});
			};
			$scope.prev = function(){
				var ul = $element.find('ul');
				ul.animate({left:'-190'},function(){

					var first = $scope.mypics.shift();
					$scope.mypics.push(first);
					$scope.$apply();

					ul.css('left','0');
				});
			};
			$scope.remove = function(index){
				$scope.mypics.splice(index, 1);
			};
			$scope.add = function(){
				$scope.mypics.push($scope.newImage);
				$scope.newImage = '';
				$scope.showAdd = false;
			};

			$scope.toggleAdd = function () {
				$scope.showAdd = !$scope.showAdd;
			};

			$scope.showControls = false;
		},
	};
});

angular.module('tabbitApp')
.controller('itemCtrl', function($scope){
	$scope.showRemove = false;
});