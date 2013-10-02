'use strict';

angular.module('extruderApp')
  .controller('MainCtrl', function ($scope) {

        $scope.units = [ { name : "inches" }, { name : "centimeters" }, { name : "millimeters"} ];
        $scope.currentUnits = $scope.units[1].name;
        $scope.height = 11.3;
        $scope.width = 12;
        $scope.desiredHeight = 11.3;
        $scope.desiredUnits = $scope.currentUnits;
        $scope.characters = [
            {   name : "Finn",
                measurements : [
                    { name : "left leg",
                      value : 6.5 },
                    { name : "right leg",
                      value : 3.3 },
                    { name : "left arm",
                      value : 5.5 },
                    { name : "right arm",
                      value : 5.5 },
                    { name : "head/torso height",
                      value : 5.8 },
                    { name : "torso diameter",
                      value : 2.8 },
                    { name : "head without ears",
                      value : 2.2 },
                    { name : "head with ears",
                      value : 2.5 },
                    { name : "arm/leg diameter",
                      value : 0.4 },
                    { name : "foot length",
                      value : 1.3 },
                    { name : "left ankle to bottom of foot",
                      value : 1.0 },
                    { name : "right ankle to bottom of foot",
                      value : 0.7 }
                ]
            },
            {   name : "Jake",
                measurements : [
                    { name : "left arm",
                      value : 5.6 },
                    { name : "right arm",
                      value : 4.2 },
                    { name : "left leg",
                      value : 0.8 },
                    { name : "right leg",
                      value : 1.4 },
                    { name : "head/torso height",
                      value : 4.6 },
                    { name : "torso diameter",
                      value : 2.8 },
                    { name : "eye with black",
                      value : 1.1 },
                    { name : "eye without black",
                      value : 0.9 },
                    { name : "arm diameter",
                      value : 0.4 },
                    { name : "leg diameter",
                      value : 0.25 },
                    { name : "foot length",
                      value : 0.8 }
                ]
            }
        ];

        $scope.convert = function() {
            console.log("desired units", $scope.desiredUnits);
            console.log("desiredHeight", $scope.desiredHeight);
            console.log("units are", $scope.currentUnits);
            var conversionValue = 1;
            if($scope.currentUnits !== $scope.desiredUnits) {
                conversionValue = $scope.convertUnits($scope.currentUnits, $scope.desiredUnits);
                $scope.height *= conversionValue;
                $scope.currentUnits = $scope.desiredUnits;
            }
            console.log("conversion value is", conversionValue);
            var ratio = $scope.desiredHeight / $scope.height;
            console.log("ratio is", ratio);
            $scope.width *= conversionValue;
            $scope.width *= ratio;
            $scope.height *= ratio;
            angular.forEach($scope.characters, function(character) {
                angular.forEach(character.measurements, function(measurement) {
                    measurement.value *= conversionValue;
                    measurement.value *= ratio;
                });
            });
        };

        $scope.convertUnits = function(oldUnits, newUnits) {
            var conversionValue = 0;
            if(oldUnits == "centimeters") {
                if(newUnits == "millimeters") {
                    conversionValue = 10;
                }
                else {
                    conversionValue = 0.3937;
                }
            }
            else if(oldUnits == "millimeters") {
                if(newUnits == "centimeters") {
                    conversionValue = 0.1;
                }
                else {
                    conversionValue = 0.03937;
                }
            }
            else {
                if(newUnits == "centimeters") {
                    conversionValue = 2.54;
                }
                else {
                    conversionValue = 25.4;
                }
            }
            return conversionValue;
        };
  });
