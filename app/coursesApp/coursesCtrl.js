angular.module('coursesCtrl',[])
    .controller('coursesCtrl',['$scope',function($scope){
        $scope.showing=false;
        var courseList=document.getElementsByClassName('courseList')[0];
        courseList.onmouseover=function(e){
            if(e.target.parentNode.nodeName.toLowerCase()=='li'){
                e.target.getElementsByClassName('normal')[0].style.display='none';
                e.target.getElementsByClassName('active')[0].style.display='block';

            }else if(e.target.parentNode.parentNode.nodeName.toLowerCase()=='li'){
                e.target.parentNode.getElementsByClassName('normal')[0].style.display='none';
                e.target.parentNode.getElementsByClassName('active')[0].style.display='block';
            }else if(e.target.parentNode.parentNode.parentNode.nodeName.toLowerCase()=='li'){
                e.target.parentNode.parentNode.getElementsByClassName('normal')[0].style.display='none';
                e.target.parentNode.parentNode.getElementsByClassName('active')[0].style.display='block';
            }
        };
        courseList.onmouseout=function(e){
            if(e.target.parentNode.nodeName.toLowerCase()=='li'){
                e.target.getElementsByClassName('normal')[0].style.display='block';
                e.target.getElementsByClassName('active')[0].style.display='none';
            }else if(e.target.parentNode.parentNode.nodeName.toLowerCase()=='li'){
                e.target.parentNode.getElementsByClassName('normal')[0].style.display='block';
                e.target.parentNode.getElementsByClassName('active')[0].style.display='none';
            }else if(e.target.parentNode.parentNode.parentNode.nodeName.toLowerCase()=='li'){
                e.target.parentNode.parentNode.getElementsByClassName('normal')[0].style.display='block';
                e.target.parentNode.parentNode.getElementsByClassName('active')[0].style.display='none';
            }
        };
        //var imgC=document.getElementsByClassName('imgContainer')[0];
        //var aDiv=imgC.getElementsByClassName('imgItem');
        //var pre=document.getElementsByClassName('pre')[0];
        //var next=document.getElementsByClassName('next')[0];
        //var arr=[-130,2,134,266,398,530,662,794,926,1058,1190,1322];
        ////var num;
        //var timer=setInterval(function(){
        //    for(var i=0;i<aDiv.length;i++){
        //        aDiv[i].style.left=aDiv[i].offsetLeft-132+'px';
        //        if(aDiv[i].offsetLeft<=(-130)){
        //            aDiv[i].className='imgItem';
        //            aDiv[i].style.left='1322px';
        //        }else{
        //            aDiv[i].className='imgItem fadeIn';
        //        }
        //    }
        //},2000);
        //pre.onclick=function(e){
        //    clearInterval(timer);
        //    for(var i=0;i<aDiv.length;i++){
        //        aDiv[i].style.left=aDiv[i].offsetLeft+132+'px';
        //        for(var j=0;j<arr.length;j++){
        //            if(aDiv[i].offsetLeft-arr[j]>-132&&aDiv[i].offsetLeft-arr[j]<0){
        //                num=aDiv[j].offsetLeft-arr[j];
        //                console.log(num);
        //            }
        //        }
        //        if(aDiv[i].offsetLeft>(1190)){
        //            aDiv[i].className='imgItem';
        //            aDiv[i].style.left='-262px';
        //        }else if(aDiv[i].offsetLeft>(1058)){
        //            aDiv[i].className='imgItem';
        //            aDiv[i].style.left='-130px';
        //        }else{
        //            aDiv[i].className='imgItem fadeIn';
        //        }
        //    }
        //};
        //pre.onmouseout=function(e){
        //    //console.log(0);
        //    clearInterval(timer);
        //    timer=setInterval(function(){
        //        for(var i=0;i<aDiv.length;i++){
        //            aDiv[i].style.left=aDiv[i].offsetLeft+132+'px';
        //            for(var j=0;j<arr.length;j++){
        //                if(aDiv[i].offsetLeft-arr[j]>-132&&aDiv[i].offsetLeft-arr[j]<0){
        //                    num=aDiv[j].offsetLeft-arr[j];
        //                    //console.log(num);
        //                }
        //            }
        //            if(aDiv[i].offsetLeft<=(-262+num)){
        //                aDiv[i].className='imgItem';
        //                aDiv[i].style.left='1322px';
        //            }else{
        //                aDiv[i].className='imgItem fadeIn';
        //            }
        //        }
        //    },2000);
        //}
        //imgC.onmouseover=function(e){
        //    clearInterval(timer);
        //};
        //imgC.onmouseout=function(e){
        //    clearInterval(timer);
        //    timer=setInterval(function(){
        //        for(var i=0;i<aDiv.length;i++){
        //            aDiv[i].style.left=aDiv[i].offsetLeft-132+'px';
        //            if(aDiv[i].offsetLeft<=(-130)){
        //                aDiv[i].className='imgItem';
        //                aDiv[i].style.left='1322px';
        //            }else{
        //                aDiv[i].className='imgItem fadeIn';
        //            }
        //        }
        //    },2000);
        //}


    }]);