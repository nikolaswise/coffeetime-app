angular.module('starter.controllers', [])

.controller('MeCtrl', function($scope, Me, Group) {
  Group.fetch().success(function(data) {
    $scope.group = data;
    $scope.minDebt = 30;
    $scope.maxDebt = 30;
  });

  Me.fetch().success(function(data) {
    $scope.user = data;
    $scope.balance = data.user_balance;
  });
})

.controller('ExchangeCtrl', function($scope, Group) {
  Group.fetch().success(function(data) {
    $scope.group = data;
  });
})

.controller('TransactionCtrl', function($scope, $stateParams, Group) {
  $scope.user = Group.get($stateParams.userID);
  $scope.number = 0;
  $scope.increment = function(number){
    $scope.number = $scope.number + number;
  };
})

.controller('GroupDetailCtrl', function($scope, Group) {
  Group.fetch().success(function(data) {
    $scope.group = data;
  });
})

.controller('AuthCtrl', function($scope, Session, $state) {
  $scope.signIn = function(){
    Session.signIn().success(function(){
      $state.go("tab.me");
    });
  };
})

.controller('GroupsCtrl', function($scope, Session, Group){

});