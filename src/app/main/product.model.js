(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('ProductModel', ProductModelFactory);

  /** @ngInject */
  function ProductModelFactory() {

    var ProductModel = function(char, wins, pack1, pack2, pack3, pack4, pack5, score, value1, value2, value3, value4, value5) {

      this.char = char || "";
      this.wins = wins || 0;
      this.pack1 = pack1 || "";
      this.pack2 = pack2 || "";
      this.pack3 = pack3 || "";
      this.pack4 = pack4 || "";
      this.pack5 = pack5 || "";
      this.score = score || "";
      this.value1 = value1 || 0;
      this.value2 = value2 || 0;
      this.value3 = value3 || 0;
      this.value4 = value4 || 0;
      this.value5 = value5 || 0;
      this.display1 = pack1 || "";
      this.display2 = pack2 || "";
      this.display3 = pack3 || "";
      this.display4 = pack4 || "";
      this.display5 = pack5 || "";

      this.setChar = function(char) {
        this.char = char;
      };

      this.setWins = function(wins) {
        this.wins = wins;
      };

      this.setPack1 = function(pack1) {
        this.pack1 = pack1;
      };

      this.setPack2 = function(pack2) {
        this.pack2 = pack2;
      };

      this.setPack3 = function(pack3) {
        this.pack3 = pack3;
      };

      this.setPack4 = function(pack4) {
        this.pack4 = pack4;
      };

      this.setPack5 = function(pack5) {
        this.pack5 = pack5;
      };

      this.setScore = function(score) {
        this.score = score;
      };

      this.setValue1 = function(value1) {
        this.value1 = value1;
      };


      this.setValue2 = function(value2) {
        this.value2 = value2;
      };


      this.setValue3 = function(value3) {
        this.value3 = value3;
      };


      this.setValue4 = function(value4) {
        this.value4 = value4;
      };


      this.setValue5 = function(value5) {
        this.value5 = value5;
      };


      this.setDisplay1 = function(pack1) {
        if(pack1 == "0") this.display1 = "--";
        if(pack1 == "1") this.display1 = "G";
        if(pack1 == "2") this.display1 = "D";
        if(pack1 == "3") this.display1 = "C";
        if(pack1 == "4") this.display1 = "B";
      };


      this.setDisplay2 = function(pack2) {
        if(pack2 == "0") this.display2 = "--";
        if(pack2 == "1") this.display2 = "G";
        if(pack2 == "2") this.display2 = "D";
        if(pack2 == "3") this.display2 = "C";
        if(pack2 == "4") this.display2 = "B";
      };


      this.setDisplay3 = function(pack3) {
        if(pack3 == "0") this.display3 = "--";
        if(pack3 == "1") this.display3 = "G";
        if(pack3 == "2") this.display3 = "D";
        if(pack3 == "3") this.display3 = "C";
        if(pack3 == "4") this.display3 = "B";
      };


      this.setDisplay4 = function(pack4) {
        if(pack4 == "0") this.display4 = "--";
        if(pack4 == "1") this.display4 = "G";
        if(pack4 == "2") this.display4 = "D";
        if(pack4 == "3") this.display4 = "C";
        if(pack4 == "4") this.display4 = "B";
      };


      this.setDisplay5 = function(pack5) {
        if(pack5 == "0") this.display5 = "--";
        if(pack5 == "1") this.display5 = "G";
        if(pack5 == "2") this.display5 = "D";
        if(pack5 == "3") this.display5 = "C";
        if(pack5 == "4") this.display5 = "B";
      };

      this.getGold = function() {
        var sum = 0;
        if(this.pack1 == "1") sum+=this.value1;
        if(this.pack2 == "1") sum+=this.value2;
        if(this.pack3 == "1") sum+=this.value3;
        if(this.pack4 == "1") sum+=this.value4;
        if(this.pack5 == "1") sum+=this.value5;
        return sum;
      };

      this.getDust = function() {
        var sum = 0;
        if(this.pack1 == "2") sum+=this.value1;
        if(this.pack2 == "2") sum+=this.value2;
        if(this.pack3 == "2") sum+=this.value3;
        if(this.pack4 == "2") sum+=this.value4;
        if(this.pack5 == "2") sum+=this.value5;
        return sum;
      };

      this.getWins = function() {
        return this.wins;
      };

      this.getGames = function() {
        if(this.wins == 12) {
          return this.wins;
        }
        else{
          return this.wins+3;
        }
      };

      this.getLostGames = function() {
        if(this.wins !== 12) {
          return 3;
        }
      };

    }

    return ProductModel;
  }
})();
