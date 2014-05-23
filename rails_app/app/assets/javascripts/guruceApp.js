var guruceApp = angular.module('guruce', []);

guruceApp.controller("UsersController", ['$scope', function($scope) {

	$scope.users = [{nickname: "Teste", age: 22}];

	$scope.init = function() {
		$scope.socket = io.connect("http://localhost:3090");
		$scope.addListeners();
	};

	$scope.addListeners = function() {
		$scope.socket.on("new_user", function(data) {
			$scope.users.push(JSON.parse(data));
			$scope.$digest();
		});
	};

}]);