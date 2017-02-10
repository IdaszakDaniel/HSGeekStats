(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, ProductModel) {

    $scope.typyNagrod = ["brak", "złoto", "proszek", "karta", "paczka"];
    $scope.typyKart = ["złota", "fioletowa", "pomarań", "szara"];
    $scope.packsNum = ["pack1","pack2","pack3","pack4","pack5"];

    var reset = function() {
      $scope.productChar = "";
      $scope.productWins = 0;
      $scope.productPack1 = "";
      $scope.productPack2 = "";
      $scope.productPack3 = "";
      $scope.productPack4 = "";
      $scope.productPack5 = "";
      $scope.productScore = "";
      $scope.productValue1 = 0;
      $scope.productValue2 = 0;
      $scope.productValue3 = 0;
      $scope.productValue4 = 0;
      $scope.productValue5 = 0;
    }

    var cart = new CartModel();
    $scope.cart = cart;

    var product = new ProductModel();
    console.log(product);
    $scope.product = product;

    $scope.add = function() {

      $scope.product.setChar($scope.productChar);
      $scope.product.setWins($scope.productWins);
      $scope.product.setPack1($scope.productPack1);
      $scope.product.setPack2($scope.productPack2);
      $scope.product.setPack3($scope.productPack3);
      $scope.product.setPack4($scope.productPack4);
      $scope.product.setPack5($scope.productPack5);
      $scope.product.setScore($scope.productScore);
      $scope.product.setValue1($scope.productValue1);
      $scope.product.setValue2($scope.productValue2);
      $scope.product.setValue3($scope.productValue3);
      $scope.product.setValue4($scope.productValue4);
      $scope.product.setValue5($scope.productValue5);
      $scope.product.setDisplay1($scope.productPack1);
      $scope.product.setDisplay2($scope.productPack2);
      $scope.product.setDisplay3($scope.productPack3);
      $scope.product.setDisplay4($scope.productPack4);
      $scope.product.setDisplay5($scope.productPack5);


      $scope.cart.addProduct($scope.product);

      console.log(JSON.stringify($scope.cart, null, 2));

      $scope.product = new ProductModel();
      reset();
    }

    $scope.removeElement = function(id) {
      $scope.cart.removeElement(id);
    }

  }

})();
