'use strict';

angular.module('tabbitApp')
.controller('MainCtrl', function ($scope) {
	$scope.collection = [
		[
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2013/2BV%200194481%20022%2037%201951.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=3&call=url[file:/product/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2013/2AB%200194481%20020%2035%207550.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=3&call=url[file:/product/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2014/2JV%200206670%20002%2016%208780.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=0&call=url[file:/product/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2014/2OV%200233232%20001%2016%209614.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=2&call=url[file:/product/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2014/2JV%200206427%20001%2056%208787.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=0&call=url[file:/product/quicklook/large]'
		],
		[
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2013/2AB%200186477%20004%2037%202991.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=0&call=url[file:/product/quicklook/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2014/2LV%200200144%20003%2036%204859.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=2&call=url[file:/product/quicklook/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2014/2OV%200203126%20003%2048%203644.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&hmver=2&call=url[file:/product/quicklook/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2013/2AB%200201420%20001%2037%202933.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_BACK]&hmver=1&call=url[file:/product/large]',
			'http://lp.hm.com/hmprod?set=key[source],value[/model/2013/V25%200143887%20001%2060%202572.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_BACK]&hmver=7&call=url[file:/product/large]'
		]
	];

	$scope.saved = [];

	$scope.save = function(){
		var column = [];
		$scope.collection.forEach(function(row){
			column.push(row[0]);
		});

		var name = 'Collection' + Math.floor((Math.random()*100)+1);
		$scope.saved.push({name: name, items: column});
		console.log($scope.saved);
	};

	$scope.add = function(){
		$scope.collection.push([]);
	};
	$scope.remove = function(index){
		$scope.collection.splice(index, 1);
	};

	$scope.collectionUp = function(oldIndex){
		var newIndex;
		if(oldIndex === 0) {
			newIndex = $scope.collection.length - 1;
		} else {
			newIndex = oldIndex - 1;
		}

		$scope.collection.splice(newIndex, 0, $scope.collection.splice(oldIndex, 1)[0]);
	};
	$scope.collectionDown = function(oldIndex){
		var newIndex;
		if(oldIndex === $scope.collection.length - 1) {
			newIndex = 0;
		} else {
			newIndex = oldIndex + 1;
		}

		$scope.collection.splice(newIndex, 0, $scope.collection.splice(oldIndex, 1)[0]);
	};
});
