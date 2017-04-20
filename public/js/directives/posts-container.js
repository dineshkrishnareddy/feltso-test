angular.module('PostsContainerDirective', []).directive('feltsoPostsContainer', function(){
    var postsContainerCtrl = function ($scope) {
        $scope.success = $scope.type === "success";
    };

    return {
        template:'<div class="row bottom" ng-repeat="post in data"> ' +
            '<div class="col-md-9 right">' +
                '<label class="custom-label">{{post.message}}</label>' +
            '</div>' +
            '<div class="col-md-2">' +
                '<label class="custom-label">{{post.percentage}}%</label>' +
            '</div>' +
            '<div class="col-md-1">' +
                '<i ng-show="success" class="glyphicon glyphicon-triangle-top green-color""></i>' +
                '<i ng-show="!success" class="glyphicon glyphicon-triangle-bottom red-color""></i>' +
            '</div>' +
        '</div>',
        scope: {
            'title': '=',
            'data': '=',
            'type': '@'
        },
        link: function (scope, tElement, tAttrs, transclude) {},
        controller: postsContainerCtrl
    }
});