angular.module('MainCtrl', ['MainService', 'DataGeneratorService'])
    .controller('MainController', ['$scope', 'MainService', 'DataGeneratorService', function ($scope, MainService, DataGeneratorService) {

        var createSplineGraph = function (data) {
            var options1 = {
                animationEnabled: true,
                data: [
                    {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Positive",
                        dataPoints: data.positive
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        legendText: "Negative",
                        dataPoints: data.negative
                    }
                ]
            };

            $("#chartContainer1").CanvasJSChart(options1);
        };

        var createBarGraph = function (data) {
            var options2 = {
                animationEnabled: true,
                data: [
                    {
                        type: "bar",
                        showInLegend: true,
                        name: "Negitive Sentiments",
                        color: "red",
                        dataPoints: data.negative
                    },
                    {
                        type: "bar",
                        showInLegend: true,
                        name: "Positive Sentiments",
                        color: "blue",
                        dataPoints: data.positive
                    }
                ]
            };

            $("#chartContainer2").CanvasJSChart(options2);
        };

        angular.element(document).ready(function () {
            MainService.get().then(function (data) {
                data = data.overview;

                var sentimentsData = DataGeneratorService.generateSplineGraphData(data.sentiment_over_time);
                createSplineGraph(sentimentsData);
                $scope.splineChartTitle = "Sentiments Over Time";
                var sourceStatsData = DataGeneratorService.generateBarGraphData(data.source_wise_stats);
                createBarGraph(sourceStatsData);
                $scope.barChartTitle = "Source wise sentiments";

                $scope.positivePostsData = DataGeneratorService.generatePostsData(data.top_pos_posts);
                $scope.positivePostsTitle = "Top Positive Posts";
                $scope.negativePostsData = DataGeneratorService.generatePostsData(data.top_neg_posts);
                $scope.negativePostsTitle = "Top Negative Posts";

                $scope.positiveCommentsData = DataGeneratorService.generateCommentsData(data.top_pos_comments);
                $scope.positiveCommentsTitle = "Top Positive Comments";
                $scope.negativeCommentsData = DataGeneratorService.generateCommentsData(data.top_neg_comments);
                $scope.negativeCommentsTitle = "Top Negative Comments";

                $scope.positiveLikesData = DataGeneratorService.generateLikesData(data.top_likers);
                $scope.positiveLikesTitle = "Top Positive Likes";
                $scope.negativeLikesData = DataGeneratorService.generateLikesData(data.top_dis_likers);
                $scope.negativeLikesTitle = "Top Negative Likes";
            });
        });

    }]);