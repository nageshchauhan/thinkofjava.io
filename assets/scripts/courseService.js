myApp.factory('courseFactory', function ($http) {

  var fetch = function() {
    return $http.get('/assets/scripts/data.json');
  };
  
  return{
    getCourses: fetch
  }
});

myApp.service('courseService',function(){
  var subMenuSelected;
  
  this.setSubMenuSelected = function(subMenu){
    this.subMenuSelected = subMenu;
  };
  
  this.getSubMenuSelected = function(){
    return this.subMenuSelected;
  };
});