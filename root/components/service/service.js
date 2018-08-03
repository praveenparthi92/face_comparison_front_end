
// angular.module('myApp.services', [])


angular.module('routerApp.services', [])
    .service('Service', function ($http) {
        var storedNames = JSON.parse(sessionStorage.getItem("names"));

        var port = 'http://localhost:8070'
        
       

        this.compareFace = function (info, photo1, photo2, callback) {
            var formdata = new FormData();
            formdata.append("credentials", JSON.stringify(info));
            formdata.append("fileone", photo1);
            formdata.append("filetwo", photo2);

            $http(
                {
                    method: 'POST',
                    url: port + '/FaceComparision',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: formdata,
                    transformRequest: function (data, headersGetterFunction) {
                        return data;
                    }

                }).then(function mySuccess(response) {

                    callback(response);
                }, function myError(err) {

                    callback(err);
                });


        };


        this.addFace = function (info, photo1, callback) {
            var formdata = new FormData();
            formdata.append("credentials", JSON.stringify(info));
            formdata.append("fileone", photo1);
            $http(
                {
                    method: 'POST',
                    url: port + '/AddComparision',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: formdata,
                    transformRequest: function (data, headersGetterFunction) {
                        return data;
                    }

                }).then(function mySuccess(response) {

                    callback(response);
                }, function myError(err) {

                    callback(err);
                });


        };


       
       
    });

angular.module('routerApp.services').service('Auth', function () {

    this.getUserInfo = function () {
        var userInfo = JSON.parse(sessionStorage.getItem("names"));
        return userInfo;
    }
})
