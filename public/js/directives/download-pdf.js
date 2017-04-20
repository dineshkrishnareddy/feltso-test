angular.module('DownloadPDFDirective', []).directive('feltsoDownloadPdf', function(){
    var downloadPDFCtrl = function ($scope) {

        $scope.download = function(){
            var doc = new jsPDF();
            if ($scope.type === 'graph') {

                var canvas = $("#"+ $scope.containerid +" .canvasjs-chart-canvas").get(0);
                var img = new Image();
                img = canvas.toDataURL('image/jpeg');

                doc.setFontSize(40);
                doc.addImage(img, 'JPEG', 10, 10, 150, 150);
            } else {

                var specialElementHandlers = {
                    '#editor': function (element, renderer) {
                        return true;
                    }
                };
                doc.fromHTML($('#' + $scope.containerid).html(), 15, 15, {
                    'width': 170,
                    'elementHandlers': specialElementHandlers
                });
            }
            doc.save($scope.containerid + '.pdf');
        };
    };

    return {
        template:'<i ng-click="download()" data-toggle="tooltip" title="Download" class="glyphicon glyphicon-download download-button"></i>',
        scope: {
            'containerid': '@',
            'type': '@'
        },
        controller: downloadPDFCtrl
    }
});