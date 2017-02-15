angular.module('routerApp',['ui.router','allApp','finishApp','unfinishApp','requiredApp','followApp','profileApp'])
    .config(function ($stateProvider) {
        $stateProvider.state('index',{
            url:'/personalCenter',
            templateUrl:'router/index/index.html'
        }).state('index.all',{
            url:'/all',
            templateUrl:'router/index/all.html',
            controller:'allCtrl'
        }).state('index.finish',{
            url:'/finish',
            templateUrl:'router/index/finish.html',
            controller:'finishCtrl'
        }).state('index.unfinish',{
            url:'/unfinish',
            templateUrl:'router/index/unfinish.html',
            controller:'finishCtrl'
        }).state('index.required',{
            url:'/required',
            templateUrl:'router/index/required.html',
            controller:'requiredCtrl'
        }).state('index.follow',{
            url:'/follow',
            templateUrl:'router/index/follow.html',
            controller:'followCtrl'
        });
        $stateProvider.state('profile',{
            url:'/profile',
            templateUrl:'router/profile/profile.html',
            controller:'profileCtrl'
        });
    });
