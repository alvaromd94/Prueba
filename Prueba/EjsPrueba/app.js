angular.module("localStorage", ["ngStorage"])
    .controller("miControlador", function ($scope, $sessionStorage) {

        $scope.grabar = function () {
            $sessionStorage.texto = $scope.texto;
        }

        $scope.cargar = function () {
            $scope.texto = $sessionStorage.texto;
        }
    })