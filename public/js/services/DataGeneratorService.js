angular.module('DataGeneratorService', []).factory('DataGeneratorService', function() {

    return {

        generateSplineGraphData : function (data) {
            var positives = data.positive, negatives = data.negative;
            var sentimentOverTimePositive = [], i, sentimentOverTimeNegative = [], date;

            for (i = 0; i < positives.length; i++) {
                date = positives[i].time.split('-');
                sentimentOverTimePositive.push({y: positives[i].count, x: new Date(2017, date[1], date[0])});
            }

            for (i = 0; i < negatives.length; i++) {
                date = negatives[i].time.split('-');
                sentimentOverTimeNegative.push({y: negatives[i].count, x: new Date(2017, date[1], date[0])});
            }

            return {'positive': sentimentOverTimePositive, 'negative': sentimentOverTimeNegative};
        },

        generateBarGraphData : function (data) {
            var keys = Object.keys(data), key;
            var sourceWiseSentimentsPositive = [], i, sourceWiseSentimentsNegative = [];

            for (i = 0; i < keys.length; i++) {
                key = keys[i];
                sourceWiseSentimentsPositive.push({y: data[key].positive_count, label: key});
                sourceWiseSentimentsNegative.push({y: data[key].negative_count, label: key});
            }

            return {'positive': sourceWiseSentimentsPositive, 'negative': sourceWiseSentimentsNegative};
        },


        generateCommentsData : function (data) {
            var i, postData=[];

            for (i = 0; i < data.length; i++) {
                postData.push({score: data[i].score, text: data[i].text, userName: data[i].user_info.name});
            }

            return postData;
        },

        generatePostsData : function (data) {
            var i, postData=[];

            for (i = 0; i < data.length; i++) {
                postData.push({message: data[i].message, percentage: data[i].percentage});
            }

            return postData;
        },

        generateLikesData : function (data) {
            var i, likesData=[];

            for (i = 0; i < data.length; i++) {
                likesData.push({userName: data[i].name, percentage: data[i].percentage});
            }

            return likesData;
        }
    }
});