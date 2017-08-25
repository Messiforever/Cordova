(function () {
    var app = angular.module("myApp");
    app.directive("homePage",function () {
        return{
            restrict:'E',
            template:
            // "<nav class='homeNav'>" +
            //     "<a class='ion-navicon-round'ng-click='shouNavContent()'></a>"+
            //     "<a>Messi</a>"+
            //     "<a>Sign in</a>"+
            // "</nav>"+
            //     "<div class='navContent'  ng-hide='showBool' >" +
            //     "<div><input type='text' placeholder='Search'></div>"+
            //     "<div>Shots</div>"+
            //     "<div>Blog</div>"+
            //     "<div>Podcast</div>"+
            //     "<div>Mettups</div>"+
            //     "<div>Jobs</div>"+
            //     "<div>Hiring</div>"+
            //     "<div>More <a class='ion-chevron-right'></a></div>"+
            //     "<div>Looking to hire a designer?<a>Learn more</a></div>"+
            // "</div>"+
            //     "<div class='bottomNav'>" +
            //     "<div><a href=''>Popular</a><label class='ion-chevron-down'></label><a href=''>Shots</a><label class='ion-chevron-down'></label><a href=''>Now</a><label class='ion-chevron-down'></label></div>"+
            //     "<a class='ion-grid' on-tap='ChangeView()'></a>"+
            // "</div>"+
                "<div class='cardContainer'>" +
                "<div class='card' ng-repeat='item in uItem track by $index' ui-sref='detailed'>" +
                "<div class='gallery'><img src='{{item.gallery}}'></div>"+
                "<div class='like'>" +
                "<div><a>{{item.disNum}}<label class='ion-android-textsms'></label></a></div>"+
                "<div><a>{{item.likeNum}}<label class='ion-android-favorite'></label></a></div>"+
            "</div>"






        }
    })
})(angular);