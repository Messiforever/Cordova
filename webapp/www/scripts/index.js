(function () {
    var app = angular.module("myApp",['ui.router','ionic']);
    app.controller("myAppController",["$scope",function ($scope) {
        $scope.$on("$stateChangeSuccess",function (event,tostate,toParmas,formState,formparmas) {
            if(tostate.name == "map"){
                document.querySelector('.homeNav').style.display = "none";
                document.querySelector('.bottomNav').style.display = "none";
                setTimeout(function () {
                    var map = new BMap.Map("allmap");
                    map.centerAndZoom(new BMap.Point(116.331398,39.897445),13);
                    map.enableScrollWheelZoom(true);
                    // 用经纬度设置地图中心点
                    map.clearOverlays();
                    var new_point = new BMap.Point(116.331398,39.897445);
                    var marker = new BMap.Marker(new_point);  // 创建标注
                    map.addOverlay(marker);              // 将标注添加到地图中
                    map.panTo(new_point);
                },100);
                setTimeout(function () {
                    var allmap = document.querySelector('#allmap');
                    document.querySelector('.top').style.visibility = "hidden";
                    document.querySelector('#map').style.color = "white";

                    console.log(allmap);
                    var winHeight=0;
                    if (window.innerHeight){
                        winHeight = window.innerHeight;}
                    else if ((document.body) && (document.body.clientHeight)){
                        winHeight = document.body.clientHeight;}
                    //通过Document对body进行检测，获取浏览器可视化高度
                    if (document.documentElement && document.documentElement.clientHeight){
                        winHeight = document.documentElement.clientHeight;
                        //DIV高度为浏览器窗口高度
                        allmap.style.height= winHeight +"px";

                    }

                },101)
            }
            else {
                setTimeout(function () {
                    document.querySelector('.top').style.visibility = "visible";
                    document.querySelector('#map').style.color = "#87919D";
                },101);

            }
            window.onresize=boxheight; //窗口或框架被调整大小时执行
            function boxheight() {
                var allmap = document.querySelector('#allmap');
                document.querySelector('.top').style.visibility = "hidden";
                document.querySelector('#map').style.color = "white";
                console.log(allmap);
                var winHeight=0;
                if (window.innerHeight){
                    winHeight = window.innerHeight;}
                else if ((document.body) && (document.body.clientHeight)){
                    winHeight = document.body.clientHeight;}
                //通过Document对body进行检测，获取浏览器可视化高度
                if (document.documentElement && document.documentElement.clientHeight){
                    winHeight = document.documentElement.clientHeight;
                    //DIV高度为浏览器窗口高度
                    allmap.style.height= winHeight +"px";

                }

            }
        });
        $scope.$on("$stateChangeSuccess",function (event,tostate,toParmas,formState,formparmas) {
            if(tostate.name == "home"){
                document.querySelector('.homeNav').style.display = "block";
                document.querySelector('.bottomNav').style.display = "block";
                setTimeout(function () {
                    document.querySelector('#home').style.color = "white";

                },101)
            }
            else {
                setTimeout(function () {
                    document.querySelector('#home').style.color = "#87919D";
                },101);

            }
        });
     $scope.uItem=[
         {
             'gallery':'img/01.png',
             'likeNum':312,
             'disNum':17

         },
         {
             'gallery':'img/02.jpg',
             'likeNum':422,
             'disNum':20

         },
         {
             'gallery':'img/03.png',
             'likeNum':622,
             'disNum':13

         },
         {
             'gallery':'img/04.jpg',
             'likeNum':156,
             'disNum':45

         },
         {
             'gallery':'img/05.png',
             'likeNum':789,
             'disNum':59
         },
         {
             'gallery':'img/06.jpg',
             'likeNum':254,
             'disNum':18

         },
         {
             'gallery':'img/07.png',
             'likeNum':526,
             'disNum':75

         },
         {
             'gallery':'img/08.jpg',
             'likeNum':718,
             'disNum':43

         },
         {
             'gallery':'img/09.png',
             'likeNum':795,
             'disNum':43

         },
         {
             'gallery':'img/10.jpg',
             'likeNum':529,
             'disNum':49

         },
         {
             'gallery':'img/11.jpg',
             'likeNum':418,
             'disNum':26

         },
         {
             'gallery':'img/12.png',
             'likeNum':936,
             'disNum':28

         },
         {
             'gallery':'img/13.jpg',
             'likeNum':852,
             'disNum':56

         },
         {
             'gallery':'img/14.jpg',
             'likeNum':526,
             'disNum':75

         },
         {
             'gallery':'img/15.png',
             'likeNum':713,
             'disNum':27

         },
         {
             'gallery':'img/16.png',
             'likeNum':984,
             'disNum':154

         },
         {
             'gallery':'img/17.jpg',
             'likeNum':535,
             'disNum':17

         },
         {
             'gallery':'img/18.png',
             'likeNum':783,
             'disNum':29

         },
         {
             'gallery':'img/19.jpg',
             'likeNum':589,
             'disNum':53

         },
         {
             'gallery':'img/20.jpg',
             'likeNum':189,
             'disNum':15

         },
         {
             'gallery':'img/21.png',
             'likeNum':897,
             'disNum':88

         },
         {
             'gallery':'img/22.png',
             'likeNum':235,
             'disNum':11

         },
         {
             'gallery':'img/23.jpg',
             'likeNum':859,
             'disNum':46

         },
         {
             'gallery':'img/24.png',
             'likeNum':698,
             'disNum':59

         },
         {
             'gallery':'img/25.png',
             'likeNum':742,
             'disNum':16

         },
         {
             'gallery':'img/26.jpg',
             'likeNum':354,
             'disNum':12

         },
         {
             'gallery':'img/27.png',
             'likeNum':953,
             'disNum':78

         },
         {
             'gallery':'img/28.jpg',
             'likeNum':148,
             'disNum':12

         },
         {
             'gallery':'img/29.png',
             'likeNum':894,
             'disNum':125

         },
         {
             'gallery':'img/30.png',
             'likeNum':359,
             'disNum':22
         }


     ];
     $scope.ViewBool = false;
     $scope.ChangeView = function () {
        var card = document.querySelectorAll('.cardContainer >.card');
        var like = document.querySelectorAll('.cardContainer >.card >.like');
        var likeNum = document.querySelectorAll('.cardContainer >.card >.like > div > a');
        var likeIcon = document.querySelectorAll('.cardContainer >.card >.like > div > a > label');

            if($scope.ViewBool === false){
                for(var i = 0;i<card.length;i++){
                    card[i].style.width = '95%';
                    card[i].style.height ='6rem';
                    like[i].style.lineHeight ='1.2rem';
                    likeNum[i].style.fontSize ='0.6rem';
                    likeIcon[i].style.fontSize ='0.8rem';
                }
                $scope.ViewBool = true;
            }
            else if($scope.ViewBool === true){
                for(var k = 0;k<card.length;k++){
                    card[k].style.width = '45%';
                    card[k].style.height ='3.2rem';
                    like[k].style.lineHeight ='0.64rem';
                    likeNum[k].style.fontSize ='0.3rem';
                    likeIcon[k].style.fontSize ='0.5rem';
                }
                $scope.ViewBool = false;
            }



     };
     $scope.address = [116.331398,39.897445];
     $scope.showBool = true;
     $scope.shouNavContent = function () {
              document.body.scrollTop=0;
         if($scope.showBool == false){
             $scope.showBool = true;
         }else {
             $scope.showBool = false;
         }

     };
     $scope.getarea=function(){
            baidumap_location.getCurrentPosition(function (result) {
                // alert(JSON.stringify(result, null, 4));
                var temp = JSON.stringify(result, null, 4);
                 var myaddr = eval('('+temp+')');
                $scope.address[0] = myaddr.longitude;
                $scope.address[1] = myaddr.latitude;
                var map = new BMap.Map("allmap");
                map.centerAndZoom(new BMap.Point($scope.address[0],$scope.address[1]),14);
                map.enableScrollWheelZoom(true);

                // 用经纬度设置地图中心点

                        map.clearOverlays();
                        var new_point = new BMap.Point($scope.address[0],$scope.address[1]);
                        var marker = new BMap.Marker(new_point);  // 创建标注
                        map.addOverlay(marker);              // 将标注添加到地图中
                        map.panTo(new_point);



                // var map = new BMap.Map("allmap");
                // var point = new BMap.Point( $scope.address[0],$scope.address[1]);
                // map.centerAndZoom(point,12);
                // var geoc = new BMap.Geocoder();
                //
                // map.addEventListener("click", function(e){
                //     var pt = e.point;
                //     geoc.getLocation(pt, function(rs){
                //         var addComp = rs.addressComponents;
                //         alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                //     });
                // });
                // alert((JSON.stringify(result, null, 4)).latitude);
            }, function (error) {
            });};
     $scope.showMap = function () {
            // var map = new BMap.Map("allmap");
            // var point = new BMap.Point( $scope.address[0],$scope.address[1]);
            // map.centerAndZoom(point,12);
            // var geoc = new BMap.Geocoder();
            //
            // map.addEventListener("click", function(e){
            //     var pt = e.point;
            //     geoc.getLocation(pt, function(rs){
            //         var addComp = rs.addressComponents;
            //         alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            //     });
            // });
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            map.centerAndZoom(new BMap.Point(116.331398,39.897445),14);
            map.enableScrollWheelZoom(true);

            // 用经纬度设置地图中心点


                    map.clearOverlays();
                    var new_point = new BMap.Point(116.331398,39.897445);
                    var marker = new BMap.Marker(new_point);  // 创建标注
                    map.addOverlay(marker);              // 将标注添加到地图中
                    map.panTo(new_point);






        };
     $scope.doRefresh = function() {
            setTimeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.uItem=[
                    {
                        'gallery':'img/30.png',
                        'likeNum':359,
                        'disNum':22
                    },
                    {
                        'gallery':'img/29.png',
                        'likeNum':894,
                        'disNum':125

                    },
                    {
                        'gallery':'img/26.jpg',
                        'likeNum':354,
                        'disNum':12

                    },

                    {
                        'gallery':'img/28.jpg',
                        'likeNum':148,
                        'disNum':12

                    },
                    {
                        'gallery':'img/27.png',
                        'likeNum':953,
                        'disNum':78

                    },

                    {
                        'gallery':'img/09.png',
                        'likeNum':795,
                        'disNum':43

                    },
                    {
                        'gallery':'img/10.jpg',
                        'likeNum':529,
                        'disNum':49

                    },
                    {
                        'gallery':'img/11.jpg',
                        'likeNum':418,
                        'disNum':26

                    },
                    {
                        'gallery':'img/12.png',
                        'likeNum':936,
                        'disNum':28

                    },
                    {
                        'gallery':'img/13.jpg',
                        'likeNum':852,
                        'disNum':56

                    },
                    {
                        'gallery':'img/02.jpg',
                        'likeNum':422,
                        'disNum':20

                    },
                    {
                        'gallery':'img/03.png',
                        'likeNum':622,
                        'disNum':13

                    },
                    {
                        'gallery':'img/04.jpg',
                        'likeNum':156,
                        'disNum':45

                    },
                    {
                        'gallery':'img/05.png',
                        'likeNum':789,
                        'disNum':59
                    },
                    {
                        'gallery':'img/06.jpg',
                        'likeNum':254,
                        'disNum':18

                    },

                    {
                        'gallery':'img/14.jpg',
                        'likeNum':526,
                        'disNum':75

                    },
                    {
                        'gallery':'img/15.png',
                        'likeNum':713,
                        'disNum':27

                    },
                    {
                        'gallery':'img/16.png',
                        'likeNum':984,
                        'disNum':154

                    },
                    {
                        'gallery':'img/07.png',
                        'likeNum':526,
                        'disNum':75

                    },
                    {
                        'gallery':'img/08.jpg',
                        'likeNum':718,
                        'disNum':43

                    },
                    {
                        'gallery':'img/17.jpg',
                        'likeNum':535,
                        'disNum':17

                    },
                    {
                        'gallery':'img/18.png',
                        'likeNum':783,
                        'disNum':29

                    },
                    {
                        'gallery':'img/19.jpg',
                        'likeNum':589,
                        'disNum':53

                    },
                    {
                        'gallery':'img/20.jpg',
                        'likeNum':189,
                        'disNum':15

                    },
                    {
                        'gallery':'img/21.png',
                        'likeNum':897,
                        'disNum':88

                    },

                    {
                        'gallery':'img/24.png',
                        'likeNum':698,
                        'disNum':59

                    },
                    {
                        'gallery':'img/22.png',
                        'likeNum':235,
                        'disNum':11

                    },



                    {
                        'gallery':'img/01.png',
                        'likeNum':312,
                        'disNum':17

                    },
                    {
                        'gallery':'img/23.jpg',
                        'likeNum':859,
                        'disNum':46

                    },
                    {
                        'gallery':'img/25.png',
                        'likeNum':742,
                        'disNum':16

                    }

                ];
            },300)


        };
        // $scope.getarea=function(){
        //     //myaddr(116.324499,39.899216);
        //     // 进行定位
        //     baidumap_location.getCurrentPosition(function (result) {
        //         var latitude=result.latitude;
        //         var lontitude=result.lontitude;
        //         alert(JSON.stringify(result, null, 4));
        //         myaddr(lontitude,latitude);
        //     }, function (error) {
        //
        //     });
        // };
        // //根据定位得到的经纬度对地址进行解析
        // function myaddr(lontitude,latitude){
        //     //alert("我的地址是："+lontitude+","+latitude);
        //
        //     // 百度地图API功能
        //     var map = new BMap.Map("allmap");
        //     var point = new BMap.Point(lontitude, latitude);//34.7534880000,113.6313490000
        //     map.centerAndZoom(point, 12);
        //     var marker = new BMap.Marker(point);  // 创建标注
        //     map.addOverlay(marker);               // 将标注添加到地图中
        //     //把地址在地图上标出来
        //     var geoc = new BMap.Geocoder();
        //     geoc.getLocation(point, function(rs){
        //         var addrmsg=rs.address;
        //         //var addComp = rs.addressComponents;  //详细的分省市县街道的信息
        //         //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        //
        //         var opts = {
        //             width : 200,     // 信息窗口宽度
        //             height: 50     // 信息窗口高度
        //         };
        //         var infoWindow = new BMap.InfoWindow("地址:"+addrmsg, opts);  //创建信息窗口对象
        //         map.openInfoWindow(infoWindow,point); //开启信息窗口
        //
        //
        //     });
        //
        //
        //
        // }
    }]);
    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });
    app.config(function ($stateProvider,$urlRouterProvider,$locationProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            })
            .state('detailed', {
                url: "/detailed",
                templateUrl: "views/detailed.html",
                controller: 'detailedCtrl'
            })
            // .state('gallery',{
            //     url:"/gallery",
            //     templateUrl:"views/gallery.html",
            //     controller:"GalleryCtrl"
            // })
            .state('map',{
                url:"/map",
                templateUrl:"views/map.html",
                controller:"mapCtrl"
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

    })
        .controller('HomeCtrl', function($scope) {
        })
        .controller('detailedCtrl',function ($scope) {
        })
    //     .controller('GalleryCtrl',function ($scope) {
    //     })
        .controller('mapCtrl',function ($scope) {

    });
})(angular);