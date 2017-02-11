angular.module("myApp")
	.controller("HomeCtrl", ["$css","$http",function($css,$http){
		$css.add("css/home.css");
		$http.get("json/index.json")
			.success(function(result){
				
			})
			.error(function(){
				console.log("请求失败");
			})
	}])
	.controller("CartCtrl", ["$css",function($css){
		$css.add("css/cart.css");
	}])