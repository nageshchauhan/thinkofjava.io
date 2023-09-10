myApp.controller('ContentController', ['$rootScope', '$scope', 'courseService', function ($rootScope, $scope, courseService) {
  
  $scope.pageHeader = courseService.getSubMenuSelected();
//  var customeEventListener = $scope.$on('SubMenuClicked', function (event, data) {
//    console.log("pageHeader",data)
//    //$scope.pageHeader = data;
//    console.log("pageHeaderfromService ",courseService.getSubMenuSelected());
//  });
//  
//  $scope.$on('$destroy', function () {
//    customeEventListener();
//  });
}]);