angular.module('myRoute',['ui.router','ngAnimate'])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('index',
            {   url:'/',
                templateUrl:'../index/index.html',
                controller:'indexCtrl'
            }
        );
        $stateProvider.state('personalCenter',
            {   url:'/personalCenter',
                templateUrl:'../personalCenter/personalCenter.html',
                controller:'personalCenterCtrl'
            }).state('personalCenter.index',
            {   url:'/index',
                templateUrl:'../personalCenter/router/index/index.html'
            }).state('personalCenter.index.all',
            {   url:'/all',
                templateUrl:'../personalCenter/router/index/all.html'
            }).state('personalCenter.index.finish',
            {   url:'/finish',
                templateUrl:'../personalCenter/router/index/finish.html'
            }).state('personalCenter.index.unfinish',
            {   url:'/unfinish',
                templateUrl:'../personalCenter/router/index/unfinish.html'
            }).state('personalCenter.index.required',
            {   url:'/required',
                templateUrl:'../personalCenter/router/index/required.html'
            }).state('personalCenter.index.follow',
            {   url:'/follow',
                templateUrl:'../personalCenter/router/index/follow.html'
            }).state('personalCenter.profile',
            {   url:'/profile',
                templateUrl:'../personalCenter/router/profile/profile.html',
                controller:'profileCtrl'
            });
        $stateProvider.state('courses',
            {   url:'/courses',
                templateUrl:'../courses/courses.html',
                controller:'coursesCtrl'
            });
    });