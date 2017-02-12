angular.module("myApp")
	.controller("HomeCtrl", ["$css","$http",function($css,$http){
		$css.add("css/home.css");
		var swiper = new Swiper("#banner",{
			pagination:"#banner_pagination",
			autoplay:2000,
			autoplayDisabledOnInteraction:false,
			loop : true,
			paginationClickable:true
		})
		
		var self = this;
		
		var data = $http.get("json/index.json")
			data.success(function(result){
				
				self.menus = result.data.menu;
				console.log(self.menus);
				 
			})
			data.error(function(){
				console.log("获取数据失败");
			})
			
	}])
	.controller("CartCtrl", ["$css",function($css){
		$css.add("css/cart.css");
		
	}])