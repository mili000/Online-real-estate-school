angular.module('indexCtrl',[])
    .controller('indexCtrl',['$scope','$modal', '$log',function($scope,$modal, $log) {
        document.getElementById('list').onmouseover = function (e) {
            if (e.target.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fade-text';
                e.target.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fade-box2';
            } else if (e.target.parentNode.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fade-text';
                e.target.parentNode.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fade-box2';
            } else if (e.target.parentNode.parentNode.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fade-text';
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fade-box2';
            }
        };
        document.getElementById('list').onmouseout = function (e) {
            if (e.target.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fadeOut-box';
                e.target.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fadeOut-box2';
            } else if (e.target.parentNode.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fadeOut-box';
                e.target.parentNode.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fadeOut-box2';
            } else if (e.target.parentNode.parentNode.parentNode.nodeName.toLocaleLowerCase() == 'li') {
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conOne')[0].className = 'conOne fadeOut-box';
                e.target.parentNode.parentNode.parentNode.getElementsByClassName('conTwo')[0].className = 'conTwo fadeOut-box2';
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
        // list
        $scope.items = [ 'angularjs', 'backbone', 'canjs', 'Ember', 'react' ];
        $scope.animationsEnabled=true;
        // open click
        $scope.open = function(size) {
            var modalInstance = $modal.open({
                animation:$scope.animationsEnabled,
                templateUrl : '../model/login.html',
                controller : 'ModalInstanceCtrl', // specify controller for modal
                backdrop: "true",
                size : size,
                resolve : {
                    items : function() {
                        return $scope.items;
                    }
                }
            });
            // modal return result
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            });
        }
    }]).controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

    $scope.items = items;

    $scope.selected = {
        item : $scope.items[0]
    };
    // ok click
    $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
    };
    // cancel click
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
}).directive('draggable', ['$document', function($document) {
        return function(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0,x1= 0,x2=0;
            element= angular.element(document.getElementsByClassName("modal-dialog"));
            element.css({
                //position: 'relative',
                //cursor: 'move'
            });

            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                //event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);

            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                console.log($(window).height());
                if(x<-($(window).width()/2-180)){
                    x=-($(window).width()/2-180);
                }
                if(x>($(window).width()/2-180)){
                    x=$(window).width()/2-180;
                }
                if(y<-170){
                    y=-170;
                }
                if(y>($(window).height()-430)){
                    y=($(window).height()-430)
                }
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                //$document.off('mouseup', mouseup);
            }
        };
    }]);
