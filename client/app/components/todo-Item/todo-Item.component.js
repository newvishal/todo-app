

(function(){
    angular.module('todo-app')
    .component('todoItem' , {
            bindings : {
                    // give a power to receive data from parent 
                    todo : "="   // like work controller $ctrl.todo 
            },
            controller : function(){
                   
            },
            templateUrl : 'app/components/todo-Item/todo-Item.component.html'
    })
})();