angular.module('coursesCtrl',[])
    .controller('coursesCtrl',['$scope','$modal','$log',function($scope,$modal,$log){
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
    }]).controller('ModalInstanceCtrl2', function($scope, $modalInstance, items) {

    $scope.items = items;

    $scope.selected = {
        item : $scope.items[1]
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
            cursor: 'move'
        });

        element.on('mousedown', function(event) {
            // Prevent default dragging of selected content
            event.preventDefault();
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
            $document.off('mouseup', mouseup);
        }
    };
}]);

//}]);