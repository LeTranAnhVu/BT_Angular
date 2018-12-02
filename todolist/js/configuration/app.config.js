app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: "/views/home.html",
        })
        .when('/bangluong',{
            templateUrl: "views/bangluong.html",
            controller: 'BangLuong'
        })
        .when('/todo',{
            templateUrl: "views/todo.html",
            controller: 'ToDoList'
        })
        .when('/langvoting',{
            templateUrl: "views/langvoting.html",
            controller: 'LangVoting'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);