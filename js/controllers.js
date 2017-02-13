angular.module("myApp")
	.controller("HomeCtrl", ["$css","$http","$rootScope",function($css,$http,$rootScope){
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
				 
			})
			data.error(function(){
				console.log("获取数据失败");
			})
			
		$http.get("json/indexPackage.json")
			.success(function(result){
				self.lists = result.data;
			})
			.error(function(){
				console.log("数据请求失败");
			})

			
		$http.get("json/indexShop.json")
			.success(function(result){
				self.listShops = result.data;
//				$rootScope.shopIds = self.
			})
			.error(function(){
				console.log("数据请求失败");
			})
			
		$http.get("json/indexPartition.json")
			.success(function(result){
				self.listCommodities = result.data;
			})
			.error(function(){
				console.log("数据请求失败");
			})
			
	}])
	.controller("ClassCtrl", ["$css",function($css){
		$css.add("css/classCtrl.css");
		
	}])
	.controller("CartCtrl", ["$css",function($css){
		$css.add("css/cart.css");
		
	}])
	.controller("MineCtrl", ["$css",function($css){
		$css.add("css/mine.css");
		
	}])
	//商品详情
	.controller("DetailCtrl",["$routeParams","$http","$css",function($routeParams,$http,$css){
		$css.add("css/detail.css");
		var self = this;
		
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			direction: 'horizontal',
			autoplay:2000,
	        slidesPerView: 'auto',
	        paginationClickable: true,
	        spaceBetween: 30,
	        observer:true,//修改swiper自己或子元素时，自动初始化swiper
//			observeParents:true,
	    });
		
		self.num = 1;
		
		//减号
		self.sub = function(){
			if(self.num == 1){
				self.num = 1;
			}else{
				self.num--;
			}
		}
		
		//加好
		self.add = function(){
			self.num++;
		}
		
		$http.get("./json/shopMessage.json")
			.success(function(result){
				for (var shopObj of result.shopMessage) {
					if(shopObj.shopId == $routeParams.shopId){
						self.slides = shopObj.slideImg;
						self.shopTitles = shopObj.shopTitle;
						self.flavors = shopObj.flavor;
						self.pric = shopObj.price;
						self.oldPric = shopObj.oldPrice;
						self.names = shopObj.shopName;
						self.addres = shopObj.place;
						self.saveTim = shopObj.saveTime;
						self.saveT = shopObj.saveCondition;
						self.cations = shopObj.Specifications
					}
				}
				console.log(result.shopMessage);
			})
			.error(function(){
				console.log("说取数据失败");
			})
		
	}])
