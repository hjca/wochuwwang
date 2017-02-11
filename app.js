angular.module("myApp",["ngRoute","angularCSS"])
	.run(["$window","$rootScope",function($window,$rootScope){
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf("mine") != -1) {
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])
	.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/home",{
			templateUrl : "view/home.html",
			controller : "HomeCtrl as homeCtrl"
		})
		.when("/classify",{
			templateUrl : "view/classify.html",
			controller : "ClassCtrl as classCtrl"
		})
		.when("/cart",{
			templateUrl : "view/cart.html",
			controller : "CartCtrl as cartCtrl"
		})
		.when("/mine",{
			templateUrl : "view/mine.html",
			controller : "MineCtrl as mineCtrl"
		})
		.otherwise({
			redirectTo : '/home'
		})
	}])