var app = angular.module('plunker', []);
app.constant('VERSION', 1.1);
app.controller('MainCtrl', function($scope) {
  
  //customer charge values
  $scope.subtotal = 0;
  $scope.tipCash = 0;
  $scope.totalBill = 0;
  
  //my earnings info
  $scope.tipTotal = 0;
  $scope.mealCount = 0;
  $scope.avgTip = 0;
  
  $scope.submitForm = function ()
  {
    if (isNaN($scope.mealPrice) || isNaN($scope.taxRate) || isNaN($scope.tipPercent))
    {
      $scope.errMessage = "Please make sure all 3 values are numbers."
      return;
    }
    
    $scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate / 100);
    $scope.tipCash = $scope.subtotal * ($scope.tipPercent / 100);
    $scope.totalBill = $scope.subtotal + $scope.tipCash;
    
    $scope.mealCount ++;
    $scope.tipTotal += $scope.tipCash;
    $scope.avgTip = ($scope.tipTotal / $scope.mealCount) || 0;
    
     $scope.errMessage = "";
    
   // $scope.clearForm();
    
  }
  $scope.clearMeal = function ()
  {
    $scope.mealPrice = undefined;
    $scope.taxRate = undefined;
    $scope.tipPercent = undefined;
   
    
    
  }
  $scope.clearAll = function()
  {
    $scope.clearMeal()
    
     $scope.subtotal = 0;
  $scope.tipCash = 0;
  $scope.totalBill = 0;
  
  //my earnings info
  $scope.tipTotal = 0;
  $scope.mealCount = 0;
  $scope.avgTip = 0;
    
  }
});
app.run(function(VERSION, $rootScope) {
        $rootScope.version = VERSION;
      
    });