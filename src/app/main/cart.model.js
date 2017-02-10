(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('CartModel', CartModel);

  /** @ngInject */
  function CartModel() {

    var Cart = function() {

      this.listOfProducts = [];

      console.log(this.listOfProducts);

      this.overAll = function() {
        this.sum = 0;
        this.listOfProducts.forEach(function(product) {
          this.sum++;
        }, this);
        return this.sum;
      };

      this.overAllGold = function() {
        this.sumOfGold = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfGold += product.getGold();
        }, this);
        return this.sumOfGold;
      };

      this.overAllDust = function() {
        this.sumOfDust = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfDust += product.getDust();
        }, this);
        return this.sumOfDust;
      };

      this.overAllWins = function() {
        this.sumOfWins = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfWins += product.getWins();
        }, this);
        return this.sumOfWins;
      };

      this.overAllGames = function() {
        this.sumOfGames = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfGames += product.getGames();
        }, this);
        return this.sumOfGames;
      };

      this.overAllLostGames = function() {
        this.sumOfLostGames = 0;
        this.listOfProducts.forEach(function(product) {
          this.sumOfLostGames += product.getLostGames();
        }, this);
        return this.sumOfLostGames;
      };

      this.overAllAvg = function() {
        if(this.sumOfGames != 0) {
          return this.sumOfWins/this.sumOfGames;
        }
        else{
          return 0;
        }
      };

      this.overAllWinLossRatio = function() {
        return this.sumOfGold - (50*this.sum);
      };

      this.overAllBadGames = function() {
        this.sumOfBadGames = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getWins() <3){
            this.sumOfBadGames += 1;            
          }
        }, this);
        return this.sumOfBadGames;
      };

      this.overAllGrind = function() {
        this.sumOfGrind = this.sumOfGold - (50*this.sum) - (this.sumOfWins/3)*10;
        return this.sumOfGrind.toFixed(2);
      };

      this.overAllTimePlayed = function() {
        this.sumOfTimePlayed = ((this.sumOfGames*589)/60)/60;
        return this.sumOfTimePlayed.toFixed(2);
      };

      this.overAllHunter = function() {
        this.charHunter = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Hunter") this.charHunter +=1;
        }, this);
        return this.charHunter;
      };

      this.overAllRogue = function() {
        this.charRogue = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Rogue") this.charRogue +=1;
        }, this);
        return this.charRogue;
      };

      this.overAllWarrior = function() {
        this.charWarrior = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Warrior") this.charWarrior +=1;
        }, this);
        return this.charWarrior;
      };

      this.overAllWarlock = function() {
        this.charWarlock = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Warlock") this.charWarlock +=1;
        }, this);
        return this.charWarlock;
      };

      this.overAllDruid = function() {
        this.charDruid = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Druid") this.charDruid +=1;
        }, this);
        return this.charDruid;
      };

      this.overAllMage = function() {
        this.charMage = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Mage") this.charMage +=1;
        }, this);
        return this.charMage;
      };

      this.overAllShaman = function() {
        this.charShaman = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Shaman") this.charShaman +=1;
        }, this);
        return this.charShaman;
      };

      this.overAllPaladin = function() {
        this.charPaladin = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Paladin") this.charPaladin +=1;
        }, this);
        return this.charPaladin;
      };

      this.overAllPriest = function() {
        this.charPriest = 0;
        this.listOfProducts.forEach(function(product) {
          if(product.getChar() == "Priest") this.charPriest +=1;
        }, this);
        return this.charPriest;
      };

      this.addProduct = function(product) {
        this.listOfProducts.push(product);
      };

      this.removeElement = function(id) {
        this.listOfProducts.splice(id, 1);
      }

    }
    return Cart;
  }
})();
