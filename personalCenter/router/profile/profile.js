angular.module('profileApp',[])
    .controller('profileCtrl',['$scope','$http',
        function ($scope,$http) {
                $scope.arrY=[];
                $scope.numY=1960;
                for(var k = 0;k<2017-1960;k++){
                        $scope.arrY[k]=$scope.numY;
                        $scope.numY++;
                }
                $scope.arrM=[];
                for(var i = 1;i<13;i++){
                        $scope.arrM[i-1]=i;
                }
                //默认
                $scope.valY=2016;
                $scope.val=1;
                $scope.arrD=[];
                for(var q = 1;q<32;q++){
                        $scope.arrD[q-1]=q;
                }
                //改变
                var mouth =1;
                 $scope.changeY=function(valY) {
                         if(valY%4==0&&valY%100!==0){
                                 var February=30;
                         }else if(valY%400==0){
                                 var February=30;
                         }else {
                                 var February=29;
                         }
                         if(mouth == 2){
                                 $scope.arrD = [];
                                 for (var q = 1; q < February; q++) {
                                         $scope.arrD[q - 1] = q;
                                 }
                         }
                         $scope.change = function (data) {
                                 mouth = data;
                                 if (data == 4 || data == 6 || data == 9 || data == 11) {
                                         $scope.day = 31;
                                 } else if (data == 1 || data == 3 || data == 5 || data == 7 || data == 8 || data == 10 || data == 12) {
                                         $scope.day = 32;
                                 } else {
                                         $scope.day =February;
                                 }
                                 $scope.arrD = [];
                                 for (var q = 1; q < $scope.day; q++) {
                                         $scope.arrD[q - 1] = q;
                                 }
                         };
                 };
                $scope.change = function (data) {
                        mouth = data;
                        if (data == 4 || data == 6 || data == 9 || data == 11) {
                                $scope.day = 31;
                        } else if (data == 1 || data == 3 || data == 5 || data == 7 || data == 8 || data == 10 || data == 12) {
                                $scope.day = 32;
                        } else {
                                $scope.day =30;
                        }
                        $scope.arrD = [];
                        for (var q = 1; q < $scope.day; q++) {
                                $scope.arrD[q - 1] = q;
                        }
                };
        }]);