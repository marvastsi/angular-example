angular.module('app.components.ViewController', [])
.controller('ViewController', ['$http', function($http) {
  var vc = this;
  var id = 11;
  var cache;

  vc.add = add;
  vc.edit = edit;
  vc.remove = remove;
  vc.cancel = cancel;
  vc.isEditing = isEditing;

  vc.employees = $http.get('assets/data/employees.json')
    .then(
      function(response){
        vc.employees = response.data;
      },
      function(response){
        console.log(response.data);
      });

  function add () {
    if(!vc.employee.id) {
      vc.employee.id = id++;
      vc.employees.push( vc.employee );
      //$http.put('', vc.employee);
    }

    vc.employee = {}; // new Object();
  }

  function edit (employee) {
    cache = angular.copy(employee);
    vc.employee = employee;
    //$http.post('', employee);
  }

  function cancel () {
    if (cache.id) {
      angular.copy(cache, vc.employee);
    }
    cache = {};
    vc.employee = {};
  }
  
  function isEditing () {
    return (vc.employee != null && vc.employee.id);
  }

  function remove (employee) {
    //$http.delete('', employee);
    vc.employees = vc.employees.filter(function (f) {
      return employee != f;
    })
  }
}]);