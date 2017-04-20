angular.module('ChartContainerDirective', []).directive('feltsoChartContainer', function(){
    var chartContainerCtrl = function ($scope) {
        //if ($scope.data) {
        //    var options1 = {
        //        title: {
        //            text: $scope.chartTitle
        //        },
        //        animationEnabled: true,
        //        data: [
        //            {
        //                type: $scope.chartType,
        //                showInLegend: true,
        //                legendText: "Positive",
        //                dataPoints: $scope.data.positive
        //            },
        //            {
        //                type: $scope.chartType,
        //                showInLegend: true,
        //                legendText: "Negative",
        //                dataPoints: $scope.data.negative
        //            }
        //        ]
        //    };
        //
        //    $("#" + $scope.id).CanvasJSChart(options1);
        //}
    };

    return {
        template:'<div id={{id}}></div>',
        scope: {
            'id': '@',
            'type': '@',
            'title': '=',
            'data': '='
        },
        link: function ($scope, tElement, tAttrs, transclude) {
            if ($scope.data) {
                var options1 = {
                    title: {
                        text: $scope.title
                    },
                    animationEnabled: true,
                    data: [
                        {
                            type: $scope.type,
                            showInLegend: true,
                            legendText: "Positive",
                            dataPoints: $scope.data.positive
                        },
                        {
                            type: $scope.type,
                            showInLegend: true,
                            legendText: "Negative",
                            dataPoints: $scope.data.negative
                        }
                    ]
                };

                $("#" + $scope.id).CanvasJSChart(options1);
            }
        },
        controller: chartContainerCtrl
    }
});