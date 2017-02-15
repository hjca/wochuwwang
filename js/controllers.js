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
	.controller("CartCtrl", ["$css","$location",function($css,$location){
		
		var message = JSON.parse(window.localStorage.getItem("message"));
		var mesId = message.id;
		
		if(mesId != 1){
			$location.path('cart');
			$css.add("css/cart.css");
		}else{
			$location.path('cartMess/3');
		}
		
	}])
	.controller("CartMessCtrl",["$css","$location","$http","$routeParams",function($css,$location,$http,$routeParams){
		$css.add("css/cartSecond.css");
		
		var arr = ["一","二","三","四","五","六","日"];
		
		var self = this;
		self.cartReturn = function(){
			$location.path("classify");
		}
		
		var date = new Date();
		self.week = date.toLocaleDateString().substring(5) + "周" + arr[date.getDay()-1];
		
		if(date.getMinutes() <= 9){
			self.time = date.getHours() + " : " + "0" + date.getMinutes();
		}else{
			self.time = date.getHours() + " : "  + date.getMinutes();
		}
		
		self.cartNum = 1;
		
		//减号
		self.cartSub = function(){
			if(self.cartNum <= 1){
				self.cartNum = 1;
			}else{
				self.cartNum--;
			}
		}
		
		//加号
		self.cartAdd = function(){
			self.cartNum++;
		}
		
		
		//获取数据
		$http.get("./json/shopMessage.json")
			.success(function(result){
				
				for (var shopObj of result.shopMessage) {
					if($routeParams.shopIds == shopObj.shopId){
						self.img = shopObj.logoImg;
						self.shopName = shopObj.shopTitle;
						self.newPrice = shopObj.price;
						self.oldPrice = shopObj.oldPrice;
						self.buyNum = shopObj.buyNum;
					}
					
				}
			})
			.error(function(){
				console.log("说取数据失败");
			})
	}])
	.controller("MineCtrl", ["$css","$location",function($css,$location){
		var id = JSON.parse(window.localStorage.getItem("message")).id;
		
		if(id == 1){
			$css.add("css/mine.css");
		}else{
			$location.path("login");
		}
		var self = this;
		self.signOut = function(){
			var message = JSON.parse(window.localStorage.getItem("message"));
			message.id = 0;
			window.localStorage.setItem("message", JSON.stringify(message));
			$location.path("home");
		}
		
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
		
		//加号
		self.add = function(){
			self.num++;
		}
		
		//返回按钮
		self.goback = function(){
			window.history.back();
		}
		
		//添加购物车
		self.addCart = function(){
			self.nums = self.num
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
						self.cations = shopObj.Specifications;
						self.shopIds = shopObj.shopId;
					}
				}
				console.log(result.shopMessage);
			})
			.error(function(){
				console.log("说取数据失败");
			})
		
	}])
	//登录
	.controller("LoginCtrl", ["$css",function($css){
		$css.add("css/login.css");
		
	}])
	//注册
	.controller("RegisterCtrl", ["$css",function($css){
		$css.add("css/register.css");
		var self = this;
		self.regBack = function(){
			window.history.back();
		}
		
		self.complete = function(){
			
//			if(self.phones == "" && self.passwords == ""){
//				alert("手机号和密码不能为空！！");
//			}
			
			var message = {
				phoneNum : self.phones,
				registerCtrl : self.passwords,
				id : 1
			}
			if(self.phones == "" && self.passwords == ""){
				alert("手机号和密码不能为空！！");
			}else{
				window.localStorage.setItem("message", JSON.stringify(message));
				window.location.href="#/home";
			}
		}
	}])
