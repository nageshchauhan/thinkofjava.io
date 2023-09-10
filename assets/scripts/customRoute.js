myApp.config(function($routeProvider){
  
  
  $routeProvider
    .when('/menu/:menuName/:fileName',{templateUrl: function(urlAttr){return '../../views/'+urlAttr.menuName+'/'+urlAttr.fileName+'.html'}, controller:'ContentController'})
  .when('/intro',{templateUrl:'../../views/Introduction.html', controller:'ContentController'})
    .otherwise({redirectTo:'/intro'});
});