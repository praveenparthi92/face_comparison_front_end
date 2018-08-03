angular.module('routerApp', ['ui.router', 'routerApp.services','ngFileUpload','ui.bootstrap',
    
    'routerApp.FaceController',
    
     
])
    .run(["$rootScope", "$location", 'Auth', '$window', '$state', function ($rootScope, $location, Auth, $window, $state) {
        var data = Auth.getUserInfo();


        // if (data == null || data == undefined) {
        //     // $window.location.href = '#/login';
        //     $location.path("/login");
        // }
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            var data = Auth.getUserInfo();


            // if (data == null || data == undefined) {
            //     // $state.transitionTo("login");
            //     $location.path("/login");
            // }
        })
        $rootScope.spinner = {
            active: false,
            on: function () {
                this.active = true;
            },
            off: function () {
                this.active = false;
            }
        };

        $rootScope.$on("$stateChangeStart", function (event, current, previous, x) {
            $rootScope.spinner.on();

        });

        
        // $rootScope.$on("$stateChangeStart", function (event, current, previous, x) {
        //     $rootScope.spinner.on();

        // });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {


            $rootScope.spinner.active = false;
        });
    }])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/face');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================

           

            .state('face', {
                url: '/face',
                templateUrl: 'root/views/admin/Face.html',
                controller: 'facectrl'
            })
           

    

    })

     .factory('httpInterceptor', function ($q, $rootScope, $log) {

        var numLoadings = 0;

        return {
            request: function (config) {

                numLoadings++;

                // Show loader
                console.log("loader_show");
                $rootScope.$broadcast("loader_show");
                return config || $q.when(config)

            },
            response: function (response) {

                if ((--numLoadings) === 0) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return response || $q.when(response);

            },
            responseError: function (response) {

                if (!(--numLoadings)) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return $q.reject(response);
            }
        };
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    
    }).config(function ($httpProvider) {
        $httpProvider.interceptors.push(function ($rootScope, $q) {
            return {
                request: function (config) {
                    $rootScope.spinner.on();
                    return config
                },
                response: function (response) {
                    $rootScope.spinner.off();
                    return response
                },
                responseError: function (response) {
                    $rootScope.spinner.off();
                    return response
                },
                requestError: function (response) {
                    $rootScope.spinner.off();
                    return response
                }
            }
        })
    })

    .factory('httpInterceptor', function ($q, $rootScope, $log) {

        var numLoadings = 0;

        return {
            request: function (config) {

                numLoadings++;

                // Show loader
                $rootScope.$broadcast("loader_show");
                return config || $q.when(config)

            },
            response: function (response) {

                if ((--numLoadings) === 0) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return response || $q.when(response);

            },
            responseError: function (response) {

                if (!(--numLoadings)) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return $q.reject(response);
            }
        };
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');

    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push(function ($rootScope, $q) {
            return {
                request: function (config) {
                    $rootScope.spinner.on();
                    return config
                },
                response: function (response) {
                    $rootScope.spinner.off();
                    return response
                },
                responseError: function (response) {
                    $rootScope.spinner.off();
                    return response
                },
                requestError: function (response) {
                    $rootScope.spinner.off();
                    return response
                }
            }
        })
    })

//write inside indext.html;

function onloadFunction() {
    gapi.client.setApiKey('AIzaSyDarkPv_zaiHJhc0RgNyhGaZFUJyuGzDeI');
    gapi.client.load('plus', 'vl', function () { })
    //gapi.client.load('plus', 'v1', onGapiLoaded);


}


