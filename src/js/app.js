angular.module("creditcardApp", ['ngRoute']);

// configure our routes
angular.module("creditcardApp").config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/page.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/page.html',
            controller  : 'contactController'
        })

        // route for the contact page
        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'loginController'
        })

        // route for the contact page
        .when('/admin', {
            templateUrl : 'views/admin.html',
            controller  : 'adminController'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});

angular.module("creditcardApp").controller('aboutController', function($scope) {
    $scope.title = 'About';
    $scope.paragraphs = [
    	'My name is John Peden and I\'m the creator of this single page application. Credit Card Airline points was originally conceived as a way for me to generate referals to the credit cards you see on the homepage. Visitors would sign up, I\'d get a comission that was paid in points.',
    	'While that was the original plan, the reality turned out to be that credit card companies are notoriously difficult to build that sort of relationship with. In the end, I decided to use the application as a training ground for Angular and front end web development in general. I came from a WordPress background originally and have loved getting to grips with the fantastic power and simplicity of Angular JS.'
    ];
    $scope.url = 'http://www.johncpeden.com';
    $scope.linkAnchor = 'Learn More';
});

angular.module("creditcardApp").controller('contactController', function($scope) {
    $scope.title = 'Contact';
     $scope.paragraphs = [
    	'Want to get in touch about me, my work or this application? Just drop me an email by clicking the button below.'
    ];
    $scope.url = 'mailto:john@tweakdigital.co.uk';
    $scope.linkAnchor = 'Email me';
});

angular.module("creditcardApp").controller('loginController', function($scope) {
    $scope.title = 'Login';
});

angular.module("creditcardApp").controller('adminController', function($scope) {
    $scope.title = 'Admin';
});