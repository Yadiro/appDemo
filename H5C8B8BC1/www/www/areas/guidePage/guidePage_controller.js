angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl',function ($scope,$ionicActionSheet,$state,$ionicModal,$ionicSlideBoxDelegate) {

    //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });

    $scope.func_goHome=function(){
      localStorage["isFirst"]=true;
      $state.go('tab.home');
    }

  })
