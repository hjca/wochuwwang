angular.module("myApp",["ngRoute","angularCSS"])
	.run(["$window","$rootScope",function($window,$rootScope){
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 market（闪送超市）那么就隐藏footer
			if ($window.location.href.indexOf("mine") != -1) {
				$rootScope.rootIsFooterShow = false;
			}else if($window.location.href.indexOf("detail") != -1){
				$rootScope.rootIsFooterShow = false;
			}else if($window.location.href.indexOf("login") != -1){
				$rootScope.rootIsFooterShow = false;
			}else if($window.location.href.indexOf("register") != -1){
				$rootScope.rootIsFooterShow = false;
			}else {
				$rootScope.rootIsFooterShow = true;
			}
		});
		$rootScope.data1 = [];
		$rootScope.num = 0
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
		.when("/cartMess/:shopIds/:num",{
			templateUrl : "view/cartMess.html",
			controller : "CartMessCtrl as cartMessCtrl"
		})
		.when("/mine",{
			templateUrl : "view/mine.html",
			controller : "MineCtrl as mineCtrl"
		})
		.when("/cartMine",{
			templateUrl : "view/mine.html",
			controller : "cartMineCtrl as messageCtrl"
		})
		//商品详情界面
		.when("/detail/:shopId",{
			templateUrl : './view/detail.html',
			controller : "DetailCtrl as detailCtrl"
		})
		.when("/login",{
			templateUrl : './view/login.html',
			controller : "LoginCtrl as loginCtrl"
		})
		.when("/register",{
			templateUrl : './view/register.html',
			controller : "RegisterCtrl as registerCtrl"
		})
		.otherwise({
			redirectTo : '/home'
		})
	}])