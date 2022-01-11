var app = angular.module('expensesApp', []);
//cuando se corren algoritmos de verificacion se leen como string
app.controller('ExpensesViewController', ['$scope', function ($scope) {
    //$scope.name = "Elizabeth";
    $scope.expense = {
        description: 'food',
        amount: 10
    };
    $scope.phrase = 'The sky is blue'

    //incrementar un valor con la funcion de click
    $scope.increaseAmount = function () {
        $scope.expense.amount++;
    }

}]);