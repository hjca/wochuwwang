angular.module("myApp")
	.factory("shopMessage",['$http','$rootScope',function($http,$rootScope){
		
		$http({
            url:'./json/shopMessage.json',
            method:'GET'
        }).success(function(result){
//响应成功
            $rootScope.fistNav  = result.data;
        }).error(function(data){
//处理响应失败
            console.log(data)
        });

		
		return {
			firstData : function(){
				return $http.get("json/shopMessage.json");
			}
		}
	}])