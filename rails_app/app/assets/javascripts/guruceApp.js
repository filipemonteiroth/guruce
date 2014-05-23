var guruceApp = angular.module('guruce', []);

guruceApp.controller("UsersController", ['$scope', function($scope) {

	$scope.users = [{nickname: "Teste", age: 22}];

	$scope.init = function() {
		$scope.socket = io.connect("http://localhost:3090");
		$scope.socket.emit("get_users", "get all data");
		$scope.addListeners();
	};

	$scope.addListeners = function() {
		$scope.socket.on("new_user", function(data) {
			$scope.users.push(JSON.parse(data));
			$scope.$digest();
		});

		$scope.socket.on("users_loaded", function(data) {
			$scope.users = data.users;
			$scope.$digest();
		});
	};

}]);