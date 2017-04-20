angular.module('LikesContainerDirective', []).directive('feltsoLikesContainer', function(){
    var likesContainerCtrl = function ($scope) {
        $scope.success = $scope.type === "success";
    };

    return {
        template:'<div class="row bottom" ng-repeat="like in data"> ' +
            '<div class="col-md-9 right">' +
                '<label class="custom-label">{{like.userName}}</label>' +
            '</div>' +
            '<div class="col-md-2">' +
                '<label class="custom-label">{{like.percentage}}%</label>' +
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
        controller: likesContainerCtrl
    }
});