'use strict';

angular.module('extruderApp')
  .controller('MainCtrl', function ($scope) {

        $scope.measurements = {
            "finn" : {
                "left leg" : 6.5,
                "right leg" : 3.3,
                "left arm" : 5.5,
                "right arm" : 5.5,

            }
        };

  });
