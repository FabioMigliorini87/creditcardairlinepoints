// configure mainController for home.html
angular.module('creditcardApp').controller('mainController', ['$scope', function($scope) {

  // Define control array
  $scope.control = {
    avios: 1,
    amex: 1,
    spg: 1.5,
    virgin: 0.8,
    marriott: 0.55,
    ihg: 0.5,
    hilton: 150,
    deductFee: 1,
    hideNoBonusCards: 1,
  };

  // Define credit card array
  $scope.cards = [
    {
      cardName: "American Express Preferred Rewards Gold",
      cardStatus: 1,
      cardBonus: 22000,
      cardBonusVisual: 22000,
      bonusValue: 220,
      bonusCurrency: "amex",
      bonusCurrencyVisual: "Membership Reward points",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 125,
      cardFeeVisual: "125",
      imageName: "amex-gold.jpg", 
      minSpend: 2000,
      minSpendVisual: "2000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:gold&journey=B&intlink=uk-amex-cardshop-goldcard-detail-applynow-main"
    },
    {
      cardName: "American Express Platinum",
      cardStatus: 1,
      cardBonus: 35000,
      cardBonusVisual: 35000,
      bonusValue: 350,
      bonusCurrency: "amex",
      bonusCurrencyVisual: "Membership Reward points",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 450,
      cardFeeVisual: "450",
      imageName: "amex-platinum.jpg", 
      minSpend: 2000,
      minSpendVisual: "2000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:platinum_charge&journey=B&intlink=uk-amex-cardshop-platinumcard-detail-applynow-main"
    },
    {
      cardName: "British Airways American Express",
      cardStatus: 1,
      cardBonus: 3000,
      cardBonusVisual: 3000,
      bonusValue: 30,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "Avios",
      cardFeeSymbol: "",
      minSpendSymbol: "£",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "ba.jpg", 
      minSpend: 500,
      minSpendVisual: "500",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
    },
    {
      cardName: "British Airways American Express Premium Plus",
      cardStatus: 1,
      cardBonus: 18000,
      cardBonusVisual: 18000,
      bonusValue: 180,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "Avios",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 125,
      cardFeeVisual: "125",
      imageName: "ba-premium-plus.jpg", 
      minSpend: 2000,
      minSpendVisual: "2000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "https://www252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:triPremiumPlus&intlink=uk-amex-cardshop-BritishAirwaysPremiumPlus-detail-applynow-main"
    },
    {
      cardName: "Lloyds Avios Rewards American Express & MasterCard",
      cardStatus: 1,
      cardBonus: 0,
      cardBonusVisual: "",
      bonusValue: 0,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "-",
      cardFeeSymbol: "£",
      minSpendSymbol: "",
      cardFee: 24,
      cardFeeVisual: "24",
      imageName: "lloyds-rewards.jpg", 
      minSpend: 0,
      minSpendVisual: "-",
      spendTimeLimit: 0,
      spendTimeLimitVisual: "-",
      spendTimeLimitDays: "",
      cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAvios_HP2812"
    },
    {
      cardName: "Lloyds Premier Avios Rewards American Express & MasterCard",
      cardStatus: 1,
      cardBonus: 0,
      cardBonusVisual: "",
      bonusValue: 0,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "-",
      cardFeeSymbol: "£",
      minSpendSymbol: "",
      cardFee: 140,
      cardFeeVisual: "140",
      imageName: "lloyds-premier.jpg", 
      minSpend: 0,
      minSpendVisual: "-",
      spendTimeLimit: 0,
      spendTimeLimitVisual: "-",
      spendTimeLimitDays: "",
      cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAviosPremier_HP2812"
    },
    {
      cardName: "Lloyds Choice Rewards American Express & MasterCard",
      cardStatus: 1,
      cardBonus: 0,
      cardBonusVisual: "",
      bonusValue: 0,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "-",
      cardFeeSymbol: "£",
      minSpendSymbol: "",
      cardFee: 24,
      cardFeeVisual: "24",
      imageName: "lloyds-choice.jpg", 
      minSpend: 0,
      minSpendVisual: "-",
      spendTimeLimit: 0,
      spendTimeLimitVisual: "-",
      spendTimeLimitDays: "",
      cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_Lloyds_Choice2812"
    },
    {
      cardName: "TSB Avios American Express & MasterCard",
      cardStatus: 1,
      cardBonus: 0,
      cardBonusVisual: "",
      bonusValue: 0,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "-",
      cardFeeSymbol: "",
      minSpendSymbol: "",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "tsb.jpg", 
      minSpend: 0,
      minSpendVisual: "-",
      spendTimeLimit: 0,
      spendTimeLimitVisual: "-",
      spendTimeLimitDays: "",
      cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBDuoAvios"
    },
    {
      cardName: "TSB Premier Avios American Express & MasterCard",
      cardStatus: 1,
      cardBonus: 0,
      cardBonusVisual: "",
      bonusValue: 0,
      bonusCurrency: "avios",
      bonusCurrencyVisual: "-",
      cardFeeSymbol: "",
      minSpendSymbol: "",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "tsb-premier.jpg", 
      minSpend: 0,
      minSpendVisual: "-",
      spendTimeLimit: 0,
      spendTimeLimitVisual: "-",
      spendTimeLimitDays: "",
      cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBPremierDuo"
    },
    {
      cardName: "Virgin Atlantic White American Express & Visa",
      cardStatus: 1,
      cardBonus: 10000,
      cardBonusVisual: 10000,
      bonusValue: 80,
      bonusCurrency: "virgin",
      bonusCurrencyVisual: "Virgin Flying Club miles",
      cardFeeSymbol: "",
      minSpendSymbol: "£",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "virgin-white.jpg", 
      minSpend: 2000,
      minSpendVisual: "2000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-white-card.html"
    },
    {
      cardName: "Virgin Atlantic Black American Express & Visa",
      cardStatus: 1,
      cardBonus: 25000,
      cardBonusVisual: 25000,
      bonusValue: 200,
      bonusCurrency: "virgin",
      bonusCurrencyVisual: "Virgin Flying Club miles",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 14,
      cardFeeVisual: "14",
      imageName: "virgin-black.jpg", 
      minSpend: 2000,
      minSpendVisual: "2000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-black-card.html"
    },
    {
      cardName: "Hilton HHonors Platinum Visa",
      cardStatus: 1,
      cardBonus: 1,
      cardBonusVisual: 1,
      bonusValue: 150,
      bonusCurrency: "hilton",
      bonusCurrencyVisual: "Night in a Hilton property*",
      cardFeeSymbol: "",
      minSpendSymbol: "£",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "hilton.jpg", 
      minSpend: 750,
      minSpendVisual: "750",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/hilton"
    },
    {
      cardName: "IHG Rewards Club Visa",
      cardStatus: 1,
      cardBonus: 30000,
      cardBonusVisual: 30000,
      bonusValue: 150,
      bonusCurrency: "ihg",
      bonusCurrencyVisual: "IHG Rewards Club points",
      cardFeeSymbol: "",
      minSpendSymbol: "£",
      cardFee: 0,
      cardFeeVisual: "-",
      imageName: "ihg.jpg", 
      minSpend: 1,
      minSpendVisual: "1",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg"
    },
    {
      cardName: "IHG Rewards Club Premium Visa",
      cardStatus: 1,
      cardBonus: 60000,
      cardBonusVisual: 60000,
      bonusValue: 300,
      bonusCurrency: "ihg",
      bonusCurrencyVisual: "IHG Rewards Club points",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 99,
      cardFeeVisual: "99",
      imageName: "ihg-premier.jpg", 
      minSpend: 1,
      minSpendVisual: "1",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg-premium"
    },
    {
      cardName: "Marriott Rewards MasterCard",
      cardStatus: 1,
      cardBonus: 10000,
      cardBonusVisual: 10000,
      bonusValue: 55,
      bonusCurrency: "marriott",
      bonusCurrencyVisual: "Marriott Rewards points",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 125,
      cardFeeVisual: "125",
      imageName: "marriott.jpg", 
      minSpend: 200,
      minSpendVisual: "200",
      spendTimeLimit: 180,
      spendTimeLimitVisual: "180",
      spendTimeLimitDays: "days",
      cardURL: "https://apply.creation.co.uk/microsites/marriott/?termsAndConditionsCode=MC5307&MC=29990017&operatorCode=WebMC&responseCode=MRRHP4"
    },
    {
      cardName: "American Express Preferred Rewards Gold",
      cardStatus: 1,
      cardBonus: 10000,
      cardBonusVisual: 10000,
      bonusValue: 100,
      bonusCurrency: "spg",
      bonusCurrencyVisual: "SPG points",
      cardFeeSymbol: "£",
      minSpendSymbol: "£",
      cardFee: 75,
      cardFeeVisual: "75",
      imageName: "spg.jpg", 
      minSpend: 1000,
      minSpendVisual: "1000",
      spendTimeLimit: 90,
      spendTimeLimitVisual: "90",
      spendTimeLimitDays: "days",
      cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
    }
  ];

  $scope.filters = [
    {
            'filterId': 0,
            'anchor': 'All cards'
        },
        {
            'filterId': 1,
            'anchor': 'American Express cards'
        },
    {
      'filterId': 2,
      'anchor': 'Avios cards'
    },
    {
      'filterId': 3,
      'anchor': 'No fee'
    },
    {
      'filterId': 4,
      'anchor': 'No minimum spend'
    }
  ];

  /* Set first filter link to default */
  $scope.selectedIndex = 0; 
  
  /* Update active class for filter links on click */
  $scope.selectFilter = function(i) { 
    $scope.selectedIndex=i;
  };

  $scope.updateStatus = function(i) {

      var cards = $scope.cards;

      switch(i) {
        case 1:
          console.log('amex only');
          angular.forEach(cards, function(card) {
            if (card.bonusCurrency === 'amex') {
              card.cardStatus = 1;
            } else {
              card.cardStatus = 0;
            }
          });
          break;
        case 2:
          console.log('avios only');
          angular.forEach(cards, function(card) {
            if (card.bonusCurrency === 'avios') {
              card.cardStatus = 1;
            } else {
              card.cardStatus = 0;
            }
          });
          break;
        case 3:
          console.log('no fee');
          angular.forEach(cards, function(card) {
            if (card.cardFee === 0) {
              card.cardStatus = 1;
            } else {
              card.cardStatus = 0;
            }
          });
          break;
        case 4:
          console.log('no min spend');
          angular.forEach(cards, function(card) {
            if (card.minSpend === 0) {
              card.cardStatus = 1;
            } else {
              card.cardStatus = 0;
            }
          });
          break;
        default:
            console.log('reset all');
            angular.forEach(cards, function(card) {
              card.cardStatus = 1;
        });
    }
  };

  $scope.cardFilter = function(cardStatus){
    if (cardStatus === 1) {
      return true;
    }
    return false;
  };

  $scope.updateAvios = function() {

    /* Get avios value */
    var val = $scope.control.avios;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'avios')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateAmex = function() {

    /* Get amex value */
    var val = $scope.control.amex;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'amex')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateSpg = function() {

    /* Get spg value */
    var val = $scope.control.spg;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'spg')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateVirgin = function() {

    /* Get virgin value */
    var val = $scope.control.virgin;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'virgin')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateMarriott = function() {

    /* Get marriott value */
    var val = $scope.control.marriott;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'marriott')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateIhg = function() {

    /* Get ihg value */
    var val = $scope.control.ihg;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'ihg')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus;
    });
  };

  $scope.updateHilton = function() {

    /* Get hilton value */
    var val = $scope.control.hilton;

    /* Get card array */
    var cards = $scope.cards;
    angular.forEach(cards, function(card) {
      if (card.bonusCurrency === 'hilton')

        /* Update card bonus value */
        card.bonusValue = val * card.cardBonus * 100;
    });
  };

  // Set default card sort criteria
  $scope.predicate = "-bonusValue";

}]);
