angular.module('CommentsContainerDirective', []).directive('feltsoCommentsContainer', function(){
    var commentsContainerCtrl = function ($scope) {
        $scope.success = $scope.type === "success";
    };

    return {
        template:'<div class="row bottom" ng-repeat="comment in data"> ' +
            '<div class="col-md-3 right">' +
                '<label class="custom-label">{{comment.userName}}</label>' +
            '</div>' +
            '<div class="col-md-6 right">' +
                '<label class="custom-label">{{comment.text}}</label>' +
            '</div>' +
            '<div class="col-md-2">' +
                '<label class="custom-label">{{comment.score * 100}}%</label>' +
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
        controller: commentsContainerCtrl
    }
});