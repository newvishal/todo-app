

(function(){
    angular.module('todo-app')
    .component('todo' , {
            controller : function(TodoService){
                    var $ctrl = this;
                    $ctrl.todoList = [];
                    $ctrl.$onInit = function(){
                        TodoService.getTodos()
                        .then(function(response){
                            $ctrl.todoList = response.data.todos;
                        },function(error){
                            console.log(error);
                        });
                    }
            },
            templateUrl : 'app/components/todo/todo.component.html'
    })
})();