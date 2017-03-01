(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, ProductModel, $http, GetJson) {

    $scope.typyNagrod = ["brak", "złoto", "proszek", "karta", "paczka"];
    $scope.typyKart = ["złota", "fioletowa", "pomarań", "szara"];
    $scope.labels = ["Hunter", "Warlock", "Warrior", "Rogue", "Druid", "Shaman", "Mage", "Paladin", "Priest"];

    var reset = function() {
      $scope.productChar = "";
      $scope.productWins = 0;
      $scope.productScore = 0;
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
      $scope.product.setPack1($scope.productPack1, $scope.productValue1);
      $scope.product.setPack2($scope.productPack2, $scope.productValue2);
      $scope.product.setPack3($scope.productPack3, $scope.productValue3);
      $scope.product.setPack4($scope.productPack4, $scope.productValue4);
      $scope.product.setPack5($scope.productPack5, $scope.productValue5);
      $scope.product.setScore($scope.productScore);

      $scope.cart.addProduct($scope.product);

      console.log(JSON.stringify($scope.cart, null, 2));

      $scope.product = new ProductModel();
      reset();
      refreshBarChart();

    }
    var promiseAnswers = GetJson.getData();

    promiseAnswers.then(function(data){
      data.list.forEach(function(answer) {
        $scope.product.setChar(answer.char);
        $scope.product.setWins(answer.wins);
        $scope.product.setPack1(answer.pack1, answer.value1);
        $scope.product.setPack2(answer.pack2, answer.value2);
        $scope.product.setPack3(answer.pack3, answer.value3);
        $scope.product.setPack4(answer.pack4, answer.value4);
        $scope.product.setPack5(answer.pack5, answer.value5);
        $scope.product.setScore(answer.score);
        
        $scope.cart.addProduct($scope.product);
        $scope.product = new ProductModel();
        reset();
        refreshBarChart();
        //console.log(JSON.stringify($scope.cart, null, 2));
      });
    });

    $scope.removeElement = function(id) {
      $scope.cart.removeElement(id);
      refreshBarChart();
    }

    var winsSorted=false;
    var classSorted=false;
    var scoreSorted=false;
    $scope.myOrderBy = "";

    $scope.orderByMe = function(x) {
      if(x=="char") {
        if(classSorted==true){
          $scope.myOrderBy = "-"+x;
          classSorted=false;
        } else {
          $scope.myOrderBy = x;
            classSorted=true;
        }
      }
      if(x=="wins"){
        if(winsSorted==true){
          $scope.myOrderBy = "-"+x;
          winsSorted=false;
        } else {
          $scope.myOrderBy = x;
          winsSorted=true;
        }
      }
      if(x=="score"){
        if(scoreSorted==true){
          $scope.myOrderBy = "-"+x;
          scoreSorted=false;
        } else {
          $scope.myOrderBy = x;
          scoreSorted=true;
        }
      }
    };

    var refreshBarChart = function() {
      $scope.data = [
        [$scope.cart.overAllClasses(0), $scope.cart.overAllClasses(1),
        $scope.cart.overAllClasses(2), $scope.cart.overAllClasses(3),
        $scope.cart.overAllClasses(4), $scope.cart.overAllClasses(5),
        $scope.cart.overAllClasses(6), $scope.cart.overAllClasses(7),
        $scope.cart.overAllClasses(8)]
      ];
    };
  }
})();
