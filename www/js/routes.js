angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.cameraTabDefaultPage', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/cameraTabDefaultPage.html',
          controller: 'cameraTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cartTabDefaultPage', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/cartTabDefaultPage.html',
          controller: 'cartTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('signup', {
      url: '/page5',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('blankPage', {
      url: '/page7',
      templateUrl: 'templates/blankPage.html',
      controller: 'blankPageCtrl'
    })
        
      
    
      
        
    .state('cameraTabDefaultPage2', {
      url: '/page10',
      templateUrl: 'templates/cameraTabDefaultPage2.html',
      controller: 'cameraTabDefaultPage2Ctrl'
    })
        
      
    
      
        
    .state('cartTabDefaultPage2', {
      url: '/page11',
      templateUrl: 'templates/cartTabDefaultPage2.html',
      controller: 'cartTabDefaultPage2Ctrl'
    })
        
      
    
      
        
    .state('cloudTabDefaultPage2', {
      url: '/page12',
      templateUrl: 'templates/cloudTabDefaultPage2.html',
      controller: 'cloudTabDefaultPage2Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});