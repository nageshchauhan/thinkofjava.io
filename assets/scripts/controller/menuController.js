myApp.controller('MenuController', ['$rootScope', '$scope', '$location', 'courseService', 'courseFactory', function ($rootScope, $scope, $location, courseService, courseFactory) {

  courseFactory.getCourses().then(function (data) {
    $scope.menus = data.data;
  });
  
  $scope.toggleMenu = function (menuId) {

    angular.forEach($scope.menus, function (menu) {
      if (menu.id === menuId) {
        menu.isVisible = !menu.isVisible;
      } else {
        menu.isVisible = false;
      }
    });
  };
  
  $scope.loadContent = function (menuId, subMenuId) {

    angular.forEach($scope.menus, function (menu) {
      if (menu.id === menuId) {
        angular.forEach(menu.subMenus, function (subMenu) {
          if (subMenu.id === subMenuId) {
            //console.log('User clicked on ', subMenu.name +' '+subMenuId +' '+subMenu.link);
            
            //$rootScope.$broadcast('SubMenuClicked', subMenu);
            courseService.setSubMenuSelected(subMenu);
            $location.path('/menu/' + menu.menuName + '/' + subMenu.link);
            return;
          }
        });
      }
    });
  };
 
}]);