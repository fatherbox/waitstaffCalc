var app = angular.module('plunker', ['ngRoute', 'ngAnimate']);
app.constant('VERSION', 1.1);
app.config(['$routeProvider', function ($routeProvider)
{
  $routeProvider.when('/', {
    templateUrl : 'home.html',
    controller: 'MainCtrl'
  })
      .when('/newMeal',
      {
        templateUrl: 'newMeal.html',
        controller: 'MainCtrl'

      })
      .when('/myEarnings',
      {
        templateUrl: 'myEarnings.html',
        controller: 'MainCtrl'

      })
      .otherwise({templateUrl: 'home.html',
        controller: 'MainCtrl'});

}])
app.controller('MainCtrl', function($rootScope, $scope) {
  
  //customer charge values
  $rootScope.values = $rootScope.values || {};
  $rootScope.values.taxRate = $rootScope.values.taxRate || 0;
  $rootScope.values.mealPrice = $rootScope.values.mealPrice || 0;
  $rootScope.values.tipPercent = $rootScope.values.tipPercent || 0;

  $rootScope.values.subtotal = $rootScope.values.subtotal || 0;
  $rootScope.values.tipCash = $rootScope.values.tipCash || 0;
  $rootScope.values.totalBill =$rootScope.values.totalBill || 0;
  
  //my earnings info
  $rootScope.values.tipTotal = $rootScope.values.tipTotal || 0;
  $rootScope.values.mealCount = $rootScope.values.mealCount || 0;
  $rootScope.values.avgTip = $rootScope.values.avgTip || 0;
  
  $scope.submitForm = function ()
  {
    if (isNaN($rootScope.values.mealPrice) || isNaN($rootScope.values.taxRate) || isNaN($rootScope.values.tipPercent))
    {
      $rootScope.values.errMessage = "Please make sure all 3 values are numbers."
      return;
    }
    
    $rootScope.values.subtotal = $rootScope.values.mealPrice * (1 + $rootScope.values.taxRate / 100);
    $rootScope.values.tipCash = $rootScope.values.subtotal * ($rootScope.values.tipPercent / 100);
    $rootScope.values.totalBill = $rootScope.values.subtotal + $rootScope.values.tipCash;
    
    $rootScope.values.mealCount ++;
    $rootScope.values.tipTotal += $rootScope.values.tipCash;
    $rootScope.values.avgTip = ($rootScope.values.tipTotal / $rootScope.values.mealCount) || 0;
    
     $rootScope.values.errMessage = "";
    
   // $rootScope.values.clearForm();
    
  }
  $scope.clearMeal = function ()
  {
    $rootScope.values.mealPrice = undefined;
    $rootScope.values.taxRate = undefined;
    $rootScope.values.tipPercent = undefined;
   
    
    
  }
  $scope.clearAll = function()
  {
    $scope.clearMeal()
    
     $rootScope.values.subtotal = 0;
  $rootScope.values.tipCash = 0;
  $rootScope.values.totalBill = 0;
  
  //my earnings info
  $rootScope.values.tipTotal = 0;
  $rootScope.values.mealCount = 0;
  $rootScope.values.avgTip = 0;
    
  }
});
app.run(function(VERSION, $rootScope) {
        $rootScope.version = VERSION;
      
    });