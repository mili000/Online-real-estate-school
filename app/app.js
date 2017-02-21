angular.module('app',['myRoute','indexApp','personalCenterApp','coursesApp'])
    .config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function (obj) {
            var str = [];
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
//.controller('bottom',['$scope',function($scope){
//    $scope.image=['../img/courses/4a53aa995d6d19c81802d36c.jpg',
//        '../img/courses/7fabdf687a16b951841a797f.jpg',
//        '../img/courses/8fa1c6dbd9f5980d827de1f4.jpg',
//        '../img/courses/96c2ff3dc2d4c12d4da55f00 (1).jpg',
//        '../img/courses/8fa1c6dbd9f5980d827de1f4.jpg',
//        '../img/courses/482a0af59262bf38db59e904.jpg',
//        '../img/courses/8fa1c6dbd9f5980d827de1f4.jpg',
//        '../img/courses/683f6ab6eb6e10daf43d6623.jpg',
//        '../img/courses/875b3f4880b36c9568fe2059.jpg',
//        '../img/courses/4a53aa995d6d19c81802d36c.jpg',
//        '../img/courses/7fabdf687a16b951841a797f.jpg',
//        '../img/courses/8fa1c6dbd9f5980d827de1f4.jpg']
//}])