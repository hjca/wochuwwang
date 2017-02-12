angular.module("myApp")
	.factory("HomeService",["$http",function($http){
		var menu;
		$http.get("json/index.json")
			.success(function(result){
				menu = result.data.menu;
				console.log(menu);
			})
			.error(function(){
				console.log("获取数据失败");
			})
			
			return {
				getData : function(){
					return menu;
				}
			}
	}])