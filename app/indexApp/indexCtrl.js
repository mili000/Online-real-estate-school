angular.module('indexCtrl',[])
    .controller('indexCtrl',['$scope','$location',function($scope,$location){
        document.getElementById('list').onmouseover=function(e){
            if(e.target.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.getElementsByClassName('conOne')[0].className='conOne fade-text';
                e.target.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fade-box2';
            }else if(e.target.parentNode.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.parentNode.getElementsByClassName('conOne')[0].className='conOne fade-text';
                e.target.parentNode.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fade-box2';
            }else if(e.target.parentNode.parentNode.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conOne')[0].className='conOne fade-text';
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fade-box2';
            }
        };
        document.getElementById('list').onmouseout=function(e){
            if(e.target.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.getElementsByClassName('conOne')[0].className='conOne fadeOut-box';
                e.target.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fadeOut-box2';
            }else if(e.target.parentNode.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.parentNode.getElementsByClassName('conOne')[0].className='conOne fadeOut-box';
                e.target.parentNode.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fadeOut-box2';
            }else if(e.target.parentNode.parentNode.parentNode.nodeName.toLocaleLowerCase()=='li'){
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conOne')[0].className='conOne fadeOut-box';
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conTwo')[0].className='conTwo fadeOut-box2';
            }
        };

            var swiper = new Swiper('.swiper-container1', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 1,
                loop: true,
                autoplay: 2000,
                //ҳ�����ɵ�����
                pagination: '.swiper-pagination',
                //�ɵ��ҳ��
                paginationClickable: true,
                //paginationHide: true
                paginationBulletRender: function (index, cname) {
                    return '<span class="' + cname + '">' + '</span>'
                }
            });
        //})
            $location.path('/#/');
    }]);