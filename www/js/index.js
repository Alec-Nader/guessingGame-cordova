angular.module('app',[])
		.controller('guessingGameController', guessingGameController);
		function guessingGameController($scope) {
			$scope.verifyGuess = function () {
				$scope.check = $scope.original - $scope.guess;
				navigator.vibrate(1500);
				$scope.tries = $scope.tries + 1;
			}
			$scope.initializeGame=function() {
				$scope.tries = 0;
				$scope.original = Math.floor((Math.random() * 10) + 1);
				$scope.guess = null;
				$scope.check = null;
			}
			$scope.initializeGame();
		}