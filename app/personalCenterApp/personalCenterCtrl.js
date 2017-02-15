angular.module('personalCenterCtrl',[])
    .controller('personalCenterCtrl',['$scope',function($scope){
        //早上中午晚上好
        var userTop = document.getElementById('userTop');
        var timeNow = new Date().getHours();
        if(timeNow>=0&&timeNow<3){
            userTop.innerHTML='夜间好';
        }else if(timeNow>=3&&timeNow<6){
            userTop.innerHTML='凌晨好';
        }else if(timeNow>=6&&timeNow<8){
            userTop.innerHTML='早上好';
        }else if(timeNow>=8&&timeNow<11){
            userTop.innerHTML='上午好';
        }else if (timeNow>=11&&timeNow<13){
            userTop.innerHTML='中午好';
        }else if (timeNow>=13&&timeNow<17){
            userTop.innerHTML='下午好';
        }else if (timeNow>=17&&timeNow<23){
            userTop.innerHTML='晚上好';
        }else if (timeNow>=23&&timeNow<25){
            userTop.innerHTML='夜间好';
        }
//签到
        var checkIn = document.getElementById('checkIn');
        var score = document.getElementById('score');
        var flag = 1,scoreNum = 10;
        checkIn.onclick=function () {
            if(flag){
                flag=0;
                scoreNum++;
                checkIn.style.backgroundColor='#f0f0f0';
                checkIn.style.color='#ff9125';
                checkIn.innerHTML='已签到';
                score.innerHTML='可用积分：'+scoreNum;
            }
        };
//左侧路由点击颜色变化
        var content = document.getElementsByClassName('content');
//默认
 content[0].getElementsByTagName('a')[0].style.color = '#fff';
 content[0].getElementsByTagName('a')[0].style.backgroundColor = '#666';
 content[0].getElementsByTagName('a')[0].flag = 0;
 for(var m = 1; m < content.length;m++){
     content[m].getElementsByTagName('a')[0].flag =1;
 }
//点击
 for(var i = 0; i < content.length; i++){
     content[i].onclick = function () {
         for(var j = 0 ; j < content.length; j++){
             var contentA = content[j].getElementsByTagName('a')[0];
             contentA.style.backgroundColor = '#fff';
             contentA.style.color = '#555';
             contentA.flag = 1;
         }
         var thisA = this.getElementsByTagName('a')[0];
         thisA.style.color = '#fff';
         thisA.style.backgroundColor = '#666';
         thisA.flag = 0;
     };
 }
//滑动
 for(var k = 0; k < content.length; k++){
     content[k].onmouseover = function () {
         var thisA = this.getElementsByTagName('a')[0];
         thisA.style.color = '#fff';
         thisA.style.backgroundColor = '#666';
     };
     content[k].onmouseout = function () {
         var thisA = this.getElementsByTagName('a')[0];
         if(thisA.flag){
             thisA.style.color = '#555';
             thisA.style.backgroundColor = '#fff';
         }
     };
 }
    }]);