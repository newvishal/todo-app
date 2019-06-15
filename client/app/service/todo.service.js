

(function(){
        angular.module('todo-app')
        .factory('TodoService',['$http',TodoService]);

        function TodoService($http){
                var apiBaseUrl = 'http://localhost:3000';

                function getTodos(){
                        return $http.get(
                            apiBaseUrl + '/api/todos'
                        );
                }

                return {
                        getTodos : getTodos
                };
        }
}());