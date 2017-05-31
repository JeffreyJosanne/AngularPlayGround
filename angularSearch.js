angular.module('mjFilter', ['ui.bootstrap']);
angular.module('mjFilter').controller('mjFilterCtrl', function ($scope) {
  
  $scope.userlist = 
      [{id:'001',name:'EventA',desc:"Madurai",jdate:"05-31-2017"},
       {id:'002', name:'EventB',desc:"Chennai",jdate:"05-31-2017"},
           {id:'003', name:'EventC',desc:"Singapore",jdate:"05-14-2021"},
           {id:'004', name:'Event D',desc:"Edinburgh",jdate:"09-11-2017"}];

          $scope.addRow = function(){    
          $scope.userlist.push({ 'name':$scope.name, 'desc': $scope.desc, 'jdate':$scope.jdate });
          $scope.name='';
          $scope.descsc='';
          $scope.jdate='';
          };
          $scope.removeRow = function(name){        
          var index = -1;   
          var array = eval( $scope.userlist );
          for( var i = 0; i < array.length; i++ ) {
           if( array[i].name === name ) {
             index = i;
             break;
           }   
          };
          $scope.userlist.splice( index, 1 ); 
          };
  
  $scope.changeSelect= function(dt){
    $scope.changeDate= moment(dt).format("MM-DD-YYYY");
  }
  
  
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MM-dd-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  
  
  
  
  
});