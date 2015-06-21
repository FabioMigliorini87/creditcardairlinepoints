describe('mainController', function() {
  beforeEach(module('creditcardApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.cards[0].cardName', function() {
    it('should equal \'American Express Preferred Rewards Gold\'', function() {

      var $scope = {};
      var controller = $controller('mainController', { $scope: $scope });

      expect($scope.cards[0].cardName).to.equal('American Express Preferred Rewards Gold');

    });
  });
});