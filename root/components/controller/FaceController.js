
var app = angular.module('routerApp.FaceController', ['toaster']);
app.controller('facectrl', function ($scope, $stateParams,$modal, $filter, Service, $window, $state, $rootScope, Upload, $http, toaster) {
    $scope.compareFace = function (photos, valid) {
      
        console.info("photos",photos);
       
        if (valid) {
            var data = {
                "bucketname": "facedetecttool",
                "collectionname": "FaceCollections",
                
            }

            Service.compareFace(data, photos.photoone, photos.phototwo, function (res) {
               console.info("res",res);
                if (res.data.status == "Success") {
                    toaster.success(res.data.message);
                    $scope.Messages=res.data.Result;
                    $scope.response=false;
                    //setTimeout(function () { $window.location.reload(); }, 1500);

                } else if (res.data.status == 'Failure') {
                    $scope.myValue = true;
                    toaster.error(res.data.message);
                }
                if (res.data.message == "Session Expired") {
                    toaster.error(res.data.message);
                }

            })
        }
        else {
            //toaster.error("Please Fill All The Fields");
            return;
        }


    }


    $scope.addFace = function (photos, valid) {
      
      console.info("photos",photos);
     
      if (valid) {
          var data = {
              "bucketname": "facedetecttool",
              "collectionname": "FaceCollections",
            }

          Service.addFace(data, photos.collectPhoto, function (res) {
             console.info("res",res);
              if (res.data.status == "Success") {
                  toaster.success(res.data.message);
                //   $scope.Messages=res.data.Result;
                //   $scope.response=false;
                  //setTimeout(function () { $window.location.reload(); }, 1500);

              } else if (res.data.status == 'Failure') {
                  //$scope.myValue = true;
                  toaster.error(res.data.message);
              }
              if (res.data.message == "Session Expired") {
                  toaster.error(res.data.message);
              }

          })
      }
      else {
          //toaster.error("Please Fill All The Fields");
          return;
      }


  }

})